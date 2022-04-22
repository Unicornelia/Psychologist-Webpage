import * as React from 'react';
import { Link } from 'gatsby';
import { fallDown as Menu } from 'react-burger-menu';
import { useEffect, useState } from 'react';

const navbarStyles = {
  color: '#16454b',
  textDecoration: 'none',
  listStyle: 'none',
  listStyleType: 'none',
  padding: '0 20px'
};

const fullMenuStyles = {
  display: 'flex',
  alignContent: 'flex-end',
  justifyContent: 'space-around',
  listStyleType: 'none'
};

const menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '20px',
    justifyContent: 'center',
    right: '26px',
    top: '26px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '26px',
    width: '26px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'sticky',
    right: '10px',
    height: '100%',
    width: 'fit-content'
  },
  bmMenu: {
    color: '#c1efe2',
    padding: '1.5em 0.5em 1em',
    fontSize: '1.15em',
    height: '30%'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '1em'
  },
  bmItem: {
    display: 'flex'
  },
  bmOverlay: {
    background: 'none'
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    setIsSmallDevice(document.body.clientWidth < 960);
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return isSmallDevice ? (
    <Menu styles={menuStyles} isOpen={open} onOpen={handleClick} noOverlay>
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
    </Menu>
  ) : (
    <ul style={fullMenuStyles}>
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
