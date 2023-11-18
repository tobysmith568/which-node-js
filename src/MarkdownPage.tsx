import styled from "@emotion/styled";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import BackHomeLink from "./BackHomeLink";
import rehypeExternalLinks, { Options } from "rehype-external-links";

interface Props {
  markdown: string;
}

const rehypeExternalLinksOptions: Options = {
  target: a => {
    const href = a.properties["href"] as string;
    const url = new URL(href);
    return url.host === "which-node.js.org" ? null : "_blank";
  }
};

const MarkdownPage: FC<Props> = ({ markdown }) => (
  <PageWrapper>
    <BackHomeLink />
    <ReactMarkdown rehypePlugins={[[rehypeExternalLinks, rehypeExternalLinksOptions]]}>
      {markdown}
    </ReactMarkdown>
  </PageWrapper>
);
export default MarkdownPage;

const PageWrapper = styled.div`
  max-width: 800px;
  margin: 3em auto 3em auto;

  a {
    color: #000;
    text-decoration: underline;
  }
`;
