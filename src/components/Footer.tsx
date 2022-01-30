import * as React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: '2rem'
      }}
    >
      © {new Date().getFullYear()}, Built with
      <a href='https://www.gatsbyjs.com'>Gatsby</a> by{' '}
      <a target='_blank' href='https://github.com/Unicornelia' rel='noreferrer'>
        Unicornelia
      </a>
    </footer>
  );
};

export default Footer;
