import * as React from 'react';
import { Link } from 'gatsby';
import { FC } from 'react';
import Navbar from './Navbar';

type HeaderProps = {
  siteTitle?: string;
};

const Header: FC<HeaderProps> = ({ siteTitle = '' }) => (
  <header
    style={{
      display: 'flex',
      flex: '1 auto',
      background: '#c1efe2',
      marginBottom: '1.45rem',
      margin: '0 auto',
      padding: '1.5rem 2rem',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to='/'
        style={{
          color: '#1f5157',
          textDecoration: 'none'
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <Navbar />
  </header>
);

export default Header;
