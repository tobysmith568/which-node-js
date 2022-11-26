import styled from "@emotion/styled";
import type { NextPage } from "next";
import LibraryMaintainer from "../LibraryMaintainer";
import Loading from "../Loading";
import NoOne from "../NoOne";
import Seo from "../Seo";
import useVersions from "../data/useVersions";
import WebsiteServiceMaker from "../WebsiteServiceMaker";

const Home: NextPage = () => {
  const versions = useVersions();

  return (
    <Index>
      <Seo
        title="What version of Node.js?"
        description="What Version of Node.js should you be using?"
        path=""
      />

      {versions === null && <Loading />}

      {versions && (
        <IndexContent>
          <h2>If you&apos;re a...</h2>

          <Grid>
            <div>
              <LibraryMaintainer />
            </div>
            <div>
              <WebsiteServiceMaker />
            </div>
          </Grid>

          <NoOneWrapper>
            <NoOne />
          </NoOneWrapper>
        </IndexContent>
      )}
    </Index>
  );
};
export default Home;

const Index = styled.div`
  text-align: center;

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.8em;
  }

  h4 {
    font-size: 1.3em;
  }
`;

const IndexContent = styled.div`
  max-width: 1000px;
`;

const Grid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;

  @media only screen and (max-width: 700px) {
    grid-auto-flow: row;
  }
`;

const NoOneWrapper = styled.div`
  margin-top: 4em;
  margin-bottom: 2em;
`;
