import * as React from 'react';
import Layout from '../components/Layout';
import background from '../images/pastelshapes2.jpg';
import Article from '../components/Article';
import styled from 'styled-components';

const ExpertMain = styled.main`
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

const ExpertisePage = () => {
  return (
    <Layout>
      <ExpertMain>
        <Article>
          <h3 style={{ margin: 0 }}>Amiben segíthetek</h3>
          <p>
            A pszichológia csodásan sokszínű módszerei közül a sématerápia és a sémapárterápia
            eszközeivel dolgozom szívesen. Ezek az elméleti keretek és technikák tapasztalataim
            szerint remek alapot adnak az önismereti elmélyüléshez és fejlődéshez. Ezáltal pedig a
            mindennapi kérdéseink, nehézségeink feloldásához, konstruktív változtatásokhoz.
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
            <li>párkapcsolati pszichológiai konzultáció: 22000ft / 90perc</li>
          </ul>
        </Article>
      </ExpertMain>
    </Layout>
  );
};

export default ExpertisePage;
