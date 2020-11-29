module.exports = {
  plugins: [
    'gatsby-theme-material-ui',
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'fab',
        id: 'fab',        
      },
    },
  ],
}
