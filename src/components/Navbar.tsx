import * as React from 'react';
import { Link } from 'gatsby';

const navbarStyles = {
  color: '#16454b',
  textDecoration: 'none',
  listStyle: 'none',
  listStyleType: 'none',
  padding: '0 20px'
};

const activeTabStyle = {
  zIndex: 2,
  color: 'hsl(187, 55%, 19%)',
  textShadow: '-1px 0 1px hsl(180, 64%, 77%), 1px 0 1px rgba(0, 0, 0, 0.8)',
  transform: 'rotateY(-30deg)'
};

const Navbar = () => {
  const navMenuItems = ['Home', 'About', 'Expertise', 'Contact', 'Blog'];

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
