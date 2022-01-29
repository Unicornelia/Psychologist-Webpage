import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

    return (
        <>
            <Header siteTitle='Csaba Eszter pszichológus' />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    // padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main>{children}</main>
                <footer
                    style={{
                        marginTop: `2rem`,
                    }}
                >
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.com">Gatsby</a> by <a target={'_blank'} href='https://github.com/Unicornelia'>Unicornelia</a>
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
