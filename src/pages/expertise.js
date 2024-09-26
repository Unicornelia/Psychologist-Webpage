import * as React from 'react';
import Layout from '../components/Layout';
import background from '../images/pastelshapes2.jpg';
import { articleStyles } from '../styles/sharedStyles';

const pageStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  fontWeight: 500,
  padding: 40,
  margin: 0
};

const ExpertisePage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <article style={articleStyles}>
          <h3 style={{ margin: 0 }}>Amiben segíthetek</h3>
          <p>
            A pszichológia csodásan sokszínű módszerei közül a család- és párterápiával, illetve a
            sématerápia eszközeivel dolgozom szívesen. Ezek az elméleti keretek és technikák
            tapasztalataim szerint remek alapot adnak az önismereti elmélyüléshez és fejlődéshez.
            Ezáltal pedig a mindennapi kérdéseink, nehézségeink feloldásához, konstruktív
            változtatásokhoz.
          </p>
          <p>
            Személyesen Budapesten, illetve online várom a támogatást kereső családokat, párokat,
            egyéneket pszichológiai konzultációra az alábbi témákban:
          </p>
          <ul>
            <li>önismereti mélyülés, személyiségfejlődés</li>
            <li>érzelmek, szükségletek felismerése, kifejezése, öngondoskodás</li>
            <li>krízisek kezelése, feldolgozása, erőforrások mozgósítása</li>
            <li>
              családi-párkapcsolati kommunikáció, határok, szerepek, érzelmek, működési mintázatok
              és dinamika feltérképezése, fejlesztése, konfliktusok kezelése
            </li>
          </ul>
          <br />
          <p>Konzultációk ára:</p>
          <ul>
            <li>egyéni pszichológiai konzultáció: 12000ft / 50perc</li>
            <li>páros-, vagy családi pszichológiai konzultáció: 22000ft / 90perc</li>
          </ul>
        </article>
      </main>
    </Layout>
  );
};

export default ExpertisePage;
