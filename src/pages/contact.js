import * as React from 'react';
import Layout from '../components/Layout';
import background from '../images/green.jpg';
import { Link } from 'gatsby';

const pageStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: 'white',
  fontSize: 16,
  fontWeight: 600,
  padding: 40,
  height: '100vh',
  margin: 0
};

const linkStyles = {
  color: 'white'
};

const ContactPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <p>
          {'Kapcsolat: '}
          <a style={linkStyles} href='mailto:eszter.csaba@gmail.com'>
            eszter.csaba@gmail.com
          </a>
        </p>
        <p>Konzultációk helyszíne: Budapest 7. kerület, 11. Kerület; online: google meet</p>
      </main>
    </Layout>
  );
};

export default ContactPage;
