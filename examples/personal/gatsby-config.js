module.exports = {
  siteMetadata: {
    siteTitle: `Jacob Bolda`,
    siteDescription: `Structural Engineer with a knack for creative solutions using code and ingenuity.`,
    siteAuthor: `Jacob Bolda`,
    siteContact: "https://twitter.com/jacobbolda",
    contactLinks: [
      {
        url: "mailto:me@jacobbolda.com",
        text: "me@jacobbolda.com",
        icon: ["far", "envelope"]
      },
      {
        url: "https://twitter.com/jacobbolda",
        text: "@jacobbolda",
        icon: ["fab", "twitter"]
      },
      {
        url: "https://linkedin.com/in/bolda",
        text: "linkedin.com/in/bolda",
        icon: ["fab", "linkedin"]
      },
      {
        url: "https://github.com/jbolda",
        text: "github.com/jbolda",
        icon: ["fab", "github"]
      },
      {
        url: "https://keybase.io/jbolda",
        text: "keybase.io/jbolda",
        icon: ["fab", "keybase"]
      },
      {
        url: "https://angel.co/jacobbolda",
        text: "angel.co/jacobbolda",
        icon: ["fab", "angellist"]
      },
      {
        url: "http://www.jbolda.com/photo",
        text: "My Photographs",
        icon: ["fas", "camera"]
      }
    ],
    navLinks: [
      { url: "/articles/", text: "Articles" },
      { url: "/recipes/", text: "Our Recipes" }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepage`,
        path: `${__dirname}/src/homepage/`
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appyi6XMs9Kowv84G`,
            tableName: `Recipes`,
            tableView: `List`,
            queryName: `Recipes`,
            mapping: {
              images: "fileNode",
              ingredients: "text/markdown",
              directions: "text/markdown"
            },
            separateMapTypes: true
          }
        ]
      }
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `@jbolda/gatsby-theme-homepage`,
      options: { showArticlesOnHomepage: true }
    },
    {
      resolve: `@jbolda/gatsby-theme-articles`,
      options: { contentPath: "articles" }
    },
    {
      resolve: `gatsby-theme-recipes`,
      options: {
        siteUrl: "https://jbolda-gatsby-theme-personal.netlify.com/",
        sources: ["Airtable"]
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`
  ]
};
