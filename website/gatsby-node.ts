import path from "path";

exports.createPages = async ({ actions, graphql, reporter }) => {

  const { createPage } = actions;

  // query for markdown nodes for creating the page

  const result = await graphql(
    `
      query {
        allStrapiProperty {
          nodes {
            slug
            title
            featured
            price
            size
            location
            sold
            images {
              url
            }
            pin_location
            description
            thumbnail {
              url
              file {
                childImageSharp {
                  gatsbyImageData(
                    height: 400
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running the graphql query`);
    return;
  }

  // create pages for each property
  const templateComponent = path.resolve('./src/pages/properties/property.tsx');

  result.data.allStrapiProperty.nodes.forEach((node: any) => {
    createPage({
      component: templateComponent,
      path: `properties/${node.slug}`,
      context: {
        property: node
        // passs any additional dat you need to the template
      }
    })
  });

};
