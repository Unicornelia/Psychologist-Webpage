import * as React from 'react';
import Layout from '../components/Layout';
import background from '../images/paint.jpg';

const pageStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: 'white',
  fontSize: 16,
  fontWeight: 600,
  padding: 40,
  height: '100vh',
  margin: 0
};

const AboutPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <p>
          Csaba Eszter vagyok, pszichológus, tanár, edző. 2010-ben végeztem az Eötvös Loránd
          Tudományegyetemen. Módszerspecifikus képzésem a Magyar Családterápiás Egyesületnél,
          illetve a Nemzetközi Sématerápiás Egyesület kereteiben végzem. Diplomáim kézhezvételét
          követően az állami ellátásban szereztem tapasztalatot gyerekek, felnőttek és családok
          pszichológiai támogatásával.
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
      </main>
    </Layout>
  );
};

export default AboutPage;
