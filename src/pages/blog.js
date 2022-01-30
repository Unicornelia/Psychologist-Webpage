import * as React from 'react';
import Layout from '../components/Layout';
import background from '../images/green.jpg';

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

const BlogPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <a style={linkStyles} href='https://csabaeszter.wordpress.com/'>
          Blog
        </a>
      </main>
    </Layout>
  );
};

export default BlogPage;
