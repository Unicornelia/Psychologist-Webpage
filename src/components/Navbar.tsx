import * as React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import { useEffect, useState } from 'react';

const navbarStyles = {
  color: '#16454b',
  textDecoration: 'none',
  listStyle: 'none',
  listStyleType: 'none',
  padding: '0 20px'
};

const menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '20px',
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
    position: 'relative',
    height: '100%'
  },
  bmMenu: {
    color: 'white',
    padding: '1.5em 0.5em 1em',
    fontSize: '1.15em'
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
    <Menu styles={menuStyles} isOpen={open} onOpen={() => handleClick()}>
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
      {/* </ul> */}
    </Menu>
  ) : (
    <ul
      style={{
        display: 'flex',
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
