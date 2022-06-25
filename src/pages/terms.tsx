import fs from "fs/promises";
import { GetStaticProps } from "next";
import { FC } from "react";
import MarkdownPage from "../MarkdownPage";

interface Props {
  termsMarkdown: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const termsMarkdown = await fs.readFile("src/documents/terms.md", "utf-8");

  return { props: { termsMarkdown } };
};

const Terms: FC<Props> = ({ termsMarkdown }) => <MarkdownPage markdown={termsMarkdown} />;
export default Terms;
