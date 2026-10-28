// Guides for what version 1.5 added: frames from videos. The screenshots are real captures of the
// 1.5.0 build over a demo page (assets/guide-video*.webp, from the extension repo's
// scripts/site/capture-guides.mjs). Claims follow the extension's own changelog and the interface.

export const articles15 = [
  {
    slug: "video-frame",
    title: "Save a frame from a video",
    category: "Capture",
    depth: "Deep guide",
    summary: "The frame a video is showing, at the video's own resolution, not its size on screen.",
    lead: "Video mode saves the frame a video is showing as a PNG at the video's own size. A 4K video gives a 4K image, however small the player is on the page.",
    image: "guide-video.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "The ScrollSnapshot popup in Video mode over a page playing a sunset video, with Burst of five frames on and a Capture frame button",
    imageCaption: "Video mode: Burst, subtitles and the capture button sit above the format.",
    relatedSlugs: ["video-burst", "video-button", "history-folders"],
    sections: [
      {
        title: "Take a frame",
        steps: ["Pause or play the video to the moment you want.", "Open ScrollSnapshot and choose Video, the play icon in the row of modes.", "Press Capture frame. The frame opens on the result page, ready to crop, edit, copy or download."],
      },
      {
        title: "Without opening the popup",
        paragraphs: ["Press Alt+Shift+S on a page with a video. It is the only way in from a fullscreen video, where the toolbar is hidden: the frame is saved, a short Frame saved note appears over the video, and the video stays fullscreen and keeps playing. The result opens in a tab behind it.", "On installs from before 1.5, Alt+Shift+S stays on Slices until you change it at chrome://extensions/shortcuts."],
      },
      {
        title: "Which video",
        paragraphs: ["The video in fullscreen, if there is one. Otherwise the largest one on screen that is playing, then the largest one on screen. Videos inside embedded players on another site are reached too. If the only video is out of view, ScrollSnapshot asks you to scroll it into view."],
      },
      {
        title: "When a site holds the pixels back",
        paragraphs: ["A copy-protected video, such as one from a streaming service, is refused with a message. ScrollSnapshot never saves a black image instead.", "Some sites play video in a way that won't hand its pixels over. For a video on the page itself, ScrollSnapshot takes the frame from the screen instead, at the size it is shown, and the result says so. The player's buttons and overlays are left out of that picture and come back untouched. A video embedded from another site is refused, with a note to open it on its own page."],
      },
      {
        title: "Subtitles",
        paragraphs: ["Turn on Include subtitles, beside Burst in the popup or under Settings → Capture, to put the video's captions into the frame. Standard captions are drawn at the video's full resolution. Where a site draws its own subtitles, the frame is taken from the screen so they appear exactly as the site shows them; burst isn't available that way."],
      },
      {
        title: "Where frames go",
        paragraphs: ["Frames download into ScrollSnapshot/<Platform>/ in your downloads folder, and file into a History folder per platform: YouTube, Twitch, TikTok, Douyin, Instagram, Vimeo, or Other videos for any other site. History has a Video filter. Turn this off with File video frames into a folder per platform under Settings → Output."],
      },
    ],
    note: "Video mode leaves out Pick elements to leave out and Turbo mode, which only apply to page captures.",
  },
  {
    slug: "video-burst",
    title: "A burst of five frames",
    category: "Capture",
    depth: "Quick note",
    summary: "Two frames before the moment, the moment, and two after, then pick the best.",
    lead: "Fast motion rarely stops where you want it. With Burst on, one capture takes five frames around the moment so you can choose the sharp one.",
    image: "guide-video-burst.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "The ScrollSnapshot result page showing a burst: a strip of five numbered frames above a full-size sunset frame, with Save all and Download in the toolbar",
    imageCaption: "A burst on the result page: the strip picks a frame, Save all keeps all five.",
    relatedSlugs: ["video-frame", "video-button", "crop"],
    sections: [
      {
        title: "Turn it on",
        paragraphs: ["Switch on Burst of five frames in the popup's Video mode. Choose how far apart the frames are under Settings → Capture, in Time between burst frames: ⅛, ¼, ½ or 1 second. ¼ second is the default."],
      },
      {
        title: "What happens to the video",
        paragraphs: ["ScrollSnapshot pauses and steps the video to each frame, muted, then puts it back exactly as it was: the same time, paused or playing, muted or not. A live stream can't go forward in time, so its later frames are collected by letting it play on."],
      },
      {
        title: "On the result page",
        steps: ["Pick a frame in the strip above the image, or step through them with the arrow keys or the arrows at the sides.", "Crop or edit the frame you picked. Each frame keeps its own edits.", "Save all downloads the five, each as it currently is, as numbered files."],
      },
    ],
    note: "Burst needs the video's own pixels, so it isn't available when a frame has to be taken from the screen.",
  },
  {
    slug: "video-button",
    title: "A capture button on videos",
    category: "Capture",
    depth: "Quick note",
    summary: "A small camera over any video, if you want one. Off until you turn it on.",
    lead: "Turn on the capture button and a small camera appears in a corner of a video when you point at it. One press saves the frame, without opening the popup.",
    image: "guide-video-button.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "A sunset video with ScrollSnapshot's camera button in its top-left corner and its menu open: Capture & edit, Download frame, Burst mode, Include subtitles and Hide on this site",
    imageCaption: "The button's menu, opened from the arrow beside the camera.",
    relatedSlugs: ["video-frame", "video-burst", "settings"],
    sections: [
      {
        title: "Turn it on",
        paragraphs: ["ScrollSnapshot offers the button once, after your first video frame. You can also switch it with Show a button on videos in the popup's Video mode, or Show a capture button on videos under Settings → Capture. While it is off, no script runs on your pages."],
      },
      {
        title: "Use it",
        paragraphs: ["Point at a video and the camera appears in the first free corner, clear of the player's own buttons; you can pin a corner under Settings → Capture. Like a player's controls, it hides when the pointer rests and returns when you move. Press the camera to capture the frame and open it. It works in fullscreen too."],
      },
      {
        title: "The menu",
        paragraphs: ["The arrow beside the camera opens Capture & edit, which opens the frame straight in the editor; Download frame, which saves into the platform folder with a Frame saved note and no new tab; Burst mode and Include subtitles, which apply to that site only; and Hide on this site."],
      },
      {
        title: "Bring it back on a site",
        paragraphs: ["Sites where you hid the button, and sites with their own burst and subtitle choices, are listed under Settings → Capture, each with Remove or Reset. On a hidden site, the popup's Video mode says so, with Show to bring the button back at once."],
      },
    ],
    note: "The button reads nothing from the page and acts only when you press it.",
  },
  {
    slug: "whats-new-1-5",
    title: "What's new in ScrollSnapshot 1.5",
    category: "Release",
    depth: "Release notes",
    summary: "Frames from videos at their own resolution, a burst of five, and a capture button on videos.",
    lead: "Version 1.5 saves the frame a video is showing at the video's own resolution, with a burst of five around the moment, subtitles if you want them, and folders per platform.",
    image: "guide-video-burst.webp",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "The ScrollSnapshot result page showing a burst of five video frames",
    imageCaption: "New in 1.5: video frames, five at a time.",
    relatedSlugs: ["video-frame", "video-burst", "video-button", "whats-new-1-4"],
    sections: [
      {
        title: "Video frames",
        paragraphs: ["Choose Video in the popup, or press Alt+Shift+S, to save the frame a video is showing as a PNG at its own size. A copy-protected video is refused with a message, never saved as a black image."],
      },
      {
        title: "Burst, subtitles and folders",
        paragraphs: ["Burst takes five frames around the moment and puts the video back as it was; the result page lets you pick one or save all five. Include subtitles puts the captions into the frame. Frames file into a folder per platform, on disk and in History."],
      },
      {
        title: "A capture button on videos",
        paragraphs: ["Off until you turn it on. Point at a video and press the camera to save its frame; its menu downloads straight into the platform folder, sets burst and subtitles for one site, or hides the button there."],
      },
      {
        title: "A new shortcut",
        paragraphs: ["Alt+Shift+S captures a video frame on new installs, and Slices no longer has a default shortcut. Existing installs keep Alt+Shift+S on Slices until they change it at chrome://extensions/shortcuts."],
      },
      {
        title: "Getting the update",
        steps: ["Chrome updates extensions on its own, usually within a day or two of a release.", "To check now, open chrome://extensions, turn on Developer mode, and choose Update.", "Look for version 1.5.0 on ScrollSnapshot's card."],
      },
    ],
    note: "The changelog lists every change in this release.",
  },
];
