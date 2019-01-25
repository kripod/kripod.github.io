module.exports = {
  siteMetadata: {
    title: "Kristóf Poduszló's blog",
    description:
      'Paving my way through the adventurous world of modern web development.',
    language: 'en',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Kristóf Poduszló's blog",
        short_name: 'starter',
        start_url: '/',
        // TODO: background_color: '#663399',
        // TODO: theme_color: '#663399',
        display: 'minimal-ui',
        // TODO: icon: 'src/assets/favicon.png',
        legacy: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
