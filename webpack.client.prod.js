const path = require('path')
const webpack = require('webpack')

/* PLUGINS */


// A. ANALYSIS
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// B. COMPRESSION
const TerserPlugin = require('terser-webpack-plugin')
//const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

// C. PREPARE AND LIST FILES
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// D. SECURITY
//const Dotenv = require('dotenv-webpack')

/* E. EXTRA
   const NullPlugin = require('webpack-null-plugin') */
const HtmlWebpackPlugin = require('html-webpack-plugin')
// https://momentjs.com/docs/

module.exports = {
  resolve:{
    // For npm link prototyping
    alias:{
      //'react'              :path.resolve('./node_modules/react'), //NOT in use, for preact
      //'@apollo/react-hooks':path.resolve('./node_modules/@apollo/react-hooks')
    }
  },

  entry:[
    './src/client.js'
  ],

  output:{
    path         :path.resolve(__dirname, 'public/'),
    publicPath   :'/',
    filename     :( process.env.COMPILE ? '[id].js?[hash:8]' : 'main.js'),
    libraryTarget:'umd'
  },

  /* devtool: 'cheap-module-eval-source-map',
     watch:true, */
  devServer:{
    contentBase:[
      path.resolve(__dirname, './public'),
      path.resolve(__dirname, './src/assets/fonts'),
      path.resolve(__dirname, './src/assets/images'),
      path.resolve(__dirname, './node_modules/@fwrlines/ds/public')
    ],
    watchContentBase  :true,
    historyApiFallback:true,
    port              :3344,
    host              :'0.0.0.0',
    hot               :true,
    liveReload        :false,
    clientLogLevel    :'debug',
    disableHostCheck  :true //rdp
  },

  mode:'production',

  optimization:{
    nodeEnv  :'production',
    minimize :true,
    minimizer:[
      new TerserPlugin({})
    ]
  },

  plugins:[

    new HtmlWebpackPlugin({
      template:'./src/assets/html/index.prod.html'
    }),

    new CopyPlugin([
      { from: './src/assets/fonts', to: './public' },
      { from: './src/assets/images', to: './public' },
      { from: './node_modules/@fwrlines/ds/public', to: './public' }
    ]),

	 new MiniCssExtractPlugin({
      filename     :'[contenthash:5].css',
      chunkFilename:'[contenthash:5].css'
    }),

    /*new LodashModuleReplacementPlugin({
      shorthands: true,
      currying: true,
      placeholders:true
		}),*/

    new BundleAnalyzerPlugin({
      analyzerMode  :'static',
      reportFilename:(process.env.COMPILE ? 'report.html' : 'report.dev.html'),
      openAnalyzer  :false
    }),

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
            loader:MiniCssExtractPlugin.loader
          }, {
            loader:'css-loader'
          }, {
            loader:'postcss-loader'
          }, {
            loader:'sass-loader'
          }
        ]
      }

    ]

  }
  //  watch: true,
}


