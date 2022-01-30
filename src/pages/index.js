import * as React from 'react';
import background from '../images/green.jpg';
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

const paragraphStyles = {
  marginBottom: 48
};

const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <p style={paragraphStyles}>Tartalom feltöltése folyamatban...</p>
      </main>
    </Layout>
  );
};

export default IndexPage;
