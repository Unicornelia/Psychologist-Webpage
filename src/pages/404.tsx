import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Styled404 = styled.div`
  text-align: center;
  height: 100vh;
  padding: 50px;
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    font-weight: bold;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <Styled404>
      <h1>404 - Not Found</h1>
      <p>You just hit a route that does not exist... the sadness.</p>
      <p>
        <a href='/'>Go back home</a>
      </p>
    </Styled404>
  </Layout>
);

export default NotFoundPage;
