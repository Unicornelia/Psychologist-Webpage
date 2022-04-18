import * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'gatsby';

const navbarStyles = {
  color: '#16454b',
  textDecoration: 'none',
  listStyle: 'none',
  listStyleType: 'none',
  padding: '0 20px'
};

const Navbar = () => {
  let isSmallDevice;

  useEffect(() => {
    isSmallDevice = document.body.clientWidth < 960;
  }, []);

  return (
    <ul
      style={{
        display: isSmallDevice ? 'grid' : 'flex',
        alignContent: 'flex-end',
        justifyContent: 'space-around',
        listStyleType: 'none',
        padding: '0 20px'
      }}
    >
      <Link id='about' to='/about/' style={navbarStyles}>
        Bemutatkozás
      </Link>
      <Link id='expertise' to='/expertise/' style={navbarStyles}>
        Amiben segíthetek
      </Link>
      <Link id='contact' to='/contact/' style={navbarStyles}>
        Kapcsolat
      </Link>
      <Link id='blog' to='/blog/' style={navbarStyles}>
        Blog
      </Link>
    </ul>
  );
};

export default Navbar;
