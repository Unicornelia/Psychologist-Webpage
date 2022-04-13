import * as React from 'react';
import { Link } from 'gatsby';

const navbarStyles = {
  color: '#16454b',
  textDecoration: 'none',
  listStyle: 'none',
  listStyleType: 'none',
  padding: '0 20px'
};

const Navbar = () => {
  const navMenuItems = ['About', 'Expertise', 'Contact', 'Blog'];

  const navMenuListTag = navMenuItems.map(item => {
    let pageLink = '';
    if (item === 'About') {
      pageLink = '/about/';
    } else {
      pageLink = `/${item.toLowerCase()}/`;
    }

    let menuItem;
    navMenuItems.map(i => {
      if (i === 'About') {
        menuItem = 'Bemutatkozás';
      } else if (item === 'Expertise') {
        menuItem = 'Amiben segíthetek';
      } else if (item === 'Contact') {
        menuItem = 'Kapcsolat';
      } else if (item === 'Blog') {
        menuItem = 'Blog';
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
