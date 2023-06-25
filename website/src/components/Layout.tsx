import * as React from 'react';
import { Header } from './header/Header';
import { graphql, useStaticQuery } from 'gatsby';
import { Seo } from './seo';
import { ContactHeader } from './ContactHeader';
import { Footer } from './Footer';
import { PageHeader } from './header';

export const Layout = ({
  children,
  title = null,
  description = null,
  image = null,
  path = null,
  location = '',
}: any) => {
  const { strapiCompanyInfo, error, site } = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
      strapiCompanyInfo {
        about
      }
    }
  `);

  const meta = site?.siteMetadata ?? {};
  const showPageHeader = location.includes('services') || location.includes('projects') || location.includes('team');
  const { about } = strapiCompanyInfo;

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <ContactHeader />
      <Header />
      {showPageHeader ? <PageHeader title={title} /> : null}
      <main>{children}</main>
      <Footer about={about} />
    </>
  );
};
