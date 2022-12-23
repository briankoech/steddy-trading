import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

export function Seo(props) {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
        }
      }
    }
  `);

  const defaults = data?.site?.siteMetadata;

  const title = props.title || defaults?.title;
  const description = props.description || defaults?.description;
  const image: string = new URL(props.image || defaults?.image);
  const url: string = new URL(props.path || '/', defaults.siteUrl);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={url} />
      {image && <meta name='image' content={image} />}

      <meta property='og:url' content={url} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {image && <meta property='og:image' content={image} />}

      <meta property='twitter:card' content='summary_large_text' />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      {image && <meta property='twitter:image' content={image} />}
    </Helmet>
  );
}
