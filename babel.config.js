module.exports = function (api) {
  //api.cache(false)

  let isProd = api.cache(() => process.env.NODE_ENV === 'production')

  const presets = [
    [
      '@babel/preset-env',
      //modules:'commonjs',
      {
        targets:{
          esmodules:true
        },
        debug:true
      }
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
    [
      'react-intl',
      {
        messagesDir:'./src/translations/messages'
      }
    ],
    [
      'react-intl-extractor',
      {
        extractedFile:'./src/translations/aggregated.json',
        langFiles    :[{
          path              :'./src/translations/it.json',
          cleanUpNewMessages:true
        }, {
          path              :'./src/translations/en.json',
          cleanUpNewMessages:false
        }]
      }
    ],
    '@loadable/babel-plugin'
  ]

  isProd && plugins.push(
    'transform-react-remove-prop-types',
  )

  //['add-module-exports']


  return {
    presets,
    plugins
  }
}
