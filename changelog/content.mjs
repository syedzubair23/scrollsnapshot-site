// Release history for the public changelog page. Newest first. Keep entries to what a user
// can see or feel, and keep them aligned with the extension's own changelog. An item's
// `guide` is the slug of a feature guide (guides/content.mjs) that explains it in depth.
export const releases = [
  {
    version: "1.4.0",
    date: "2026-10-25",
    title: "Six languages, and a clearer name",
    summary: "Version 1.4 speaks German, Spanish, French, Japanese and Brazilian Portuguese as well as English, following the language Chrome is set to.",
    highlights: "whats-new-1-4",
    groups: [
      {
        name: "Added",
        items: [
          { title: "Six languages", guide: "language", text: "German, Spanish, French, Japanese and Brazilian Portuguese join English, everywhere: the popup, Settings, the result page and editor, History, the Markdown reader, the on-page pickers and drawing toolbar, error messages and shortcut names. Dates and numbers follow the same language. Any other language shows English." },
        ],
      },
      {
        name: "Changed",
        items: [
          { title: "A name that says what it does", guide: "whats-new-1-4", text: "In the Chrome Web Store and on chrome://extensions the extension is now ScrollSnapshot – Full Page Screenshot & Screen Capture, with the same words in each language. Where there is little room, Chrome still shows ScrollSnapshot." },
        ],
      },
    ],
  },
  {
    version: "1.3.0",
    date: "2026-10-22",
    title: "Draw before you capture, Markdown everywhere, and your coding agent",
    summary: "Version 1.3 lets you mark up an area before you capture it, adds emoji, turns any page or selection into Markdown, and connects ScrollSnapshot to the coding agent you already use.",
    highlights: "whats-new-1-3",
    groups: [
      {
        name: "Added",
        items: [
          { title: "Draw on a region before capturing it", guide: "draw-before-capture", text: "Once an area is chosen, a toolbar stands beside it: pen, arrow, box, highlight, text, steps and emoji, with colour, options, undo and clear. Pick a mark up to move, restyle or delete it. What you draw is part of the capture; the toolbar never is. Capture & edit opens the result straight in the full editor." },
          { title: "Emoji", guide: "emoji", text: "An Emoji tool in the editor and the region toolbar: pick a common one from the panel, or paste or type any other. Move, resize and turn it like any mark." },
          { title: "A note for a region", guide: "region", text: "Type a short note in the region bar before capturing, and it leads the capture's text." },
          { title: "Text for every capture, plain or Markdown", guide: "text-reader", text: "Full page and visible captures carry their page's text like a region does, each slice in a ZIP gets its own .txt and .md, and the text panel previews the Markdown and saves .md and .txt files." },
          { title: "Save a whole page as Markdown", guide: "page-as-markdown", text: "The Markdown button in the popup's header saves any page as a .md file, or opens it as a document with its outline, without taking a screenshot." },
          { title: "Markdown from a text selection", guide: "page-as-markdown", text: "Turn on the Markdown bar in Settings → Output, and selecting text on any page offers to copy it as Markdown or plain text, or save it. Off by default." },
          { title: "Agent connection", guide: "agent-connection", text: "Claude Code, Codex, Cursor and other MCP clients can read pages as text or Markdown and capture exactly what they need in your own Chrome, in tiles sized to save tokens. Off until you turn it on and pair it; limited to the tab in front of you unless you allow any tab. It can reload a tab, or with any tab open a page, if you allow it — never click, type or run anything." },
          { title: "Send to agent", guide: "send-to-agent", text: "Mark up a capture, press Send to agent and say what it should know: the agent gets the image, your note, and your marks as words and coordinates. An agent can also wait for you to send something, or ask you to draw on an area." },
        ],
      },
      {
        name: "Fixed",
        items: [
          { title: "No stray navbar in a region", guide: "region", text: "A region capture no longer includes a pinned navbar from elsewhere on the page." },
          { title: "The article, not the menus", guide: "text-reader", text: "Text and Markdown leave the navbar, banner and footer out by default; Keep navbar and footer in text, in the popup, puts them back." },
          { title: "Markdown that holds up on real sites", guide: "page-as-markdown", text: "Code, tables, details, task lists and maths come through properly on documentation, wiki, README, blog and news pages, and text that was missing from inside ordinary page elements is read." },
        ],
      },
    ],
  },
  {
    version: "1.2.0",
    date: "2026-10-16",
    title: "A truer palette, and back to the page",
    summary: "Version 1.2 makes the palette show the colours a page is actually designed with, takes you back to the page when you close a capture, and adds ways to send feedback.",
    highlights: "whats-new-1-2",
    groups: [
      {
        name: "Added",
        items: [
          { title: "Send feedback and get help", text: "Settings has Leave a review, Send feedback and Get help at the bottom of its menu. Send feedback opens a short form on this site; the extension itself still sends nothing." },
          { title: "A review prompt that waits its turn", text: "After a few days of use, ScrollSnapshot may ask once, at most twice ever, whether you'd leave a review. It asks only after you copy or download a capture, in a small card in a corner, never while a tool or notice is open, and Don't ask again means it." },
        ],
      },
      {
        name: "Changed",
        items: [
          { title: "Closing a capture takes you back", text: "The result tab opens right beside the page you captured, and closing it, or pressing Done, brings that page back to the front." },
          { title: "The palette is one icon", guide: "colour-palette", text: "The palette no longer sits over the capture as a card. Click its icon for every colour with its hex and share; click one to copy it, or Copy all for the whole palette, one hex per line." },
          { title: "A palette with the colours that matter", guide: "colour-palette", text: "Small design colours, like a button, a badge or the text, are kept instead of shades of the background. A blend that is not on the page is never listed, and up to eight colours are shown." },
        ],
      },
    ],
  },
  {
    version: "1.1.0",
    date: "2026-10-15",
    title: "Folders, a watermark, and a fuller editor",
    summary: "Version 1.1 is about what happens after the capture: keeping it in folders, marking it up, and putting your name on it. It also fixes a run of problems with Turbo, the colour picker, and the popup.",
    highlights: "whats-new-1-1",
    groups: [
      {
        name: "Added",
        items: [
          { title: "Folders in History", guide: "history-folders", text: "Create folders on the History page, select captures (click the box, shift-click a range, or Select all) and move them in from a menu or by dragging them onto a folder. Captures in a folder are never cleaned up automatically, and Clear history can leave them alone. Download a folder, or any selection, as one ZIP." },
          { title: "A menu on every capture", guide: "history-folders", text: "Every capture and folder has a three-dot menu: open, open the original page, copy the link or the image, download, rename, move, delete." },
          { title: "Your own watermark", guide: "watermark", text: "Settings → Watermark adds your text, a logo, or both to what you save, in a corner, along an edge, in the centre, or tiled, with size, opacity, text colour and distance from the edge, and a live preview. It goes on Download, Copy, PDF and slices, and a stamp button on the toolbar switches it off for one capture. Off until you turn it on; the logo stays on this device." },
          { title: "Text options", guide: "text-highlight-pen", text: "The Text tool's size button now opens a panel: size, font (sans, serif, mono, hand), weight, alignment, and italic, underline, background chip and outline switches. Saved style presets remember it. Older text looks the same." },
          { title: "Highlight and Pen options", guide: "text-highlight-pen", text: "Highlight sets strength (25–80%), a block, underline or strikethrough, and a Multiply blend that keeps dark text dark. Pen sets solid, dashed or dotted lines, strength, round or square ends, and smoothing. Both restyle a selected mark and leave earlier marks exactly as they were." },
          { title: "Shapes and line ends", guide: "shapes-and-lines", text: "The Shape tool (B) draws a rectangle, rounded rectangle, ellipse, triangle or diamond. The Line tool (A or L) draws an arrow, a double arrow or a plain line. Shift holds a shape square and a line to 45°." },
          { title: "Edit marks after drawing them", guide: "edit-marks", text: "Shapes come up selected with handles to resize, a grip to rotate (Shift snaps to 15°), and a grip on each end of an arrow. Drag to move, arrow keys to nudge, double-click text to rewrite, Delete, Ctrl+D to duplicate, ] and [ to restack. A new Select tool (V) picks up any mark." },
          { title: "Any colour for marks", guide: "edit-marks", text: "A picker with a colour field, hue strip, hex box, recent colours, and an eyedropper (I) that takes a pixel straight off the capture, plus twelve named colours as small circles at the top of the colour popover." },
          { title: "Redaction brush, eraser, and Blur", guide: "redact", text: "Redact's dropdown now holds Rectangle, Brush and Eraser, the three effects, and a shared brush-size slider. Paint around difficult edges or erase parts of any unapplied redaction, with Undo and Redo for each stroke. Blur sits beside Black out and Pixelate; use Black out for complete coverage." },
          { title: "Straighten in crop", guide: "crop", text: "Straighten by any angle up to 45° either way, with a live preview under a grid. The crop box starts inside the tilted image, so no empty corner is kept." },
          { title: "Zoom, rulers, a grid, and guides", guide: "zoom-rulers-guides", text: "Zoom on the result page, in the crop box and in the editor: − and + buttons, a readout that toggles fit and actual size, Ctrl/⌘ + wheel, Ctrl/⌘ 0 and 1, and Space-drag to pan. Drag a guide out of a ruler, and drag it back to remove it. A view aid only, never saved into the image." },
          { title: "Cut any capture into slices later", guide: "slice-later", text: "Slice on the result toolbar: click to cut, drag cuts to move them, use a ruler, cut every N px or into N equal parts, and keep cuts out of lines of text. It cuts down as well as across, and Reassemble puts columns back side by side. Reassemble is now on the toolbar of every slices capture." },
          { title: "PDF in the popup's Format row", guide: "pdf-export", text: "Choose PDF beside PNG, JPEG and WebP and the capture opens on its result page already set to save as a PDF. The image format you had is kept to go back to. Not offered for Slices, or while PDF export is turned off." },
          { title: "Move the toolbar to the left or right", guide: "toolbar-position", text: "Every result-page bar stands upright against either side, or stays along the bottom, from the toolbar's own position button or Settings → Output. Zoom is part of each bar, and the capture keeps clear of it." },
          { title: "Turbo's viewport width for Slices", guide: "chosen-viewport-width", text: "Turbo can now lay a page out at a mobile or tablet width for Slices, as it already did for Full page." },
          { title: "Reset settings", guide: "settings", text: "“Reset this page” on each settings page and “Reset all settings”, both of which ask first. Consent, seen hints, saved presets and recent colours are kept." },
        ],
      },
      {
        name: "Changed",
        items: [
          { title: "Crop is a crop box", guide: "crop", text: "It opens around the whole capture: drag edges and corners, drag inside to move, type an exact width and height, hold a ratio, nudge with the arrow keys, and rotate or flip the capture." },
          { title: "Toolbars fit any window", guide: "toolbar-position", text: "When a toolbar is longer than the window, its middle scrolls and fades at the edge with more. Download, Apply, Cancel, Undo and Redo stay pinned. Format and size share one “PNG · 100%” button, and Copy, Crop, Edit and Slice are icons with tooltips." },
          { title: "Turbo's width dropdown is on by default", guide: "chosen-viewport-width", text: "Turning Turbo on now offers mobile and tablet widths straight away. Standard mode cannot offer it: it photographs the real window." },
          { title: "A calmer popup", text: "The popup scrolls only its options; the modes stay put above them, and Format and Turbo stay put above Capture. Each mode's icon opens a card with its name, shortcut and what it makes, and the Capture button names the mode." },
          { title: "A sharper colour picker", guide: "colour-picker", text: "An 11 × 11 loupe that moves a pixel at a time with the arrow keys, copies HEX, RGB or HSL (Tab), and refreshes after the page scrolls. The popup's button is an eyedropper; the target icon now means only “click an element on the page”." },
          { title: "Smaller changes", text: "“Pick elements to leave out” is in the popup by default. The editor always shows the colour, including while Redact or Select is chosen. Resetting settings asks first, in a dialog that says what goes back and what is kept. Toolbars, menus and tools ease in; reduced-motion settings still turn it all off." },
        ],
      },
      {
        name: "Fixed",
        items: [
          { title: "Turbo no longer catches a sliding navbar", guide: "turbo-engine", text: "Sites that hide a navbar on scroll down and slide it back on scroll up were captured with the bar still moving. Turbo now waits for fixed and sticky elements to stop moving before it renders, and starts from the top of the page so a fixed header cannot shift." },
          { title: "Turbo works in a zoomed tab", guide: "chosen-viewport-width", text: "With browser zoom other than 100%, Turbo used to capture a magnified, shorter stretch of the page, and a chosen width came out narrower than asked (375 became 300). It now allows for the tab's zoom." },
          { title: "Turbo no longer repeats the page partway down", guide: "turbo-engine", text: "Tall pages crossed Chromium's single-render limit, past which the image starts over from the top. Turbo now renders at the real ratio and splits tall pages into bands. Pages taller than one image can hold are scaled to fit, with the same notice as the standard engine." },
          { title: "Slices no longer repeat a cookie banner", guide: "numbered-slices", text: "Pinned elements such as a cookie banner or sticky header are kept in the first slice only, as Full page does." },
          { title: "The colour picker reads the right pixel", guide: "colour-picker", text: "It scaled by the viewport without its scrollbar, so samples landed up to about 15 px off: right on flat colour, wrong inside images." },
          { title: "A page can no longer read the colour picker's screenshot", guide: "colour-picker", text: "The loupe sat where page scripts could reach it, so a script could walk it across the screenshot and read pixels it cannot otherwise see, such as a cross-origin frame's. It is now out of the page's reach." },
          { title: "Copy can be pressed again", text: "The “Copied” mark on an automatic copy never cleared. It now fades after a moment, and the button is always Copy." },
          { title: "Tooltips tell the truth", text: "The popup's mode tooltips name the shortcut Chrome actually assigned, and side toolbars show their tooltips beside the bar instead of clipped by it." },
          { title: "The extension icon shows again", text: "In the toolbar, the extensions menu, and on ScrollSnapshot's own pages." },
          { title: "No error after an extension reload", guide: "colour-picker", text: "A reloaded extension no longer throws “Extension context invalidated” on the colour picker's scroll; the picker ends quietly." },
        ],
      },
    ],
  },
  {
    version: "1.0.0",
    date: "2026-09-19",
    title: "The first release",
    summary: "Full-page, region, slice and batch screenshots that stay on your device, with an editor, local history, and exports in four formats.",
    groups: [
      {
        name: "Added",
        items: [
          { title: "Four capture modes and batch", guide: "full-page", text: "This screen, Full page, Slices and Region, plus a Batch queue for the tabs in a window or up to 50 pasted addresses." },
          { title: "Standard and Turbo engines", guide: "turbo-engine", text: "A scroll-and-stitch engine that works on every page, and an optional one-shot Turbo engine with a chosen viewport width." },
          { title: "Precise regions", guide: "region", text: "Draw, move and resize a region, trace a freeform shape, type page coordinates, or capture an element by CSS selector or XPath." },
          { title: "Page-aware capture", guide: "scrolling-areas", text: "Capture a panel that scrolls on its own, start a full page from where you are, set a delay before capture, and leave out elements such as a cookie banner." },
          { title: "An editor", guide: "annotate", text: "Crop, redact, annotate, number steps, and keep your annotation style in presets." },
          { title: "Text and colours from the page", guide: "text-reader", text: "Read the real page text under a region without OCR, pick a pixel's colour, and copy colours from an extracted palette." },
          { title: "Four formats, local history", guide: "image-formats", text: "Save as PNG, JPEG, WebP or PDF at the scale you choose. An optional on-device history lets you search, filter, favourite and reopen captures, and reassemble a Slices ZIP." },
          { title: "Settings you can tune", guide: "settings", text: "Capture, Batch, Features, Output, Slices and Shortcuts, with a light, dark or system appearance." },
        ],
      },
    ],
  },
];
