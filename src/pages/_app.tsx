import styled from "@emotion/styled";
import type { AppProps } from "next/app";
import Footer from "../Footer";
import Header from "../Header";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      <ContentWrapper>
        <Content>
          <Component {...pageProps} />
        </Content>
      </ContentWrapper>

      <Footer />
    </>
  );
}

export default MyApp;

const ContentWrapper = styled.div`
  padding-left: 1em;
  padding-right: 1em;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: auto;
`;
