import * as React from 'react';
import Layout from '../components/Layout';
import background from '../images/pastelshapes2.jpg';

const pageStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: 40,
  height: '100vh',
  margin: 0
};

const linkStyles = {
  margin: '0 0 0 5px',
  background: 'rgba(255, 255, 255, 0.5)',
  MozBoxShadow: '0 0 0 5px rgba(255, 255, 255, 0.5)',
  WebkitBoxShadow: '0 0 0 5px rgba(255, 255, 255, 0.5)',
  boxShadow: '0 0 0 5px rgba(255, 255, 255, 0.5)'
};

const BlogPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <p>
          <a
            target='_blank'
            style={linkStyles}
            href='https://csabaeszter.wordpress.com/'
            rel='noreferrer'
          >
            Blog megtekintése eredeti oldalon
          </a>
        </p>
        <iframe
          style={{ width: '100%', height: '90vh' }}
          title='blog'
          src='https://csabaeszter.wordpress.com/'
        />
      </main>
    </Layout>
  );
};

export default BlogPage;
