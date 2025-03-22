import React from 'react';
import Layout from '../components/Layout';
import background from '../images/pastelshapes2.jpg';
import email from '../images/gmbw.svg';
import facebook from '../images/fbbw.svg';
import insta from '../images/instabw.svg';
import meet from '../images/meet.svg';
import Article from '../components/Article';
import styled from 'styled-components';
import theme from '../styles/theme';

const ContactMain = styled.main`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-weight: 500;
  margin: 0;
  min-height: 100vh;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledLink = styled.a`
  color: ${theme.colors.primaryText};
  text-decoration: none;
  position: relative;
  display: inline-block;
`;

const IframeWrapper = styled.div`
  padding: 30px;
  display: grid;
  justify-content: center;
  margin: 0 auto;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px; /* Added spacing */
  padding-top: 20px;
`;

const IconWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

const Icon = styled.img`
  height: 40px;
  width: 40px;
  vertical-align: middle;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Tooltip = styled.div`
  visibility: hidden;
  background: ${theme.colors.gradientBackground};
  color: ${theme.colors.primaryText};
  text-align: center;
  padding: 5px 10px;
  border-radius: 5px;
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  font-size: 14px;
`;

const ContactPage = () => {
  return (
    <Layout>
      <ContactMain>
        <Article>
          <h3 style={{ margin: 0 }}>Kapcsolat</h3>
          <p>Email: eszter.csaba@gmail.com</p>
          <div>
            Konzultációk helyszíne
            <ul style={{ margin: 5 }}>
              <li>Személyesen: Budapest 11. kerület</li>
              <li>
                Online: GoogleMeet <Icon src={meet} alt='GoogleMeet' />
              </li>
            </ul>
          </div>
          <IconContainer>
            <StyledLink target='_blank' rel='noreferrer' href='mailto:eszter.csaba@gmail.com'>
              <IconWrapper>
                <Icon src={email} alt='Email' />
                <Tooltip className='tooltip'>Email Csaba Eszter</Tooltip>
              </IconWrapper>
            </StyledLink>
            <StyledLink
              target='_blank'
              rel='noreferrer'
              href='https://www.facebook.com/CsabaEszterPszichologus'
            >
              <IconWrapper>
                <Icon src={facebook} alt='Facebook' />
                <Tooltip className='tooltip'>Visit Facebook</Tooltip>
              </IconWrapper>
            </StyledLink>
            <StyledLink
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/csaba_eszter_pszichologus'
            >
              <IconWrapper>
                <Icon src={insta} alt='Instagram' />
                <Tooltip className='tooltip'>Follow on Instagram</Tooltip>
              </IconWrapper>
            </StyledLink>
          </IconContainer>
        </Article>
        <IframeWrapper>
          <iframe
            title='11ker'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43161.8651686079!2d18.98370543207737!3d47.458413151868236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddec6463400b%3A0x500c4290c1ed5e0!2sBudapest%2C%20District%20XI.%2C%20Hungary!5e0!3m2!1sen!2sde!4v1649069485395!5m2!1sen!2sde'
            style={{ border: '1px solid grey', width: '70vw', height: '70vh', borderRadius: '4px' }}
            allowFullScreen={undefined}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </IframeWrapper>
      </ContactMain>
    </Layout>
  );
};

export default ContactPage;
