import type { GatsbyConfig } from 'gatsby';
import strapiConfig from './strapi-config';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: 'Steddy Trading',
    siteUrl: `https://steddytrading.com`,
    description:
      'Steddy trading company is a real estate company based in Kenya.',
    image:
      'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/',
      },
    },
    'gatsby-plugin-postcss',
    strapiConfig
    // 'gatsby-transformer-remark',
    /*
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        whitelist: [
          'slick-slider',
          'slick-initialized',
          'slick-list',
          'slick-track',
          'slick-slide',
          'slick-active',
          'slick-current',
        ],
      },
    },
    */
  ],
};

export default config;
