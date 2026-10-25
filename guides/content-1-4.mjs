// Guides for what version 1.4 added: the extension in six languages. The screenshot is a real
// capture of the 1.4.0 build in German (assets/guide-language.webp). Claims follow the
// extension's own changelog and the interface itself.

export const articles14 = [
  {
    slug: "language",
    title: "Use ScrollSnapshot in your language",
    category: "Settings",
    depth: "Quick note",
    summary: "English, German, Spanish, French, Japanese or Brazilian Portuguese, following Chrome.",
    lead: "ScrollSnapshot speaks English, Deutsch, Español, Français, 日本語 and Português (Brasil). There is no language setting to find: it reads whatever language Chrome itself is using.",
    image: "guide-language.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "The ScrollSnapshot popup in German over a web page, with Ganze Seite aufnehmen on its main button",
    imageCaption: "The popup with Chrome set to German.",
    relatedSlugs: ["settings", "whats-new-1-4"],
    sections: [
      {
        title: "What changes",
        paragraphs: ["Everything ScrollSnapshot shows you: the popup, Settings, the result page and editor, History, the Markdown reader, the pickers and drawing toolbar on the page, error messages and the names of its keyboard shortcuts. Dates and numbers are written the way your language writes them. Its name and summary in the Chrome Web Store and on chrome://extensions follow too.", "Your captures and the text taken from a page stay exactly as the page wrote them."],
      },
      {
        title: "Change the language on Windows, Linux or ChromeOS",
        steps: ["Open Chrome's settings and choose Languages, or go to chrome://settings/languages.", "Add the language if it is not listed, then open its ⋮ menu and choose Display Google Chrome in this language.", "Press Relaunch. ScrollSnapshot opens in the new language."],
      },
      {
        title: "Change the language on a Mac",
        paragraphs: ["On macOS, Chrome uses the language of the system. Change it in System Settings → General → Language & Region, either for the whole Mac or for Google Chrome alone under Applications, then quit and reopen Chrome."],
      },
      {
        title: "Any other language",
        paragraphs: ["Chrome set to a language ScrollSnapshot does not have shows it in English. Spanish covers every Spanish Chrome offers. Portuguese is written for Brazil, so Chrome set to Portuguese (Portugal) shows English."],
      },
    ],
    note: "The translations are new in 1.4. If a word reads oddly in your language, say where on the feedback page, and it will be put right in the next update. These guides are in English.",
  },
  {
    slug: "whats-new-1-4",
    title: "What's new in ScrollSnapshot 1.4",
    category: "Release",
    depth: "Release notes",
    summary: "ScrollSnapshot in German, Spanish, French, Japanese and Brazilian Portuguese.",
    lead: "Version 1.4 speaks your language. German, Spanish, French, Japanese and Brazilian Portuguese join English, everywhere in the extension, following the language Chrome is set to.",
    image: "guide-language.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "The ScrollSnapshot popup in German over a web page",
    imageCaption: "New in 1.4: ScrollSnapshot in your language.",
    relatedSlugs: ["language", "whats-new-1-3"],
    sections: [
      {
        title: "Six languages",
        paragraphs: ["The popup, Settings, the result page and editor, History, the Markdown reader, the on-page pickers and drawing toolbar, error messages and shortcut names all follow Chrome's language. Dates and numbers do too. Any other language shows English."],
      },
      {
        title: "A clearer name in the Chrome Web Store",
        paragraphs: ["The extension is now listed as ScrollSnapshot – Full Page Screenshot & Screen Capture, with the same words in each language, so it is easier to find. Where there is little room, Chrome still shows just ScrollSnapshot. Nothing else about it changes."],
      },
      {
        title: "Getting the update",
        steps: ["Chrome updates extensions on its own, usually within a day or two of a release.", "To check now, open chrome://extensions, turn on Developer mode, and choose Update.", "Look for version 1.4.0 on ScrollSnapshot's card."],
      },
    ],
    note: "The changelog lists every change in this release. To see ScrollSnapshot in another language, change Chrome's language: the language guide shows how.",
  },
];
