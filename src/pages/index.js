import * as React from 'react';
import background from '../images/pastelshapes2.jpg';
import Layout from '../components/Layout';
import therapy from '../images/therapy2.jpg';

const pageStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  fontWeight: 600,
  padding: 30,
  height: '100%',
  margin: 0
};

const paragraphStyles = {
  background: 'rgba(255, 255, 255, 0.5)',
  MozBoxShadow: '0 0 0 10px rgba(255, 255, 255, 0.5)',
  WebkitBoxShadow: '0 0 0 10px rgba(255, 255, 255, 0.5)',
  boxShadow: '0 0 0 10px rgba(255, 255, 255, 0.5)',
  fontSize: 18,
  fontWeight: 500,
  margin: 40,
  lineHeight: 1.7
};

const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <article style={paragraphStyles}>
          <p>
            Üdvözlöm a holnapomon! A jó élet egy folyamat, nem létező állapot. –mondja Carl Rogers,
            a humanista pszichológia atyja.
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
        </article>
        <img
          style={{ border: '1px solid grey', display: 'flex', margin: '0 auto', maxWidth: '70vw' }}
          src={therapy}
          alt='therapy'
        />
      </main>
    </Layout>
  );
};

export default IndexPage;
