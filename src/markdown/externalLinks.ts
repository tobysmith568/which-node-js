import { defineHastPlugin } from "satteri";

const ownHost = "which-node.js.org";

/**
 * Marks every http(s) link as `nofollow`, and opens the ones that leave this website in a new tab
 */
export const externalLinks = defineHastPlugin({
  name: "external-links",
  element: {
    filter: ["a"],
    visit: (node, ctx) => {
      const href = node.properties["href"];

      if (typeof href !== "string") {
        return;
      }

      const url = parseAbsoluteUrl(href);

      if (url === undefined) {
        return;
      }

      ctx.setProperty(node, "rel", "nofollow");

      if (url.host !== ownHost) {
        ctx.setProperty(node, "target", "_blank");
      }
    }
  }
});

const parseAbsoluteUrl = (href: string) => {
  if (!/^https?:\/\//i.test(href)) {
    return undefined;
  }

  return new URL(href);
};
