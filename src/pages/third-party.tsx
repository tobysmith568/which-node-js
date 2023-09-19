import styled from "@emotion/styled";
import { ILicense, getProjectLicenses } from "generate-license-file";
import { GetStaticProps } from "next";
import { FC, Fragment } from "react";
import BackHomeLink from "../BackHomeLink";
import Link from "../Link";
import Seo from "../Seo";

interface Props {
  licenses: ILicense[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const licenses = await getProjectLicenses("./package.json");

  return {
    props: { licenses: licenses.map(l => ({ content: l.content, dependencies: l.dependencies })) }
  };
};

const LicensesPage: FC<Props> = ({ licenses }) => {
  return (
    <>
      <Seo
        title="Third-Party Libraries"
        description="Third-Party Libraries used by Which Version of Node.js?"
        path="/third-party"
        noIndex
      />

      <PageWrapper>
        <BackHomeLink />

        <h1>Third-Party Licenses</h1>
        <h3>This page lists all of the third-party licenses used by this website</h3>
        <h4>
          This page was generated using the{" "}
          <Link
            href="https://www.npmjs.com/package/generate-license-file"
            newTab
            color="#000"
            hoverColor="#000">
            generate-license-file npm package
          </Link>
          .
        </h4>
        {licenses.map((license, i) => getLicense(license, i))}
      </PageWrapper>
    </>
  );
};
export default LicensesPage;

const PageWrapper = styled.div`
  max-width: 800px;
  margin: 3em auto 3em auto;
`;

const getLicense = (license: ILicense, i: number) => {
  return (
    <Fragment key={i}>
      <p>The following npm packages may be included in this website:</p>
      <ul>
        {license.dependencies.map(dependency => (
          <li key={dependency}>
            <Link href={getPackageUrl(dependency)} newTab color="#000" hoverColor="#000">
              {dependency}
            </Link>
          </li>
        ))}
      </ul>
      <p>These packages contains the following license and notice below:</p>
      <License>{license.content}</License>
      <br />
      <hr />
      <br />
    </Fragment>
  );
};

const License = styled.p`
  white-space: break-spaces;
`;

const getPackageUrl = (packageNameAndVersion: string) => {
  const indexOfLastAt = packageNameAndVersion.lastIndexOf("@");
  const packageName = packageNameAndVersion.substring(0, indexOfLastAt);
  const packageVersion = packageNameAndVersion.substring(indexOfLastAt + 1);

  return `https://www.npmjs.com/package/${packageName}/v/${packageVersion}`;
};
