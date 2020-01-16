module.exports = function (api) {
  api.cache(false)

  const presets = [
    [
      '@babel/preset-env',
      {
        //modules:'commonjs',
        targets:{
          node:'12'
        }
        //debug:true
      }
    ],
    //'@babel/preset-react'
    'preact'
  ]
  const plugins = [
    'inline-dotenv',
    [
      'module-resolver', {
        root :['./src'],
        alias:{
          'react'               :'preact/compat',
          'react-dom/test-utils':'preact/test-utils',
          'react-dom'           :'preact/compat'
          // Must be below test-utils
        }
      }
    ],
    '@babel/plugin-proposal-class-properties',
    ['babel-plugin-inline-import',
      {
        extensions:[
          '.html',
          '.xml',
          '.graphql'
        ]
      }
    ],
    ['@babel/plugin-transform-react-jsx', {
      pragma          :'h', // default pragma is React.createElement
      pragmaFrag      :'Fragment', // default is React.Fragment
      throwIfNamespace:false // defaults to true
    }],
    '@loadable/babel-plugin'
  ]


  //['add-module-exports']


  return {
    presets,
    plugins
  }
}
