import path from 'path'

import moduleAlias from 'module-alias'

moduleAlias.addAliases({
  'react'             :'preact/compat',
  'react-dom'         :'preact',
  'create-react-class':path.resolve(__dirname, './create-preact-class')
})
