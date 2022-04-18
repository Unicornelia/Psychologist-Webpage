import * as React from 'react';
import Layout from '../components/Layout';
import background from '../images/pastelshapes2.jpg';

const pageStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  fontWeight: 600,
  padding: 40,
  height: '100vh',
  margin: 0
};

const linkStyles = {
  fontWeight: 500,
  margin: 40,
  lineHeight: 1.7,
  background: 'rgba(255, 255, 255, 0.5)',
  MozBoxShadow: '0 0 0 10px rgba(255, 255, 255, 0.5)',
  WebkitBoxShadow: '0 0 0 10px rgba(255, 255, 255, 0.5)',
  boxShadow: '0 0 0 10px rgba(255, 255, 255, 0.5)',
  color: '#334556'
};

const ContactPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <p style={linkStyles}>
          Kapcsolat:
          <br />
          <a href='mailto:eszter.csaba@gmail.com'>Email: eszter.csaba@gmail.com</a>
          <br />
          <a href='https://www.facebook.com/CsabaEszterPszichologus'>Facebook</a>
          <br />
          <a href='https://www.instagram.com/csaba_eszter_pszichologus'>Instagramm</a>
          <br />
          Konzultációk helyszíne: Budapest 7. kerület, 11. kerület; online: google meet 💻
        </p>
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', maxWidth: '80vw' }}
        >
          <iframe
            title='7ker'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10781.364993681946!2d19.06462123554813!3d47.50274511273644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc64571d2f19%3A0x500c4290c1ed5a0!2sBudapest%2C%20District%20VII.%2C%20Hungary!5e0!3m2!1sen!2sde!4v1649069410539!5m2!1sen!2sde'
            width='600'
            height='450'
            style={{ border: '1px solid grey', marginRight: 30 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />

          <iframe
            title='11ker'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43161.8651686079!2d18.98370543207737!3d47.458413151868236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddec6463400b%3A0x500c4290c1ed5e0!2sBudapest%2C%20District%20XI.%2C%20Hungary!5e0!3m2!1sen!2sde!4v1649069485395!5m2!1sen!2sde'
            width='600'
            height='450'
            style={{ border: '1px solid grey' }}
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
