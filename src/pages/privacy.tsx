import fs from "fs/promises";
import { GetStaticProps } from "next";
import { FC } from "react";
import MarkdownPage from "../MarkdownPage";
import Seo from "../Seo";

interface Props {
  privacyMarkdown: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const privacyMarkdown = await fs.readFile("src/documents/privacy.md", "utf-8");

  return { props: { privacyMarkdown } };
};

const Privacy: FC<Props> = ({ privacyMarkdown }) => (
  <>
    <Seo
      title="Privacy Policy"
      description="Privacy Policy for What Version of Node.js?"
      path="/privacy"
      noIndex
    />
    <MarkdownPage markdown={privacyMarkdown} />;
  </>
);
export default Privacy;
