// const { name } = require('./package.json');
const config = require("./data/SiteConfig");

// const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  // pathPrefix: process.env.CI ? `/${name}` : `/`,
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    author: `Samantha Ming`,
    title: `Events Podcast`,
    email: `eventspodcast@gmail.com`,
    domain: `EventsPodcast.ca`,
    site: config,
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/${config.blogPostDir}`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `packages`,
        path: `${__dirname}/content/event-posts`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}
