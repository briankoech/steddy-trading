import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Layout } from '../components/Layout';

const ServicesPage = () => {
  return (
    <Layout
      title='Services page'
      description='Services offered at steddytrading.com'
    >
      Services
    </Layout>
  );
};

export default ServicesPage;

export const Head: HeadFC = () => <title>Services Page</title>;
