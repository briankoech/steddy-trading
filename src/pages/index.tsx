import * as React from 'react';
import { graphql, useStaticQuery, HeadFC } from 'gatsby';
import { Layout } from '../components/Layout';
import { Seo } from '../components/seo';

const IndexPage = (props: any) => {
  console.log(props);
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};
  console.log(meta);

  return <Layout>Welcome</Layout>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

/*
export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
*/
