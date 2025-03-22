const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.csabaeszter.hu',
    title: 'csabaeszter'
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      },
      __key: 'images'
    }
  ]
};
