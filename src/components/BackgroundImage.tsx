import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const BackgroundImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
`;

const BackgroundImage = () => {
  return (
    <BackgroundImageWrapper>
      <StaticImage
        src='../images/pastelshapes2.jpg'
        alt='Background'
        layout='fullWidth'
        placeholder='blurred'
        style={{ height: '100vh', objectFit: 'cover' }}
      />
    </BackgroundImageWrapper>
  );
};
export default BackgroundImage;
