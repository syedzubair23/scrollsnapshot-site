// Guides for what version 1.3 added: drawing on a region before capture, emoji, Markdown text,
// and the agent connection. Screenshots are real captures of the 1.3.0 build
// (assets/guide-*.webp). Claims follow the extension's own changelog and the interface itself.
const shot = (file, width, height, alt, caption) => ({ file, width, height, alt, caption });

export const articles13 = [
  {
    slug: "draw-before-capture",
    title: "Mark it up before you capture",
    category: "Capture",
    depth: "Deep guide",
    summary: "A toolbar beside the chosen area: draw, label, and add emoji, then capture.",
    lead: "Once you have chosen an area, a toolbar stands beside it. Draw an arrow, box a button, number the steps, or drop an emoji on the page itself, then press Capture. What you draw is part of the image; the toolbar, the outline and the buttons never are.",
    image: "guide-region-draw.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "A chosen area on a web page with an arrow, a box, a text label and an emoji drawn on it, and the drawing toolbar standing beside the area",
    imageCaption: "Draw on the area, then capture. The toolbar stays out of the picture.",
    relatedSlugs: ["region", "annotate", "emoji"],
    sections: [
      {
        title: "Where the toolbar appears",
        paragraphs: ["Choose Region and draw an area. As soon as you let go, a column of tools stands beside it: on the right if there is room, otherwise on the left. The bar with Capture, Note, Redraw and Cancel stays under the area, and moves out of the toolbar's way when the two would meet.", "The first tool, Adjust area and marks, is the picker you already know: drag a corner or an edge to resize the area, drag inside it to move it, nudge it with the arrow keys."],
      },
      {
        title: "The tools",
        steps: ["Pen: draw freehand.", "Arrow: point at something. Options sets one head, two, or a plain line.", "Box: outline a control. Options sets a rectangle, rounded rectangle, ellipse, triangle or diamond.", "Highlight: lay a translucent band over text.", "Text: click where the label goes, type, and press Enter. Shift+Enter starts a new line.", "Step: number a sequence. Shown when Step numbers is on in Settings, under Features.", "Emoji: pick one from the panel, then click to place it."],
        tips: ["Colour sets the colour of the next mark. Options sets how thick a line is, how big text or an emoji is, a box's outline and an arrow's ends.", "Hold Shift while you drag to keep a box square or a line level."],
      },
      {
        title: "Fix a mark before you capture",
        paragraphs: ["Choose Adjust area and marks and click something you drew to pick it up. Drag it to move it, press Delete to remove it, or nudge it with the arrow keys. Colour and Options change the picked-up mark. Escape puts it down; a second Escape cancels the capture.", "Ctrl+Z undoes and Ctrl+Shift+Z redoes, one step at a time, including moves. The bin removes the picked-up mark, or clears every drawing when nothing is picked up."],
      },
      {
        title: "Capture, or capture and keep editing",
        paragraphs: ["Capture takes the picture with your drawings painted in. Capture & edit, or Shift+Enter, does the same and opens the result straight in the full editor, for the tools the page toolbar does not have: redaction, rotating a mark, text styling and style presets.", "Your drawings stay on the page content, not the screen. Scroll, and they scroll with what they mark. Move the area and anything left outside it is simply not in the shot."],
      },
    ],
    note: "The toolbar is part of Annotate. Turn Annotate off in Settings, under Features, and the region picker goes back to picking only. Hide what is private with Redact in the editor, where you can check exactly what it covers.",
  },
  {
    slug: "emoji",
    title: "Put an emoji on it",
    category: "Edit",
    depth: "Quick note",
    summary: "A panel of common emoji, or any emoji you paste or type.",
    lead: "An emoji says “yes”, “look here” or “this is broken” faster than a label. The Emoji tool places one with a click, in the editor and in the region toolbar alike.",
    image: "guide-emoji.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "The editor's emoji panel open above the tool row, with a grid of emoji and a field to paste any other",
    imageCaption: "The emoji panel: common ones first, and a field for any other.",
    relatedSlugs: ["annotate", "edit-marks", "draw-before-capture"],
    sections: [
      {
        title: "Choose and place",
        steps: ["Open the editor and choose the Emoji tool, or press E. Its button shows the emoji the next click places.", "Open the menu beside it and pick one from the panel.", "Click the capture where it should go."],
      },
      {
        title: "Any emoji at all",
        paragraphs: ["The panel starts with the ones screenshots are usually marked up with: check marks and crosses, warnings, pointing hands, a bug, a light bulb, faces. For anything else, paste it into the field under the grid, or type it with your system's emoji keyboard (Windows key + period on Windows, Control + Command + Space on a Mac), and press Use."],
      },
      {
        title: "Change it afterwards",
        paragraphs: ["An emoji is a mark like any other: pick it up to move, resize or rotate it. With an emoji selected, choosing another one in the panel swaps it in place. An emoji keeps its own colours, so the colour button does not apply to it."],
      },
    ],
  },
  {
    slug: "page-as-markdown",
    title: "Save a page as Markdown",
    category: "Tools",
    depth: "Deep guide",
    summary: "A whole page, or a selection, as clean Markdown — no screenshot needed.",
    lead: "Sometimes you want the words, not the picture: an article for your notes, documentation for an AI assistant, a table to paste into a document. ScrollSnapshot turns a page into Markdown on your own device, keeping its headings, lists, links, tables and code.",
    image: "guide-markdown-reader.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "A web page opened as Markdown in ScrollSnapshot's reader tab, with an outline on the left and copy and download controls at the top",
    imageCaption: "The reader tab: the page as a document, with its outline beside it.",
    relatedSlugs: ["text-reader", "settings"],
    sections: [
      {
        title: "A whole page, from the popup",
        paragraphs: ["The Markdown button in the popup's header works on any page, at any time, and takes no screenshot. It opens a small panel: a switch to keep the navbar and footer, Open preview, and a save to a .md file.", "Open preview shows the page in its own tab, as a document. The outline on the left follows the section you are reading. The bar at the top switches between the read view and the Markdown itself, copies the Markdown, the plain text or the page link, and downloads a .md or .txt file, or prints it and saves it as a PDF."],
      },
      {
        title: "Just the part you selected",
        paragraphs: ["Turn on Show a Markdown bar when you select text in Settings, under Output. Then, on any page, selecting text brings up a small bar above it: copy the selection as Markdown, copy it as plain text, or save it as a .md file. It is off by default; with it on, a small script is added to the pages you visit so the bar can appear, and it reads only the text you select, only when you press one of its buttons."],
      },
      {
        title: "What comes through",
        paragraphs: ["Headings, emphasis, links, lists, quotes, images, tables and code blocks, with their language where the page says it. Code is kept as code wherever a site puts it, prompts and all, without the line numbers or copy buttons. Menus, sidebars, footers and promo boxes are left out unless you ask to keep the navbar and footer, and tables used only for layout read as their content."],
      },
    ],
    note: "All of this happens in your browser. Text inside an image, or in a frame from another site, is not page text and cannot be read.",
  },
  {
    slug: "agent-connection",
    title: "Let your coding agent see the page",
    category: "Tools",
    depth: "Deep guide",
    summary: "Connect Claude Code, Codex, Cursor or any MCP client to the browser you are signed in to.",
    lead: "A coding agent works from your code; it cannot see the page that code produces, especially one behind your login. The agent connection lets it read a page as text, take exactly the screenshot it needs, and look at what you mark up, through ScrollSnapshot in your own Chrome.",
    image: "guide-agent-settings.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "ScrollSnapshot Settings on the Agent connection page, with the setup line for Claude Code, the pairing field and the tab options",
    imageCaption: "Settings → Agent connection: the setup line, pairing, and what an agent may do.",
    relatedSlugs: ["send-to-agent", "page-as-markdown", "settings"],
    sections: [
      {
        title: "Set it up once",
        steps: ["Open ScrollSnapshot → Settings → Agent connection and turn on Allow an agent to connect.", "Choose your agent. Copy the line shown for it and your operating system, and run it in a terminal (or paste the settings snippet into your client). It needs Node.js 22 or newer; nothing else to download.", "Run npx -y scrollsnapshot-mcp pair, copy the secret it prints, paste it into Settings and press Pair.", "Start your agent. Within 30 seconds the toolbar icon shows AI: it is connected."],
        tips: ["If it does not connect, run npx -y scrollsnapshot-mcp doctor. It checks each link and prints the line that fixes what is wrong."],
      },
      {
        title: "What an agent can do",
        paragraphs: ["Read a page: its outline of headings, landmarks, forms and tables, each with a selector, and its text, plain or as Markdown. Capture it: the screen, the whole page, one element by selector, or an area, returned in tiles sized to keep the agent's token use down, with the full-resolution file saved on disk. Read your capture history, and pick up screenshots you send it.", "It can also ask you to choose an area. The region picker opens on your screen, and the note and drawings you add reach the agent as words and coordinates, not only pixels."],
      },
      {
        title: "Which tabs, and what it may change",
        paragraphs: ["By default an agent can use only the tab in front of you. Choose Any tab to let it list and capture every open tab.", "Turn on Let agents open and reload tabs and the agent can reload a tab to see a change it just made. With Any tab, it can also open a web page in a new tab, such as your local dev server. It can never click, type or run anything on a page."],
      },
      {
        title: "Where your data goes",
        paragraphs: ["ScrollSnapshot hands what an agent asks for only to the agent server on your own computer, after both sides prove they hold the pairing secret. Your agent may then send it to its AI provider, as it does with your code and everything else you show it. The server keeps the captures it receives in a private folder in your home directory and deletes them after seven days."],
      },
    ],
    note: "The agent connection is off until you turn it on, and the pairing secret never leaves this device. The privacy policy covers it in detail.",
  },
  {
    slug: "send-to-agent",
    title: "Show your agent what is wrong",
    category: "Tools",
    depth: "Focused guide",
    summary: "Mark up a capture, add a note, and send it — or answer when the agent asks.",
    lead: "Some problems are faster to point at than to describe. Mark the broken part, number what should happen, add a sentence, and the agent receives the picture, your note, and a readable list of your marks.",
    image: "guide-send-to-agent.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "A marked-up capture on the result page with the Send to agent panel open and a note typed in",
    imageCaption: "Send to agent: the capture as you marked it, and what the agent should know.",
    relatedSlugs: ["agent-connection", "step-numbers", "draw-before-capture"],
    sections: [
      {
        title: "Send a capture",
        steps: ["Capture the page and mark it up: a box around the problem, numbered steps, an arrow.", "Press Send to agent on the result page. It appears while the agent connection is on.", "Write what the agent should know, and press Send."],
        tips: ["Numbered steps plus a note are the clearest way to say “1 is broken, 2 should look like 3”: the agent receives each step's number and position."],
      },
      {
        title: "When the agent asks",
        paragraphs: ["An agent can ask you to show it something and wait. Send to agent as usual, and its wait ends with your screenshot. It can also ask you to choose an area: the region picker opens, you draw on the area and add a note, and both reach the agent with the capture."],
      },
      {
        title: "Whether or not an agent is listening",
        paragraphs: ["What you send waits in a small inbox on this device, the newest 20, until an agent picks it up. Anything you redacted is described only by where it is; what it hid never travels."],
      },
    ],
  },
  {
    slug: "whats-new-1-3",
    title: "What's new in ScrollSnapshot 1.3",
    category: "Release",
    depth: "Release notes",
    summary: "Draw before you capture, emoji, Markdown everywhere, and a connection to your coding agent.",
    lead: "Version 1.3 lets you mark up an area before you capture it, puts emoji in the editor, turns any page or selection into Markdown, and connects ScrollSnapshot to the coding agent you already use.",
    image: "guide-region-draw.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "A chosen area with drawings on it and the region drawing toolbar beside it",
    imageCaption: "New in 1.3: draw on an area before you capture it.",
    relatedSlugs: ["draw-before-capture", "page-as-markdown", "agent-connection"],
    sections: [
      {
        title: "Draw before you capture",
        paragraphs: ["Choose an area and a toolbar stands beside it: pen, arrow, box, highlight, text, steps and emoji, with colour and options. Pick a mark up to move or delete it, then Capture, or Capture & edit to finish in the full editor. The toolbar never ends up in the shot."],
      },
      {
        title: "Emoji",
        paragraphs: ["The editor has an Emoji tool: common ones in a panel, any other by pasting or typing it. Move, resize and turn it like any mark."],
        image: shot("guide-emoji.webp", 1600, 1000, "The editor's emoji panel", "The emoji panel in the editor."),
      },
      {
        title: "Markdown, on your device",
        paragraphs: ["Every capture now carries its page's text, plain or as Markdown, with a preview and .md and .txt downloads; each slice in a ZIP gets its own. The popup's Markdown button saves a whole page with no screenshot, or opens it as a document. An optional bar copies or saves any text you select as Markdown. Navbars and footers are left out unless you keep them."],
        image: shot("guide-markdown-reader.webp", 1600, 1000, "A page opened as Markdown in the reader tab", "The reader tab, with the page's outline beside it."),
      },
      {
        title: "Your coding agent can see the page",
        paragraphs: ["Claude Code, Codex, Cursor and other MCP clients can read pages as text or Markdown and take exactly the screenshots they need in your own Chrome. Send it a marked-up capture with a note, or answer when it asks you to choose an area. It can reload a tab to check a change, if you allow it. Off until you turn it on."],
      },
      {
        title: "Fixed in this release",
        tips: ["A region capture no longer includes a pinned navbar from elsewhere on the page.", "Text and Markdown read every element, including text still faded out until scrolled to.", "Code, tables and maths come through properly on documentation, wiki and blog pages."],
        paragraphs: ["Markdown was checked against tutorial, reference, docs, wiki, README, issue, blog and news pages, and holds up on all of them."],
      },
    ],
  },
];
