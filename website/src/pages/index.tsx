import * as React from "react";
import { graphql, HeadFC, Link } from "gatsby";
import { Layout } from "../components/Layout";
import { ServiceCard } from "../components/ServiceCard";
import { PropertyCard } from "../components/PropertyCard";
import { Hero } from "../components/Hero";
import { Property, Service } from "../interfaces";

const IndexPage = (props: any) => {
  const { services, properties, heroes } = props.data;

  const featuredServices = services?.nodes || [];
  const featuredProperties = properties?.nodes || [];

  return (
    <Layout>
      <Hero heroes={heroes} />

      <section className="bg-gray-200">
        <div className="p-9 flex flex-col container mx-auto items-center">
          <h2 className="uppercase text-3xl p-5 text-center after:block after:content after:bg-amber-400 after:w-16 after:h-0.5 after:mt-4 after:mx-auto">
            Our services
          </h2>
          <p className="px-10 py-7 text-center max-w-5xl">
            With over 15 years experience and real focus on customer
            satisfaction, you can rely on us for your next renovation, driveway
            sett or home repair. We provide a professional service for private
            and commercial customers
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white">
            {featuredServices.map((service: Service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <Link
            to="/services"
            className="px-4 py-2 mt-10 rounded-3xl text-white uppercase bg-amber-400 border border-amber-400 hover:bg-white hover:text-black"
          >
            View all services
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="py-9 flex flex-col items-center">
          <h2 className="uppercase text-3xl p-5 text-center after:block after:content after:bg-amber-400 after:w-16 after:h-0.5 after:mt-4 after:mx-auto">
            Recent Propertys
          </h2>

          <p className="px-10 py-7 text-center max-w-5xl">
            Here are a few of many projects we have completed for our customers.
            We provide a professional service which includes consultation on
            property sale, subdivision projects, land consolidation among
            others.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 container mx-auto gap-4 p-4">
            {featuredProperties.map((property: Property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>

          <div className="flex flex-row mt-10">
            <h3 className="text-center">
              <span className="uppercase text-xl font-medium px-7 hidden sm:inline-block">
                Explore our properties
              </span>

              <Link
                to="/properties"
                className="px-4 py-2 mt-10 rounded-3xl text-white uppercase bg-amber-400 border border-amber-400 hover:bg-white hover:text-black"
              >
                View all properties
              </Link>
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    services: allStrapiService(filter: { featured: { eq: true } }) {
      nodes {
        slug
        title
        featured
        headline
        thumbnail {
          url
          localFile {
            childImageSharp {
              gatsbyImageData(width: 200, placeholder: BLURRED)
            }
          }
        }
      }
    }

    properties: allStrapiProperty(filter: { featured: { eq: true } }) {
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
          localFile {
            childImageSharp {
              gatsbyImageData(width: 200, placeholder: BLURRED)
            }
          }
        }
      }
    }

    heroes: allStrapiHero {
      nodes {
        title
        description
        img {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
