import * as React from 'react';
import { Header } from './header/Header';
import { graphql, useStaticQuery } from 'gatsby';
import { Seo } from './seo';
import { ContactHeader } from './ContactHeader';
import { Footer } from './Footer';
import { PageHeader } from './header';

export const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
  location = '',
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

  console.log('location', location);
  const meta = data?.site?.siteMetadata ?? {};
  const showPageHeader = location.includes('services') || location.includes('projects') || location.includes('team') ;

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <ContactHeader />
      <Header />
      {showPageHeader ? <PageHeader title={title} /> : null}
      <main>{children}</main>
      <Footer />
    </>
  );
};
