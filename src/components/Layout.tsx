import * as React from 'react';
import { Header } from './header/Header';
import { graphql, useStaticQuery } from 'gatsby';
import { Seo } from './seo';

export const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) => {
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

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <Header />
      <main>{children}</main>
    </>
  );
};
