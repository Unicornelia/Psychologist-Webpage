import * as React from 'react';
import background from '../images/paint.jpg';
import Layout from '../components/Layout';

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

const paragraphStyles = {
  marginBottom: 48
};

const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <p style={paragraphStyles}>Tartalom feltöltése folyamatban...</p>
        <a style={linkStyles} href='https://csabaeszter.wordpress.com/'>
          Blog
        </a>
        <p>Kapcsolat: eszter.csaba@gmail.com</p>
      </main>
    </Layout>
  );
};

export default IndexPage;
