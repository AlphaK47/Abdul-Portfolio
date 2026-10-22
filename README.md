# Abdul Razzak Shaikh — Website Manager Portfolio

A static, responsive portfolio for Abdul Razzak Shaikh, Website Manager / D2C E-commerce Operations professional at Bagzone Lifestyle Private Limited.

## Preview locally

Preview the page over a local HTTP server rather than opening `index.html` as a `file://` URL.

1. Open the `formwork-heliodon-main` folder in VS Code.
2. If needed, install the **Live Server** VS Code extension.
3. Right-click `index.html` and choose **Open with Live Server**.
4. Use a desktop browser width around 1440px for the editorial composition, then check a mobile width around 390px with responsive design mode.

No build step or package installation is required. GSAP loads from pinned jsDelivr URLs; typefaces load from Google Fonts.

## Hero object and motion

The hero uses the locally stored backpack photograph as its atmospheric backdrop, with the cat image on the right. There is no separate handbag foreground image or 3D render in the hero. `main.js` retains the mobile navigation and GSAP scroll reveals; the hero does not initialize WebGL or depend on Three.js.

## Image credits and license

Supporting editorial photographs are stored locally in `assets/` and used under the Unsplash License. The license permits free commercial use without required attribution; creators are credited here as a courtesy. These are illustrative photographs, not Lavie product images, storefront screenshots, or client case-study evidence.

- `assets/hero-handbag.webp` — [Genesis Warner, “black leather bag”](https://unsplash.com/photos/black-leather-bag-odKRNACWltY)
- `assets/bag-editorial.webp` — [Yves Cedric Schulze, “a black purse sitting on top of a bed”](https://unsplash.com/photos/a-black-purse-sitting-on-top-of-a-bed-952LZba6BxM)
- `assets/backpack-dark.webp` — [Daniel Lincoln, “black leather backpack”](https://unsplash.com/photos/black-leather-backpack-dp75uo9Qflo)
- `assets/cat-portrait.webp` — [Thomas Shiro, “a cat laying down on a black surface”](https://unsplash.com/photos/a-cat-laying-down-on-a-black-surface-s8pMxaqCYqg)
- `assets/commerce-work.webp` — [Tai Bui, laptop at a workspace](https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-wooden-table-vW6k8lnArIk)
- `assets/code-work.webp` — [Dawit, laptop displaying code](https://unsplash.com/photos/turned-on-laptop-with-computer-programming-codes-display-2b_CoiuZCKI)

License terms: [Unsplash License](https://unsplash.com/license).

## Files

- `index.html` — portfolio sections, metadata, and relative image references.
- `styles.css` — responsive editorial layout, image treatments, typography, and reduced-motion rules.
- `main.js` — mobile navigation and scroll reveal behavior.
- `assets/` — locally stored editorial photographs.
- `guide/index.html` — standalone professional-profile summary.
- `.nojekyll` — asks GitHub Pages to serve the site without Jekyll processing.

## GitHub Pages

Publish the contents of this folder from the `main` branch and repository root in **Settings → Pages → Build and deployment → Deploy from a branch**. HTML, stylesheet, module, and image references use relative paths and work under a repository subpath.

GSAP and Google Fonts need network access to their CDNs. Personal email and phone details are intentionally not included.
