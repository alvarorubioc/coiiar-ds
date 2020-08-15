module.exports = {
  siteMetadata: {
    title: `COIIAR Design System`,
    name: `COIIAR`,
    siteUrl: `https://gatsby-theme-document.netlify.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/alvarorubioc/coiiar-ds`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/COIIAR`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/branding", "/guía-de-estilos", "/componentes", "/patrones", "/downloads"],
      ignoreIndex: true
    }
  },
 
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-theme-document`
    },
    
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Exo\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    
  ]
  
};
