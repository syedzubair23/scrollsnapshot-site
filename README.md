# ScrollSnapshot Site

Public product page, privacy policy, and support page for ScrollSnapshot. GitHub Pages serves
this repository as a static site. The extension's source lives in a separate, private repository.

- **Product homepage:** https://syedzubair23.github.io/scrollsnapshot-site/
- **Privacy policy:** https://syedzubair23.github.io/scrollsnapshot-site/privacy/
- **Support / bug reports:** https://syedzubair23.github.io/scrollsnapshot-site/support/
- **Feature guides:** https://syedzubair23.github.io/scrollsnapshot-site/guides/

The product page is at the repository root. The privacy policy and support content have their
own paths; `/home/` and `/support.html` redirect to the current addresses.

Chrome Web Store's privacy-policy field and the extension's Privacy Policy link must use
`/privacy/` when the extension package is next updated.

The guide articles are edited in `guides/content.mjs`. Run `node scripts/build-guides.mjs`
to regenerate their static pages, directory, and sitemap before committing content changes.

Guide screenshots are public assets. Use example addresses, strip image metadata, and keep raw
captures or browser profiles out of this repository.
