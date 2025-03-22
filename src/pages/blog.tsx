import * as React from 'react';
import Layout from '../components/Layout';
import background from '../images/pastelshapes2.jpg';
import styled from 'styled-components';
import theme from '../styles/theme';

const BlogMain = styled.main`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-weight: 500;
  margin: 0;
  min-height: 100vh;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledLink = styled.a`
  color: ${theme.colors.primaryText};
  text-decoration: none;
  font-weight: 500;
  font-size: ${theme.fontSizes.xl};
  margin: 0 0 25px 0;
  position: relative;
  transition: transform 0.3s ease, text-shadow 0.2s ease;

  &:hover {
    color: ${theme.colors.hover};
    transform: scale(1.05);
    text-shadow: 2px 2px 8px rgb(56, 161, 158);
  }

  &:active {
    transform: scale(1.8);
  }
`;

const BlogPage = () => {
  return (
    <Layout>
      <BlogMain>
        <StyledLink target='_blank' href='https://csabaeszter.wordpress.com/' rel='noreferrer'>
          Blog megtekintése eredeti oldalon
        </StyledLink>

        <iframe
          style={{ width: '80vw', height: '80vh', borderRadius: '4px' }}
          title='blog'
          src='https://csabaeszter.wordpress.com/'
        />
      </BlogMain>
    </Layout>
  );
};

export default BlogPage;
