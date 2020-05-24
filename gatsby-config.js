'use strict';
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const siteConfig = require('./config.js');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zenith Roofing Services Referral Rewards`,
        short_name: `Zenith Roofing Referral Rewards`,
        start_url: `/`,
        background_color: `#0d4879`,
        theme_color: `#ff9900`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
  ],
};
