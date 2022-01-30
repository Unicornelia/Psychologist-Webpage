import * as React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  const navMenuItems = ['Home', 'About', 'Blog', 'Contact'];

  const navMenuListTag = navMenuItems.map(item => {
    let pageLink = '';
    if (item === 'Home') {
      pageLink = '/';
    } else if (item === 'About') {
      pageLink = '/about/';
    } else if (item === 'Blog') {
      pageLink = '/blog/';
    } else {
      pageLink = `/${item.toLowerCase()}/`;
    }

    return (
      <li key={pageLink}>
        <Link style={{ boxShadow: 'none', textDecoration: 'none', color: 'white' }} to={pageLink}>
          {item}
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <div>
        <ul>{navMenuListTag}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
