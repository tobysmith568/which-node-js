import styled from "@emotion/styled";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import BackHomeLink from "./BackHomeLink";

interface Props {
  markdown: string;
}

const MarkdownPage: FC<Props> = ({ markdown }) => (
  <PageWrapper>
    <BackHomeLink />
    <ReactMarkdown linkTarget="_blank">{markdown}</ReactMarkdown>
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
