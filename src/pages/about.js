import * as React from 'react';
import Layout from '../components/Layout';
import background from '../images/pastelshapes2.jpg';
import profile from '../images/profil.jpg';

const pageStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: 'black',
  fontSize: 18,
  fontWeight: 500,
  padding: 30,
  height: '100%',
  margin: 0
};

const articleStyles = {
  fontWeight: 500,
  margin: 40,
  lineHeight: 1.7,
  background: 'rgba(255, 255, 255, 0.5)',
  '-moz-box-shadow': '0 0 0 10px rgba(255, 255, 255, 0.5)',
  '-webkit-box-shadow': '0 0 0 10px rgba(255, 255, 255, 0.5)',
  boxShadow: '0 0 0 10px rgba(255, 255, 255, 0.5)'
};

const AboutPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <article style={articleStyles}>
          <p>
            Csaba Eszter vagyok, pszichológus, tanár, edző. 2010-ben végeztem az Eötvös Loránd
            Tudományegyetemen. Módszerspecifikus képzésem a Magyar Családterápiás Egyesületnél,
            illetve a Nemzetközi Sématerápiás Egyesület kereteiben végzem.
          </p>
          <p>
            Diplomáim kézhezvételét követően az állami ellátásban szereztem tapasztalatot gyerekek,
            felnőttek és családok pszichológiai támogatásával.
          </p>
          <p>
            A segítő szakmában eltöltött évek alatt szerzett gyakorlat, az eközben szélesedő-bővülő
            eszköztáram, illetve a szakmai közeg támogató segítségével váltam magánzó szakemberré.
          </p>
          <p>
            Várom Budapesten szeretettel a választ-, támogatást kereső felnőtteket, családokat.
            Motivációm, hogy a hozzám fordulók képessé váljanak:
          </p>
          <ul>
            <li>szükségleteik felismerésére, kifejezésére</li>
            <li>az önmagukról való gondoskodásra.</li>
          </ul>

          <img
            style={{ display: 'flex', margin: '0 auto', maxWidth: '50%' }}
            src={profile}
            alt='profile'
          />
        </article>
      </main>
    </Layout>
  );
};

export default AboutPage;
