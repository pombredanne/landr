const webpack = require('webpack')
const path = require('path')
const LandrRootDir = path.resolve(__dirname, '../../../')
const StatsPlugin = require('stats-webpack-plugin')

const getPlugins = (config, stage) => {
  const plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: config.dev
          ? JSON.stringify('development')
          : JSON.stringify('production')
      },
      __PATH_PREFIX__: JSON.stringify(config.pathPrefix)
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]

  if (stage === 'client') {
    plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common', // Specify the common bundle's name.
        minChunks: function(module, count) {
          return module.context && module.context.indexOf('node_modules') >= 0
        }
      })
    )
  }

  if (!config.dev && stage === 'client') {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,
          beautify: false
        }
      })
    )
    plugins.push(new StatsPlugin('stats.json'))
  }

  return plugins
}

const getOutput = (config, stage) => {
  switch (stage) {
    case 'server':
      return {
        filename: 'static.js',
        path: config.distDir,
        publicPath: config.dev
          ? 'http://localhost:3000/'
          : config.pathPrefix ? `${config.pathPrefix}/` : '/',
        libraryTarget: 'commonjs2'
      }
    case 'client':
      return {
        filename: config.dev ? '[name].js' : '[name]-[hash].js',
        publicPath: config.dev
          ? 'http://localhost:3000/'
          : config.pathPrefix ? `${config.pathPrefix}/` : '/',
        path: config.distDir
      }
  }
}

module.exports = (config, stage) => {
  return {
    target: stage === 'server' ? 'node' : 'web',
    devtool: 'source-map',
    entry: `${__dirname}/entry.js`,
    output: getOutput(config, stage),
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: [
              ["env", {
                "targets": {
                  "browsers": [
                    "chrome >= 52",
                    "firefox >= 47",
                    "ie >= 9",
                    "edge >= 13",
                    "safari >= 9"
                  ]
                }
              }],
              'babel-preset-react',
              'babel-preset-stage-0'
            ],
            plugins: ['babel-plugin-styled-components'].map(require.resolve)
          }
        },
        {
          test: /\.(png|svg|jpg|gif|ico)$/,
          loader: 'file-loader',
          options: {
            name: config.dev ? '[name].[ext]' : '[name].[hash].[ext]'
          }
        }
      ]
    },
    resolve: {
      alias: {
        moment: 'moment/moment.js',
        react: 'preact-compat',
        'react-dom': 'preact-compat',
        pages: `${LandrRootDir}/dist/themes/${config.theme}/pages`,
        components: `${LandrRootDir}/dist/themes/${config.theme}/components`,
        theme: `${LandrRootDir}/dist/themes/${config.theme}/theme`,
        static: `${config.dir}/www/static`,
        images: `${LandrRootDir}/dist/core/utils/images`
      },
      modules: [`${LandrRootDir}/node_modules`, `${config.dir}/node_modules`, 'node_modules']
    },
    resolveLoader: {
      modules: [`${LandrRootDir}/node_modules`, `${config.dir}/node_modules`, 'node_modules']
    },
    plugins: getPlugins(config, stage)
  }
}
