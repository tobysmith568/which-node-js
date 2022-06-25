import styled from "@emotion/styled";
import type { AppProps } from "next/app";
import Footer from "../Footer";
import Header from "../Header";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Header />

      <ContentWrapper>
        <Content>
          <Component {...pageProps} />
        </Content>
      </ContentWrapper>

      <Footer />
    </Page>
  );
}

export default MyApp;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding-left: 1em;
  padding-right: 1em;
  flex-grow: 1;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: auto;
`;
