import * as React from 'react';
import { HeadFC, Link } from 'gatsby';
import { Layout } from '../components/Layout';
import { services } from '../data-source';
import { ServiceCard } from '../components/ServiceCard';

const ServicesPage = ({ location }: any) => {
  return (
    <Layout title='Our Services' location={location.pathname}>
      <div className='container mx-auto py-10'>
        <div className='grid grid-cols-3'>
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;

export const Head: HeadFC = () => <title>Services Page</title>;
