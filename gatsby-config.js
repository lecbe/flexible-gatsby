module.exports = {
  siteMetadata: {
   
        title: `A better esport world`,
    description: `I was a professional castor. Almost the best player in Hearthstone. Sports analyst, mostly football and hockey. 
Now, the broadly defined esports industry expert
Current cooperation with Nissan and the / <a href="https://esporttalk.org">Esportal</a> Forum to support smaller and medium sized esports organisations
`,
    author: `Sami Laasanen`,
    siteUrl: `https://www.ledner.info/`,
    
    
    social: {
      twitter: false,
      facebook: false,
      github: false,
      linkedin: false,
      email: `esportleague@protonmail.com`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 970,
            },
          },
          `gatsby-remark-prismjs`,
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
        name: `flexible-gatsby-starter`,
        short_name: `flexible-gatsby`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
//         icon: `./static/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
