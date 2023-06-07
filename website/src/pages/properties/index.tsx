import * as React from 'react';
import { graphql, HeadFC } from 'gatsby';
import { Layout } from '../../components/Layout';
import { PropertyCard } from '../../components/PropertyCard';

const PropertiesPage = ({ data, error, location }: any) => {
  const { allStrapiProperty } = data;

  const properties = allStrapiProperty?.nodes || [];

  if (error) {
    return <div>Failed to fetch properties</div>;
  }

  return (
    <Layout
      title='Our Properties'
      description='Properties that we sell at steddytrading.com'
      location={location.pathname}
    >
      <div className='container mx-auto py-10 px-7 sm:px-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {properties.map((property: any) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PropertiesPage;

export const Head: HeadFC = () => <title>Properties Page</title>;

export const query = graphql`
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
`;
