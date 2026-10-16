// Sends the feedback form to ScrollSnapshot's feedback endpoint, which emails
// it to the developer. Only what the person typed or ticked is sent, plus the
// extension version from this page's address. No cookies, no tracking.
const ENDPOINT = 'https://scrollsnapshot-feedback.your-subdomain.workers.dev/feedback'
const FALLBACK_EMAIL = 'zubairdev27@gmail.com'

const form = document.querySelector('form[data-source]')
const status = document.querySelector('.status')
const button = form && form.querySelector('button[type="submit"]')

function version() {
  const v = new URLSearchParams(location.search).get('v')
  return v && /^\d{1,4}(\.\d{1,4}){0,3}$/.test(v) ? v : null
}

function say(text, isError) {
  status.textContent = text
  status.classList.toggle('error', Boolean(isError))
}

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const data = new FormData(form)
    const reasons = data.getAll('reason').map(String)
    const message = String(data.get('message') || '').trim()
    if (reasons.length === 0 && message === '') {
      say(form.dataset.source === 'uninstall' ? 'Pick a reason, or write a line.' : 'Write a line first.', true)
      return
    }

    button.disabled = true
    say('Sending…')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: form.dataset.source,
          reasons,
          message,
          email: String(data.get('email') || '').trim(),
          version: version(),
          website: String(data.get('website') || ''),
        }),
        credentials: 'omit',
        referrerPolicy: 'no-referrer',
      })
      if (response.ok) {
        const done = document.createElement('p')
        done.className = 'done'
        done.textContent = 'Thank you, that has been sent. It really helps.'
        form.replaceWith(done)
        say('')
        return
      }
      if (response.status === 429) say('That was a lot at once. Please try again in a minute.', true)
      else if (response.status === 400) say('Something in the form was not accepted. Check the email address, or shorten the message.', true)
      else say(`It could not be sent just now. You can email ${FALLBACK_EMAIL} instead.`, true)
    } catch {
      say(`It could not be sent just now. You can email ${FALLBACK_EMAIL} instead.`, true)
    }
    button.disabled = false
  })
}
