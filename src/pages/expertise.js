import * as React from 'react';
import Layout from '../components/Layout';
import background from '../images/pastelshapes2.jpg';

const pageStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  fontWeight: 500,
  padding: 40,
  height: '100vh',
  margin: 0
};

const articleStyle = {
  fontWeight: 500,
  margin: 40,
  lineHeight: 1.7,
  background: 'rgba(255, 255, 255, 0.5)',
  MozBoxShadow: '0 0 0 10px rgba(255, 255, 255, 0.5)',
  WebkitBoxShadow: '0 0 0 10px rgba(255, 255, 255, 0.5)',
  boxShadow: '0 0 0 10px rgba(255, 255, 255, 0.5)'
};

const ExpertisePage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <article style={articleStyle}>
          <p>Amiben segíthetek:</p>
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
