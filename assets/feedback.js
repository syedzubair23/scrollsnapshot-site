// Sends the feedback form to ScrollSnapshot's feedback endpoint, which emails
// it to the developer. Only what the person typed, ticked or picked is sent,
// plus the extension version. No cookies, no tracking.
const ENDPOINT = 'https://feedback.fixandfigure.com/feedback'
const FALLBACK_EMAIL = 'zubairdev27@gmail.com'

const form = document.querySelector('form[data-source]')
const status = document.querySelector('.status')
const button = form && form.querySelector('button[type="submit"]')

function versionFromAddress() {
  const v = new URLSearchParams(location.search).get('v')
  return v && /^\d{1,4}(\.\d{1,4}){0,3}$/.test(v) ? v : null
}

// Opened from Settings, the address names the version: choose it, adding it if
// this page is older than the extension and does not list it yet.
const versionField = form && form.querySelector('select[name="version"]')
const fromAddress = versionFromAddress()
if (versionField && fromAddress) {
  if (![...versionField.options].some((option) => option.value === fromAddress)) {
    versionField.add(new Option(fromAddress, fromAddress), 1)
  }
  versionField.value = fromAddress
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
    const topic = data.get('topic')
    if (form.dataset.source === 'uninstall') {
      if (reasons.length === 0 && message === '') return say('Pick a reason, or write a line.', true)
    } else {
      if (!topic) return say("Pick what it's about.", true)
      if (message === '') return say('Write a line first.', true)
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
          version: versionField ? versionField.value || null : fromAddress,
          topic: topic ? String(topic) : null,
          mode: String(data.get('mode') || '') || null,
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
