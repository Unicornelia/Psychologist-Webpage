import * as React from 'react';
import Layout from '../components/Layout';
import background from '../images/pastelshapes2.jpg';
import profile from '../images/profil.jpg';
import { articleStyles } from '../styles/sharedStyles';

const pageStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  fontWeight: 500,
  padding: 30,
  margin: 0
};

const imageStyles = {
  display: 'flex',
  margin: '2rem auto',
  maxWidth: '50vw',
  border: '1px solid grey'
};

const AboutPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <article style={articleStyles}>
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
          <p>
            Várom Budapesten szeretettel a választ-, támogatást kereső felnőtteket, családokat.
            Motivációm, hogy a hozzám fordulók képessé váljanak:
            <ul>
              <li>szükségleteik felismerésére, kifejezésére</li>
              <li>az önmagukról való gondoskodásra.</li>
            </ul>
          </p>
          <img style={imageStyles} src={profile} alt='profile' />
        </article>
      </main>
    </Layout>
  );
};

export default AboutPage;
