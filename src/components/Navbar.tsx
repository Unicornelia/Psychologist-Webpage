import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { fallDown as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import theme from '../styles/theme';

const NavbarContainer = styled.nav`
  position: relative;
`;

const StyledLink = styled(Link)`
  color: ${theme.colors.primaryText};
  text-decoration: none;
  text-wrap: nowrap;
  font-size: ${theme.fontSizes.xl};
  font-weight: 600;
  padding: 12px 20px;
  transition:
    color 0.3s ease,
    transform 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.hover};
    transform: scale(1.05);
    text-shadow: 2px 2px 8px rgb(56, 161, 158);
  }
`;

const DesktopMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 10px 20px;
  background: transparent;
`;

const menuStyles = {
  bmMenuWrap: {
    position: 'fixed',
    width: 'min-content',
    height: '100%',
    top: '0'
  },
  bmMenu: {
    backdropFilter: 'blur(5px)',
    padding: '2rem',
    fontSize: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center'
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '0'
  },
  bmItem: {
    textAlign: 'center'
  },
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '20px',
    right: '26px',
    top: '26px'
  },
  bmBurgerBars: {
    background: '#1f6481'
  },
  bmCrossButton: {
    height: '30px',
    width: '30px'
  },
  bmCross: {
    background: '#1f6481'
  }
};

const Navbar = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const checkDeviceSize = () => setIsSmallDevice(window.innerWidth < 960);
    checkDeviceSize();
    window.addEventListener('resize', checkDeviceSize);
    return () => window.removeEventListener('resize', checkDeviceSize);
  }, []);

  return (
    <NavbarContainer>
      {isSmallDevice ? (
        <Menu styles={menuStyles} right outerContainerId='' pageWrapId=''>
          <StyledLink to='/about/'>Bemutatkozás</StyledLink>
          <StyledLink to='/expertise/'>Amiben segíthetek</StyledLink>
          <StyledLink to='/contact/'>Kapcsolat</StyledLink>
          <StyledLink to='/blog/'>Blog</StyledLink>
        </Menu>
      ) : (
        <DesktopMenu>
          <StyledLink to='/about/'>Bemutatkozás</StyledLink>
          <StyledLink to='/expertise/'>Amiben segíthetek</StyledLink>
          <StyledLink to='/contact/'>Kapcsolat</StyledLink>
          <StyledLink to='/blog/'>Blog</StyledLink>
        </DesktopMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
