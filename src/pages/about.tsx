import React, { FC } from 'react';
import Layout from '../components/Layout';
import profile from '../images/profil.jpg';
import Article from '../components/Article';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';

const AboutMain = styled.main`
  font-weight: 500;
  margin: 0;
  min-height: 100vh;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledImage = styled.img`
  display: flex;
  margin: 2rem auto;
  max-width: 50vw;
  border: 1px solid grey;
  border-radius: 2px;
`;

const AboutPage: FC = () => {
  return (
    <Layout>
      <AboutMain>
        <BackgroundImage />
        <Article>
          <span>
            Csaba Eszter vagyok, pszichológus, tanár és edző. Pszichológus végzettségem 2010-ben az
            Eötvös Loránd Tudományegyetemen szereztem. Módszerspecifikus képzésem a Magyar
            Családterápiás Egyesületnél, illetve a Nemzetközi Sématerápiás Egyesület kereteiben
            végzem.
          </span>
          <p>
            Diplomáim kézhezvételét követően az állami ellátásban szereztem tapasztalatot gyerekek,
            felnőttek és családok pszichológiai támogatásával, szakszerű segítésével.
          </p>
          <p>
            A segítő szakmában eltöltött évek alatt szerzett gyakorlat, az eközben szélesedő-bővülő
            eszköztáram, illetve a szakmai közeg támogató segítségével váltam magánzó szakemberré.
          </p>
          <div>
            <p>
              Várom Budapesten szeretettel a választ-, támogatást kereső felnőtteket, családokat.
              Motivációm, hogy a hozzám fordulók képessé váljanak:
            </p>
            <ul>
              <li>szükségleteik felismerésére, kifejezésére</li>
              <li>az önmagukról való gondoskodásra.</li>
            </ul>
          </div>
          <StyledImage src={profile} alt='profile' />
        </Article>
      </AboutMain>
    </Layout>
  );
};

export default AboutPage;
