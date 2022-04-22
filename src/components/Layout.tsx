import * as React from 'react';
import Header from './Header';
import './layout.css';
import { FC } from 'react';
import Footer from './Footer';

type LayoutProps = {
  children: Node;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header siteTitle='Csaba Eszter pszichológus' />
      <div
        style={{
          margin: '0 auto'
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
