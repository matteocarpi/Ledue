// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: 'LEDUE',
    description: 'Artisanal Handbags',
    author: '@matteocarpi',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          'gatsby-remark-normalize-paths',
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1024,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
              plugins: ['gatsby-remark-images-anywhere'],
            },
          },
          '@forestryio/gatsby-remark-normalize-paths',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Josefin Sans:200,400,700', 'Josefin Slab:400,600,700'],
        display: 'swap',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        // eslint-disable-next-line no-undef
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        // eslint-disable-next-line no-undef
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        // eslint-disable-next-line no-undef
        path: `${__dirname}/content`,
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'posts',
    //     // eslint-disable-next-line no-undef
    //     path: `${__dirname}/content/posts`,
    //   },
    // },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sass',
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       'gatsby-remark-relative-images',
    //       'gatsby-remark-normalize-paths',
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           maxWidth: 1024,
    //           linkImagesToOriginal: false,
    //           backgroundColor: 'transparent',
    //           plugins: ['gatsby-remark-images-anywhere'],
    //         },
    //       },
    //       '@forestryio/gatsby-remark-normalize-paths',
    //       'gatsby-remark-copy-linked-files',
    //     ],
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-google-fonts',
    //   options: {
    //     fonts: [
    //       'Roboto',
    //     ],
    //     display: 'swap',
    //   },
    // },
    // 'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     // eslint-disable-next-line no-undef
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'content',
    //     // eslint-disable-next-line no-undef
    //     path: `${__dirname}/content`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'uploads',
    //     // eslint-disable-next-line no-undef
    //     path: `${__dirname}/content/images`,
    //   },
    // },
    // // {
    // //   resolve: 'gatsby-source-filesystem',
    // //   options: {
    // //     name: 'posts',
    // //     // eslint-disable-next-line no-undef
    // //     path: `${__dirname}/content/posts`,
    // //   },
    // // },
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ledue',
        short_name: 'ledue',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#4A3030',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
