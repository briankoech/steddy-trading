require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
console.log(process.env.STRAPI_TOKEN);
export default {
  resolve: "gatsby-source-strapi",
  options: {
    apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
    token: process.env.STRAPI_TOKEN,
    collectionTypes: [
      { singularName: "property", name: "properties" },
      { singularName: "category", name: "categories" },
      { singularName: "user", name: "users" },
      { singularName: "service", name: "services" },
      { singularName: "hero", name: "heroes" },
    ],
    singleTypes: ["company-info", "about"],
    preview: true,
  },
};
