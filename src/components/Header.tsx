import React, { FC } from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar';
import styled from 'styled-components';
import theme from '../styles/theme';

type HeaderProps = {
  siteTitle?: string;
};

const StyledHeader = styled.header`
  display: flex;
  background: ${theme.colors.gradientBackground};
  padding: 1.5rem 2rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.primaryText};
  font-size: 1.8rem;
  font-weight: 600;
  transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.hover};
    transform: scale(1.05);
    text-shadow: 2px 2px 8px rgb(56, 161, 158);
  }
`;

const Header: FC<HeaderProps> = ({ siteTitle = '' }) => (
  <StyledHeader>
    <StyledTitle to='/'>{siteTitle}</StyledTitle>
    <Navbar />
  </StyledHeader>
);

export default Header;
