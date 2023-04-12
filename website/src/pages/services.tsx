import * as React from 'react';
import { graphql, HeadFC } from 'gatsby';
import { Layout } from '../components/Layout';
import { ServiceCard } from '../components/ServiceCard';
import { Service } from '../interfaces';

const ServicesPage = ({ data, error, location }: any) => {

  if (error) {
    return <div>Error fetching services</div>
  }

  const services = data?.allStrapiService?.nodes ?? [];
  return (
    <Layout title='Our Services' location={location.pathname}>
      <div className='container mx-auto py-10 px-7 sm:px-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5'>
          {services.map((service: Service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;

export const Head: HeadFC = () => <title>Services Page</title>;


export const query = graphql`
  query {
      allStrapiService {
        nodes {
          slug
          title
          featured
          headline
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
