import * as React from "react"
import background from '../images/abstract.jpg'
import Layout from "../components/layout";
import {Link} from "gatsby";

const pageStyles = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
backgroundSize: 'cover',
  color: "#232129",
  padding: 40,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
    height: '100vh',
    margin: 0
}

const paragraphStyles = {
  marginBottom: 48,
}

const IndexPage = () => {
  return (
      <Layout>
    <main style={pageStyles}>
        <p style={paragraphStyles}>
            Tartalom feltöltése folyamatban...
        </p>
        <Link to='https://csabaeszter.wordpress.com/'>Blog</Link>
        <p>Kapcsolat: eszter.csaba@gmail.com</p>
    </main>
      </Layout>
  )
}

export default IndexPage
