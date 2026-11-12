// Guides for what version 1.6 added: live blur, demo mode and Clean up page. The screenshots are
// real captures of the 1.6.0 build over demo pages whose details are well-known placeholders
// (assets/guide-blur*.webp, guide-live-blur.webp, guide-clean-page*.webp, from the extension
// repo's scripts/site/capture-guides.mjs). Claims follow the extension's own changelog and the
// interface.

const shot = (file, width, height, alt, caption) => ({ file, width, height, alt, caption });

export const articles16 = [
  {
    slug: "live-blur",
    title: "Live blur: cover private details on the page",
    category: "Privacy",
    depth: "Deep guide",
    summary: "Hide an email, a card number or a whole panel on the page itself, before you capture or share your screen.",
    lead: "Live blur draws covers over parts of the page while you work, so a screenshot, a recording or a screen share shows the cover instead of what is under it. The page itself is not changed.",
    image: "guide-live-blur.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "An account settings page with the email address, card number and access key covered by solid black bars, and the live blur toolbar along the bottom of the window",
    imageCaption: "Two element covers and one area cover, with the toolbar at the bottom of the window.",
    relatedSlugs: ["find-sensitive-data", "keep-blurs", "demo-mode"],
    sections: [
      {
        title: "Open the toolbar",
        steps: ["Open ScrollSnapshot and press the blur button, beside the colour picker in the row of modes.", "A small toolbar opens at the bottom of the page.", "Choose a tool, then cover what you want hidden. Press Esc to put the tool down."],
        paragraphs: ["You can also give the toolbar a keyboard shortcut of your own: Open the live blur toolbar has no default key, so set one at chrome://extensions/shortcuts."],
      },
      {
        title: "Three ways to cover",
        steps: ["Element covers one thing you point at: a line of text, a field, an image or a whole panel. Press ↑ while pointing to take the larger box around it, and ↓ to go back.", "Area covers a rectangle you drag. Hold the pointer near the edge of the window, or of a panel you started in, and the page scrolls, so an area can be taller than the screen.", "Words covers the words you drag across, and nothing else on the line."],
      },
      {
        title: "Find sensitive data",
        paragraphs: ["The magnifier on the toolbar covers every email address, phone number, card number, bank account number, API key, private key and database address it finds on the page, plus any words or patterns you add in Settings. The guide to finding sensitive data covers it in full."],
      },
      {
        title: "Styles",
        paragraphs: ["Black out, the default, is a solid cover and the only style to use for private details. Blur softens what is under it, and can leave large text readable; the toolbar says so when you choose it. Hide makes the part invisible against the page. Choose the default style, and Blur's strength, under Settings → Live blur."],
      },
      {
        title: "Blur whole page",
        paragraphs: ["One button covers the whole page, frames and all, in the style you chose, until you press it again or clear the blurs. It is not saved, so a reload shows the page again. While it is on, the other tools are off."],
      },
      {
        title: "The toolbar itself",
        paragraphs: ["The toolbar is one row. Drag its grip to any of eight spots around the window, or move it with the arrow keys; shrink it to a small pill that shows how many blurs there are. While you work with a tool it steps aside, and it is never part of a capture."],
      },
      {
        title: "What captures and text do",
        paragraphs: ["Every capture mode shows the covers, including over headers that stay pinned while you scroll. While a page has any cover, ScrollSnapshot gives out none of its text: not to the text reader, Page as Markdown, the selection bar or a connected agent. Clear the blurs to read it.", "Two captures are refused rather than risk showing something: Turbo at a chosen width, when the page has area or word covers that would land in the wrong place, and a fullscreen video under a cover, because covers cannot draw over fullscreen."],
      },
    ],
    note: "Live blur is a cover, not a guarantee. Dialogs, popovers and fullscreen content draw above every cover, and detection can miss things. Check a capture before you share it.",
  },
  {
    slug: "find-sensitive-data",
    title: "Find sensitive data",
    category: "Privacy",
    depth: "Focused guide",
    summary: "Cover every email, phone number, card and key on a page in one press, plus words of your own.",
    lead: "Find sensitive data reads the page on your computer and covers what looks private: email addresses, phone numbers, cards, bank account numbers, keys and connection strings, plus words and patterns you add yourself.",
    image: "guide-blur-find.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "An account settings page where the email, phone number, card number, bank account number and access key are each covered by a black bar sized to the text",
    imageCaption: "One press of the magnifier: everything that looks private is covered.",
    relatedSlugs: ["live-blur", "demo-mode", "keep-blurs"],
    sections: [
      {
        title: "What it looks for",
        steps: ["Email addresses and phone numbers.", "Card numbers that pass the card checksum, and bank account numbers (IBAN) that pass theirs.", "API keys and tokens in the shapes AWS, GitHub, Stripe, Slack, Google, OpenAI and Anthropic use, and JSON web tokens.", "Private key blocks and database connection strings."],
        paragraphs: ["It reads the text in the page, in panels that open later, and in text boxes as you type, and covers a whole box when what is in it matches."],
      },
      {
        title: "Words and patterns of your own",
        paragraphs: ["Under Settings → Live blur, Words and patterns takes one entry per line. A plain word or phrase is matched as written; a pattern goes between slashes, like /ticket-[0-9]+/i. A line that is too short, not a valid pattern, or too slow to run safely is flagged and not saved. The list is kept on this device only."],
        image: shot("guide-blur-settings.webp", 1600, 1000, "ScrollSnapshot's Live blur settings: the Blur style choice above a Look for list of seven switches, from Email addresses to Connection strings", "Settings → Live blur: the style, and what Find looks for."),
      },
      {
        title: "Choose what it looks for",
        paragraphs: ["Each category can be switched off under Look for, in the same place. A change reaches open pages at once."],
      },
      {
        title: "Run it again",
        paragraphs: ["Press the magnifier again and the page is read afresh. What it covered stays covered until the new read is done, so nothing is bare in between."],
      },
    ],
    note: "Detection finds the patterns it knows and nothing else, and it cannot read text inside pictures, canvas or video. Cover anything it misses by hand.",
  },
  {
    slug: "keep-blurs",
    title: "Keep blurs on a page or a site",
    category: "Privacy",
    depth: "Focused guide",
    summary: "Save element and area covers so they come back every time the page opens.",
    lead: "A cover you place by hand lasts until the page reloads. Keep it, and it comes back on that page, or across the whole site, each time you open it.",
    image: "guide-blur-keep.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "The live blur toolbar with its Keep blurs menu open, offering Keep on this page and Keep on this site, over an account page with three covers",
    imageCaption: "Keep blurs, on the toolbar: this page, or the whole site.",
    relatedSlugs: ["live-blur", "find-sensitive-data", "demo-mode"],
    sections: [
      {
        title: "Keep them",
        steps: ["Cover what you want with Element or Area.", "Open Keep blurs on the toolbar.", "Choose Keep on this page, or Keep on this site for every page of it."],
      },
      {
        title: "How they come back",
        paragraphs: ["An element cover is kept as a rule that covers every element like it, so a list of account numbers stays covered however long it grows. An area cover comes back only when the window is the width it was drawn at, to within a pixel, since at any other width the page underneath has moved. Word covers are never kept."],
      },
      {
        title: "When one isn't found",
        paragraphs: ["If a page has changed and a kept cover cannot find what it covered, ScrollSnapshot says so rather than staying quiet: the popup shows how many applied, such as 2 of 3 saved blurs applied. A capture you take still goes ahead, with a warning to check it; a batch skips that page, and an agent is refused."],
      },
      {
        title: "Remove them",
        paragraphs: ["Remove a cover with its own Remove button and its rule is forgotten too. Settings → Live blur lists every site with kept blurs, each with Remove, and Remove all asks before it clears them."],
      },
    ],
    note: "Kept blurs, and the list of sites that have them, stay on this device and are never synced. A small script runs on those sites to put the covers back, and reads a page only to find what to cover.",
  },
  {
    slug: "demo-mode",
    title: "Demo mode",
    category: "Privacy",
    depth: "Focused guide",
    summary: "Cover sensitive data on every page you open, until you turn it off. Pause it on one site or one tab.",
    lead: "Demo mode runs Find sensitive data on every page, new ones before they are painted, until you turn it off or close the browser. It is made for screen shares and recordings, where you cannot stop to cover each page.",
    image: "guide-blur-demo.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "The ScrollSnapshot popup over an account page with its private details covered, showing 5 blurs on this page, Demo mode switched on, and Pause on this site and Pause on this tab",
    imageCaption: "Demo mode on, with the two ways to pause it.",
    relatedSlugs: ["find-sensitive-data", "live-blur", "cover-controls"],
    sections: [
      {
        title: "Turn it on",
        paragraphs: ["Switch on Demo mode in the popup, or press Demo on the live blur toolbar. Turn demo mode on or off is also a keyboard command with no default key; set one at chrome://extensions/shortcuts. An amber dot on ScrollSnapshot's toolbar icon shows while it is on."],
      },
      {
        title: "What it covers",
        paragraphs: ["Everything Find sensitive data looks for, on every page and frame, and every password field. A new page is covered from its first paint until its first read is done, so nothing flashes. It also hides each tab's title, so the tab strip gives nothing away."],
      },
      {
        title: "Pause it here",
        paragraphs: ["Pause on this site leaves one site out until you resume it; it is listed under Settings → Live blur with Remove. Pause on this tab leaves one tab out until it closes, wherever that tab goes. Both are in the popup and in the menu beside Demo on the toolbar. Covers you placed by hand, and kept blurs, still work on a paused page."],
      },
      {
        title: "Turn it off",
        paragraphs: ["Switch it off in the popup or on the toolbar, or close the browser: demo mode never outlasts the session. Clear all while it is on reads the page afresh."],
      },
    ],
    note: "While demo mode is on, a small script runs on every page you open, except sites where you paused it. It reads a page's text only to find what to cover, and nothing leaves your device.",
  },
  {
    slug: "cover-controls",
    title: "View, copy or remove one cover",
    category: "Privacy",
    depth: "Quick note",
    summary: "Look under one cover, copy what it hides, peek under them all, or hide the tab's title.",
    lead: "Point at a cover and three small buttons appear beside it: View, Copy and Remove. Together with peek and Hide tab title, they let you work with a covered page without taking the covers off.",
    image: "guide-blur-controls.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "A covered card number on an account page with three small buttons beside the cover's top-right corner: an eye, a copy icon and a cross",
    imageCaption: "A cover's own buttons: View, Copy and Remove.",
    relatedSlugs: ["live-blur", "demo-mode", "keep-blurs"],
    sections: [
      {
        title: "A cover's buttons",
        steps: ["View shows what is under that one cover while you hold it down, and covers it again the moment you let go.", "Copy puts the hidden text on your clipboard without showing it on screen. An area cover has no Copy, since pictures and video have no text.", "Remove takes the cover off; for a kept cover, its rule goes too."],
      },
      {
        title: "Peek under them all",
        paragraphs: ["Hold Ctrl+Alt, or Control+Option on a Mac, to see through every cover on the page while the keys are down."],
      },
      {
        title: "Hide tab title",
        paragraphs: ["On the toolbar, Hide tab title keeps the tab strip from showing the page's title, which often carries a name or an account. Captures taken while it is hidden are named after the site instead."],
      },
    ],
    note: "The buttons appear when you point at a cover; there is no keyboard path to them. They, the Copied note and anything you are viewing are never part of a capture.",
  },
  {
    slug: "clean-up-page",
    title: "Clean up page",
    category: "Capture",
    depth: "Focused guide",
    summary: "Leave ads, cookie banners and chat bubbles out of a capture, without clicking them one by one.",
    lead: "Turn on Clean up page and every capture leaves out the clutter on the page: ads, cookie and consent banners, and chat bubbles. They come back the moment the capture ends.",
    image: "guide-clean-page.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "The ScrollSnapshot popup with Clean up page switched on, over a news article with an ad banner, a sidebar ad, a chat bubble and a cookie banner along the bottom",
    imageCaption: "Clean up page on, over a page with all three kinds of clutter.",
    relatedSlugs: ["leave-out-elements", "full-page", "visible-capture"],
    sections: [
      {
        title: "Turn it on",
        paragraphs: ["Switch on Clean up page in the popup, just above Pick elements to leave out. It stays on for every capture until you switch it off, in every mode except Video. You can hide the switch under Settings → Features."],
      },
      {
        title: "What it leaves out",
        steps: ["Ads: ad slots from the common ad networks, frames served by ad companies, boxes a site names as ads, and anything labelled Advertisement or Sponsored, together with the label above it.", "Cookie and consent banners, from about 20 consent tools, and any pinned notice that talks about cookies or consent and has a button to press.", "Chat bubbles from about 20 chat services, such as Intercom, Zendesk and HubSpot."],
        paragraphs: ["They are left out of the image and its text, and the page closes up where they were. Ads that load only once the page scrolls are left out as they arrive."],
        image: shot("guide-clean-page-result.webp", 1600, 1000, "The captured article on the ScrollSnapshot result page with no ad banner, sidebar ad, chat bubble or cookie banner", "The same page captured: only the article."),
      },
      {
        title: "What it never touches",
        paragraphs: ["The page itself, its main content, an article, its header or navigation, and anything covering most of the page are never left out, whatever they are called. It never presses Accept or Reject on a cookie banner, so your choices on the site stay as they were."],
      },
      {
        title: "With Pick elements to leave out",
        paragraphs: ["Clean up page runs first. With both on, the picker opens on the page already cleaned up, so you only click what it missed, such as a promoted post that looks like the rest of the page."],
      },
    ],
    note: "Clean up page blocks nothing and needs no extra permission: outside a capture the page behaves as normal, ads and all.",
  },
  {
    slug: "whats-new-1-6",
    title: "What's new in ScrollSnapshot 1.6",
    category: "Release",
    depth: "Release notes",
    summary: "Live blur, demo mode, Clean up page, and agents that can cover private details.",
    lead: "Version 1.6 covers private details on the page itself before you capture or share your screen, and leaves ads, cookie banners and chat bubbles out of your captures.",
    image: "guide-live-blur.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "An account page with private details covered by black bars and the live blur toolbar at the bottom",
    imageCaption: "New in 1.6: live blur.",
    relatedSlugs: ["live-blur", "demo-mode", "clean-up-page", "whats-new-1-5"],
    sections: [
      {
        title: "Live blur",
        paragraphs: ["Cover an element, an area, some words or the whole page, or let Find sensitive data cover emails, phone numbers, cards and keys. Keep covers for a page or a site, view or copy what one hides, and hold Ctrl+Alt to peek. While a page has covers, its text is withheld."],
      },
      {
        title: "Demo mode",
        paragraphs: ["Cover sensitive data on every page until you turn it off or close the browser, and pause it on one site or one tab."],
      },
      {
        title: "Clean up page",
        paragraphs: ["A popup switch that leaves ads, cookie banners and chat bubbles out of every capture, and puts them back afterwards."],
      },
      {
        title: "For coding agents",
        paragraphs: ["A connected agent can cover private details before it captures, and ask for a cleaned-up capture; it can only remove the covers it added. Send to agent now says when no agent is connected, and won't send when none is set up."],
      },
      {
        title: "Getting the update",
        steps: ["Chrome updates extensions on its own, usually within a day or two of a release.", "To check now, open chrome://extensions, turn on Developer mode, and choose Update.", "Look for version 1.6.0 on ScrollSnapshot's card."],
      },
    ],
    note: "The changelog lists every change in this release.",
  },
];
