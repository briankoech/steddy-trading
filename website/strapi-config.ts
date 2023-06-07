require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
console.log(process.env.STRAPI_TOKEN);
export default {
  resolve: 'gatsby-source-strapi',
  options: {
    apiURL: process.env.STRAPI_API_URL || 'http://localhost:1337',
    token: process.env.STRAPI_TOKEN,
    collectionTypes: ['Property', 'Category', 'User', 'Service'],
    singleTypes: ['about', 'company-info'],
    preview: true,
  },
};
