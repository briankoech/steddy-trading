import React from 'react';
import { HeadFC } from 'gatsby';
import { Layout } from "../components/Layout"

const ContactPage = () => {
  return (
    <Layout>
    Contact us
    </Layout>
  );
}

export default ContactPage;

export const Head: HeadFC = () => <title>Contact-Us</title>
