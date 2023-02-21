import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Layout } from '../components/Layout';

const TeamPage = ({ location }: any) => {
  return (
    <Layout
      title='Our team'
      description='our team'
      location={location.pathname}
    >
      <div className="container mx-auto p-20 flex flex-row items-center justify-center">Coming soon</div>
    </Layout>
  );
};

export default TeamPage;

export const Head: HeadFC = () => <title>Team Page</title>;
