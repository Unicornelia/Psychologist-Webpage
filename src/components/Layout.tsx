import React, { FC } from 'react';
import Header from './Header';
import './layout.css';
import Footer from './Footer';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

type LayoutProps = {
  children: React.ReactNode;
};

const Container = styled.main`
  display: grid;
  margin: 0;
  min-height: '100vh';
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle='Csaba Eszter pszichológus' />
      <Container>{children}</Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
