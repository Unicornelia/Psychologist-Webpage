import * as React from 'react';
import Header from './Header';
import './layout.css';
import { FC } from 'react';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const bodyStyle = {
  display: 'grid',
  margin: 0,
  minHeight: '100vh'
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header siteTitle='Csaba Eszter pszichológus' />
      <main style={bodyStyle}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
