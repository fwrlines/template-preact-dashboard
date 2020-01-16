const path = require('path')
const webpack = require('webpack')


/* PLUGINS */


// A. SECURITY
//const Dotenv = require('dotenv-webpack') //Deprecated => replaced by babel plugin //Deprecated => replaced by babel plugin

// B.DISPLAY
const HtmlWebpackPlugin = require('html-webpack-plugin')

// C. PREPARE AND LIST FILES
//const ReactLoadableSSRAddon = require('react-loadable-ssr-addon')
//const LoadablePlugin = require('@loadable/webpack-plugin')
//const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve:{
    alias:{
      'react'               :'preact/compat',
      'react-dom/test-utils':'preact/test-utils',
      'react-dom'           :'preact/compat'
      // Must be below test-utils
    }
  },

  entry:[
    './src/client.js'
  ],
  output:{
    path         :path.resolve(__dirname, 'public/'),
    publicPath   :'/',
    filename     :'[id].js?[hash:8]',
    libraryTarget:'umd'
  },
  devtool  :'cheap-module-eval-source-map',
  devServer:{
    contentBase:[
      path.resolve(__dirname, './public'),
      path.resolve(__dirname, './src/assets/fonts'),
      path.resolve(__dirname, './src/assets/images')
    ],
    watchContentBase  :true,
    historyApiFallback:true,
    port              :3333,
    host              :'0.0.0.0',
    hot               :true,
    liveReload        :false,
    clientLogLevel    :'debug',
    disableHostCheck  :true //rdp
  },
  optimization:{
    usedExports:true
  },

  mode   :'development',
  plugins:[

    new HtmlWebpackPlugin({
      template:'./src/assets/html/index.dev.html'
    }),

    /*
	  new ReactLoadableSSRAddon({
      filename: 'assets-manifest.json'
    }),

    new LoadablePlugin(),
    */

    new webpack.HotModuleReplacementPlugin()

  ],
  module:{
    rules:[
      {
        test   :/\.(js|jsx)$/,
        exclude:/node_modules/,
        use    :{
          loader :'babel-loader',
          options:{
            presets:[
              [ '@babel/preset-env', { modules: false }]
            ]
          }
        }
      },
      {
        test:/\.(scss|css)$/,
        use :[
          {
            loader:'style-loader'
          }, {
            loader:'css-loader'
          }, {
            loader:'sass-loader'
          }
        ]
      }

    ]

  }
}


