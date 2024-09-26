import * as React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        fontSize: 12,
        backgroundColor: '#c1efe2',
        padding: '5px',
        position: 'relative',
        // width: '100%'
      }}
    >
      © {new Date().getFullYear()}, Built with
      <a href='https://www.gatsbyjs.com'> Gatsby</a> by{' '}
      <a target='_blank' href='https://github.com/Unicornelia' rel='noreferrer'>
        Unicornelia
      </a>
    </footer>
  );
};

export default Footer;
