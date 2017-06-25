
  // Don't touch: this is an autogenerated file from ./config/gatsby-config.js
  module.exports = {
    plugins: [
      {
        resolve: 'gatsby-source-github-repo',
        options: {
          owner: 'craig-mulligan',
          repo: 'etcher',
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'readme',
          path: '/Users/gaudi/work/etcher/README.md',
        },
      },
      'gatsby-plugin-postcss-sass',
      {
        resolve: 'landr-plugin-readme',
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'changelog',
          path: '/Users/gaudi/work/etcher/CHANGELOG.md',
        },
      },
      {
        resolve: 'landr-plugin-changelog',
        options: {
          headerDepth: 2
        },
      },
      {
        resolve: 'landr-components',
        options: {
          userDir: '/Users/gaudi/work/etcher'
        },
      },
    ],
    pathPrefix: '/etcher'
  }
  