module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":970},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"flexible-gatsby-starter","short_name":"flexible-gatsby","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
