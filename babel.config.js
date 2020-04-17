module.exports = function (api) {
  api.cache(false)

  const presets = [
    [
      '@babel/preset-env',
      //modules:'commonjs',
      {
        targets:{
          esmodules:true
        }
      }
      //debug:true
    ],
    '@babel/preset-react'
  ]
  const plugins = [
    'inline-dotenv',
    [
      'module-resolver', {
        root:['./src']
      }
    ],
    '@babel/plugin-proposal-class-properties',
    ['babel-plugin-inline-import',
      {
        extensions:[
          '.html',
          '.xml',
          '.graphql',
          '.gql'
        ]
      }
    ],
    'transform-react-remove-prop-types',
    '@loadable/babel-plugin'
  ]


  //['add-module-exports']


  return {
    presets,
    plugins
  }
}
