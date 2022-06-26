import { Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";

// cspell:ignore msapplication

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#70a760" />
        <meta name="apple-mobile-web-app-title" content="What Version of Node.js?" />
        <meta name="application-name" content="What Version of Node.js?" />
        <meta name="msapplication-TileColor" content="#cccccc" />
        <meta name="theme-color" content="#cccccc"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
