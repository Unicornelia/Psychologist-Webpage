import React from 'react';
import styled from 'styled-components';
import background from '../images/pastelshapes2.jpg';
import Layout from '../components/Layout';
import therapy from '../images/therapy2.jpg';
import Article from '../components/Article';

const Main = styled.main`
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

const StyledImage = styled.img`
  border: 1px solid grey;
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  height: auto;
`;

const IndexPage = () => {
  return (
    <Layout>
      <Main>
        <Article>
          <p>
            Üdvözlöm a holnapomon! A jó élet egy folyamat, nem létező állapot –mondja Carl Rogers, a
            humanista pszichológia atyja.
          </p>
          <p>
            Ezzel üzeni nekünk, hogy a növekedés, az önmegvalósítás nem egy egyszeri célon alapuló
            statikus állapot.
          </p>
          <p>
            A fejlődés maga az út, és a “jó élet” törekvés a fejlődésre. Amennyiben segítő
            szakembert keres, aki partnerközpontú szemléletben kíséri, hogy megtalálja a kérdésére a
            saját válaszait, kíséri a fejlődése útján, és kíséri abban, hogy megtanulja saját
            szükségleteit felismerni és betölteni, jó helyen jár.
          </p>
          Vallom, hogy minden kérdés jó, fontos és számít. Ezért kérem, írjon bátran üzenetet!
        </Article>
        <StyledImage src={therapy} alt='therapy' />
      </Main>
    </Layout>
  );
};

export default IndexPage;
