import path from "path";

exports.createPages = async ({ actions, graphql, reporter }: any) => {
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
            description {
              data {
                description
              }
            }
            thumbnail {
              url
            }
          }
        }
        allStrapiService {
          nodes {
            slug
            title
            featured
            headline
            thumbnail {
              url
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running the graphql query`);
    return;
  }

  // create pages for each property
  const propertyTemplateComponent = path.resolve(
    "./src/pages/properties/property.tsx",
  );
  const serviceTemplateComponent = path.resolve(
    "./src/pages/services/service.tsx",
  );

  result.data.allStrapiProperty.nodes.forEach((node: any) => {
    createPage({
      component: propertyTemplateComponent,
      path: `properties/${node.slug}`,
      context: {
        property: node,
        // passs any additional dat you need to the template
      },
    });
  });

  result.data.allStrapiService.nodes.forEach((node: any) => {
    createPage({
      component: serviceTemplateComponent,
      path: `services/${node.slug}`,
      context: {
        service: node,
        // passs any additional dat you need to the template
      },
    });
  });
};
