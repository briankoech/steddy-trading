import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Layout } from '../components/Layout';

const TeamPage = ({ location }) => {
  return (
    <Layout
      title='Our team'
      description='our team'
      location={location.pathname}
    >
      My team
    </Layout>
  );
};

export default TeamPage;

export const Head: HeadFC = () => <title>Team Page</title>;
