import React, { FC } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const StyledFooter = styled.footer`
  font-size: ${theme.fontSizes.xs};
  background-color: ${theme.colors.background};
  padding: 5px;
  position: relative;
`;

const Footer: FC = () => {
  return (
    <StyledFooter>
      © Built with
      <a href='https://www.gatsbyjs.com'> Gatsby</a> by{' '}
      <a target='_blank' href='https://github.com/Unicornelia' rel='noreferrer'>
        Unicornelia
      </a>
    </StyledFooter>
  );
};

export default Footer;
