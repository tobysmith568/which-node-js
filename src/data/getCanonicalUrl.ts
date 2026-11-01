/**
 * Gets the canonical URL for a page. The site is built with `build.format: "file"`, so while building
 * a page's pathname is `/faq.html` and `/index.html`, but they're served at `/faq` and `/`.
 */
export const getCanonicalUrl = (pathname: string, site: URL) => {
  const servedPathname = pathname.replace(/(^|\/)index\.html$/, "$1").replace(/\.html$/, "");

  return new URL(servedPathname, site).href;
};
