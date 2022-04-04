import * as React from 'react';
import { Link } from 'gatsby';

const navbarStyles = {
  color: '#16454b',
  textDecoration: 'none',
  listStyle: 'none',
  listStyleType: 'none',
  padding: '0 20px',
  '& a:link, a:visited, a:hover, a:active': { textDecoration: 'none' },
  '& a:active': { color: '#124933' }
};

const Navbar = () => {
  const navMenuItems = ['Home', 'About', 'Blog', 'Contact', 'Expertise'];

  const navMenuListTag = navMenuItems.map(item => {
    let pageLink = '';
    if (item === 'Home') {
      pageLink = '/';
    } else if (item === 'About') {
      pageLink = '/about/';
    } else {
      pageLink = `/${item.toLowerCase()}/`;
    }

    let menuItem;
    navMenuItems.map(i => {
      if (i === 'Home') {
        menuItem = 'Kezdõlap';
      } else if (item === 'About') {
        menuItem = 'Bemutatkozás';
      } else if (item === 'Contact') {
        menuItem = 'Kapcsolat';
      } else if (item === 'Blog') {
        menuItem = 'Blog';
      } else if (item === 'Expertise') {
        menuItem = 'Szaktudás';
      }

      return menuItem;
    });

    return (
      <li key={pageLink}>
        <Link to={pageLink} style={navbarStyles}>
          {menuItem}
        </Link>
      </li>
    );
  });

  return (
    <ul
      style={{
        display: 'flex',
        alignContent: 'flex-end',
        justifyContent: 'space-around',
        listStyleType: 'none',
        padding: '0 20px'
      }}
    >
      {navMenuListTag}
    </ul>
  );
};

export default Navbar;
