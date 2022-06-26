import fs from "fs/promises";
import { GetStaticProps } from "next";
import { FC } from "react";
import MarkdownPage from "../MarkdownPage";
import Seo from "../Seo";

interface Props {
  faqMarkdown: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const faqMarkdown = await fs.readFile("src/documents/faq.md", "utf-8");

  return { props: { faqMarkdown } };
};

const Faq: FC<Props> = ({ faqMarkdown }) => (
  <>
    <Seo
      title="FAQ"
      description="Frequently Asked Questions about What Version of Node.js?"
      path="/faq"
    />
    <MarkdownPage markdown={faqMarkdown} />
  </>
);
export default Faq;
