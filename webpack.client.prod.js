const path = require('path')
const webpack = require('webpack')

function pascalToSnake(s){
  return s
    .replace(/(?:^|\.?)([A-Z])/g, (x,y) => '_' + y.toLowerCase())
    //.replace(/(?:^|\?)([A-Z])/g, (x,y) => '_' + y.toLowerCase())
    .replace(/^_/, '')
}


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
      'react'           :path.resolve('./node_modules/react'),//NOT in use, for preact
      'react-dom'       :path.resolve('./node_modules/react-dom'),
      'react-intl'      :path.resolve('./node_modules/react-intl'),
      'react-router-dom':path.resolve('./node_modules/react-router-dom')
      //'@apollo/react-hooks':path.resolve('./node_modules/@apollo/react-hooks'),
    }
  },

  entry:[
    './src/client.js'
  ],

  output:{
    path         :path.resolve(__dirname, 'public/'),
    publicPath   :'/',
    //filename     :( '[name].js?[chunkhash:5]' ),
    filename     :( '[name].js?[hash:8]' ),
    libraryTarget:'umd'
  },

  /* devtool: 'cheap-module-eval-source-map',
     watch:true, */
  devServer:{
    contentBase:[
      path.resolve(__dirname, './public'),
      path.resolve(__dirname, './src/assets/fonts'),
      path.resolve(__dirname, './src/assets/images'),
      path.resolve(__dirname, './src/assets/favicon'),
      path.resolve(__dirname, './node_modules/@fwrlines/ds/src/assets/fonts'),
      path.resolve(__dirname, './node_modules/@fwrlines/ds/src/assets/images')
    ],
    watchContentBase  :false,
    historyApiFallback:true,
    port              :3344,
    host              :'0.0.0.0',
    hot               :true,
    liveReload        :false,
    clientLogLevel    :'debug',
    disableHostCheck  :true,//rdp
    watchOptions      :{
      ignored:[
        path.resolve(__dirname, 'src', 'translations')
        //path.resolve(__dirname, 'node_modules')
      ]
      //aggregateTimeout:3000
    }
  },

  stats:{
    //maxModules:Infinity,
    //exclude   :undefined
    entrypoints:false,
    children   :false
  },

  mode:'production',

  optimization:{
    nodeEnv  :'production',
    minimize :true,
    minimizer:[
      new TerserPlugin({})
    ],
    runtimeChunk:'single',

    splitChunks:{
      chunks            :'all',
      maxInitialRequests:Infinity,
      minSize           :0,
      cacheGroups       :{
        fwrlines:{
          chunks  :'all',
          priority:100,
          test    :/fwrlines\/ds\/dist[\\/]/,
          name(module) {
            //const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            const nameSplit = module.context.split('/')
            //const componentName = pascalToSnake(nameSplit.slice(-1)[0])
            const distIndex = nameSplit.indexOf('dist')
            if ((nameSplit.length - 1) >= (distIndex +3)) {
              const family = nameSplit[distIndex + 2]
              const moduleName = nameSplit[distIndex +3 ]
              return ['ds', family, pascalToSnake(moduleName)].join('.')
            }
            return 'ds.main'
          }
        },
        

        vendor:{
          //priority:-10,
          test:/[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`
          }
        }
      }
    }
  },

  plugins:[

    new HtmlWebpackPlugin({
      template:'./src/assets/html/index.prod.html'
    }),

    new CopyPlugin([
      { from: './src/assets/fonts', to: './public' },
      { from: './src/assets/images', to: './public' },
      { from: './src/assets/favicon', to: './public' }, //https://www.favicon-generator.org/
      { from: './node_modules/@fwrlines/ds/src/assets/fonts', to: './public' },
      { from: './node_modules/@fwrlines/ds/src/assets/images', to: './public' }
    ]),

	 new MiniCssExtractPlugin({
      //filename:'yabbi.css'
      chunkFilename:'[name].css?[contenthash:5]'
    }),

    /*new LodashModuleReplacementPlugin({
      shorthands: true,
      currying: true,
      placeholders:true
		}),*/

    new BundleAnalyzerPlugin({
      analyzerMode  :'static',
      reportFilename:( 'report.html' ),
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


