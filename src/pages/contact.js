import * as React from 'react';
import Layout from '../components/Layout';
import background from '../images/pastelshapes2.jpg';
import { articleStyles } from '../styles/sharedStyles';

const pageStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: 40,
  margin: 0
};

const linkStyles = {
  color: '#334556'
};

const iframeStyles = {
  margin: 40,
  padding: 30,
  display: 'grid',
  justifyContent: 'center',
  margin: '0 auto'
};

const ContactPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <article style={{ ...articleStyles, width: '70%', margin: '0 auto' }}>
          <h3 style={{ margin: 0 }}>Kapcsolat:</h3>
          <p>Konzultációk helyszíne
            <ul style={{ margin: 5 }}>
              <li>Személyesen: Budapest 7. kerület, 11. kerület</li>
              <li>Online: GoogleMeet 💻</li>
            </ul>
          </p>
          <span>Email: <></>
            <a style={linkStyles} target='_blank' rel='noreferrer' href='mailto:eszter.csaba@gmail.com'>
              eszter.csaba@gmail.com
            </a>
          </span>
          <p>
            <a style={linkStyles} target='_blank' rel='noreferrer' href='https://www.facebook.com/CsabaEszterPszichologus'>
              Facebook
            </a>
          </p>
          <p>
            <a style={linkStyles} target='_blank' rel='noreferrer' href='https://www.instagram.com/csaba_eszter_pszichologus'>
              Instagram
            </a>
          </p>
        </article>
        <div style={iframeStyles}>
          <iframe
            title='7ker'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10781.364993681946!2d19.06462123554813!3d47.50274511273644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc64571d2f19%3A0x500c4290c1ed5a0!2sBudapest%2C%20District%20VII.%2C%20Hungary!5e0!3m2!1sen!2sde!4v1649069410539!5m2!1sen!2sde'
            style={{ border: '1px solid grey', marginBottom: 30, width: '70vw', height: '50vh' }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
          <iframe
            title='11ker'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43161.8651686079!2d18.98370543207737!3d47.458413151868236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddec6463400b%3A0x500c4290c1ed5e0!2sBudapest%2C%20District%20XI.%2C%20Hungary!5e0!3m2!1sen!2sde!4v1649069485395!5m2!1sen!2sde'
            style={{ border: '1px solid grey', width: '70vw', height: '50vh' }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </main>
    </Layout>
  );
};

export default ContactPage;
