import * as React from 'react';
import { Link } from 'gatsby';

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

    return (
      <li
        key={pageLink}
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          textDecoration: 'none',
          color: 'white',
          listStyleType: 'none',
          padding: '0 20px'
        }}
      >
        <Link to={pageLink}>{item}</Link>
      </li>
    );
  });

  return <ul style={{ display: 'flex', color: 'white' }}>{navMenuListTag}</ul>;
};

export default Navbar;
