module.exports = {
  siteMetadata: {
    title: ``,
    author: `Emma Wedekind, Kelly Vaughn, Ali Spittel`,
    description: `Listen to Kelly Vaughn, Ali Spittel, and Emma Wedekind, three women in tech, discuss topics such as how to get your first job in tech and how to manage side projects.`,
    siteUrl: `https://ladybug.dev`,
    social: {
      twitter: `ladybugpodcast`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: "gatsby-plugin-draft",
      options: {
        /**
         * be added field name
         * Default is 'draft'
         **/
        fieldName: "draft",
        /**
         * moment-timezone
         * Default is 'UTC'
         **/
        timezone: "America/New_York",
        /**
         * publish draft posts
         * Default is 'false'
         **/
        publishDraft: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Laybug Podcast`,
        short_name: `LadybugPodcast`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-5JVF4M8",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
