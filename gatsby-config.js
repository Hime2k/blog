module.exports = {
  siteMetadata: {
    title: `rupa_blog`,
    name: `Rupa Ghimire`,
    siteUrl: `https://hime2k.me`,
    description: `not too much fun`,
    hero: {
      heading: `Annyeoug.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Hime_2k`,
      },
      {
        name: `github`,
        url: `https://github.com/hime2k`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/hime2k`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/hime2k`,
      },
      
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
