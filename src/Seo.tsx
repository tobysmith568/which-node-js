import { NextSeo } from "next-seo";
import { FC } from "react";

const canonicalDomain = "https://which-node.js.org";

interface Props {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

const Seo: FC<Props> = ({ title, description, path, noIndex }) => (
  <NextSeo
    title={title}
    description={description}
    canonical={canonicalDomain + path}
    noindex={noIndex}
  />
);
export default Seo;
