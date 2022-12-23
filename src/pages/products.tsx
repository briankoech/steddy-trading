import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Layout } from '../components/Layout';
import { Seo } from '../components/seo';

const ProductsPage = () => {
  return (
    <Layout
      title='Products page'
      description='Products that we sell at steddytrading.com'
    >
      Products
    </Layout>
  );
};

export default ProductsPage;

export const Head: HeadFC = () => <title>Products Page</title>;
