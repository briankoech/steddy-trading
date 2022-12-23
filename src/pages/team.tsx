import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Layout } from '../components/Layout';

const TeamPage = () => {
  return (
    <Layout
      title='Team page'
      description='our team'
    >
      My team
    </Layout>
  );
};

export default TeamPage;

export const Head: HeadFC = () => <title>Team Page</title>;
