import * as React from 'react';
import Layout from '../components/Layout';
import background from '../images/plantclock.jpg';

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

const ExpertisePage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
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
            családi-párkapcsolati kommunikáció, határok, szerepek, érzelmek, működési mintázatok és
            dinamika feltérképezése, fejlesztése, konfliktusok kezelése
          </li>
        </ul>
        Konzultációk ára: -egyéni pszichológiai konzultáció: 9000ft/50perc -páros-, vagy családi
        pszichológiai konzultáció: 20000ft/90perc
      </main>
    </Layout>
  );
};

export default ExpertisePage;
