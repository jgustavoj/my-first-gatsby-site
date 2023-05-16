/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Demo`,
    siteUrl: `https://www.yourdomain.somewhere`,
    description: `Gatsby Site Metadata Demo `
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp",  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  }, ]
  
}
