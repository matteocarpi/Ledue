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
          'gatsby-remark-normalize-paths',
          {
            resolve: 'gatsby-remark-images-anywhere',
            options: {
              staticDir: 'content',
              createMarkup: ({
                src,
                srcSet,
                sizes,
                aspectRatio,
                alt,
                base64,
                presentationWidth,
              }) =>
                `<custom-image src="${src}" srcset="${srcSet}" sizes="${sizes}" aspectratio="${aspectRatio}" alt="${alt}" base64="${base64}" presentationwidth="${presentationWidth}"></custom-image>`,
              sharpMethod: 'fluid',
              // Additional sharp image arguments: https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
              // maxWidth: 650,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
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
        fonts: ['Quicksand:300,400,500,700'],
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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rules: {
          include: `${__dirname}/content/svg`,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
        duration: 1000,
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: '31044158025',
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://leduefactory.us7.list-manage.com/subscribe/post?u=1ffadef495fecbc67a8818ffc&amp;id=89d3259e8b',
        timeout: 3500,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
