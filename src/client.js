import { h, render, hydrate } from 'preact'

import { ApolloProvider } from '@apollo/react-hooks'
import { getClient } from 'graphql/getClient'
import { BrowserRouter } from 'react-router-dom'

import { loadableReady } from '@loadable/component'

import App from 'site/App'
//import Clock from 'components/Clock'


import '@fwrlines/alphabet-scss/main.scss'

const client = getClient(process.env.GRAPHQL_ENDPOINT)

const rootElement = document.getElementById('main')

const jsx = (
  <ApolloProvider
    client={client}
  >
    <BrowserRouter>
	    <App />
    </BrowserRouter>
  </ApolloProvider>
)

/* When main pagedelivered by SSR, not sure why, js is loaded twice for Loadable components
  console.log(rootElement.hasChildNodes(), rootElement.innerHTML) */

loadableReady(() => {
  if (rootElement.hasChildNodes()) {
    hydrate(
      jsx,
      rootElement)
  }
  else {
    render(
      jsx,
      rootElement)
  }


})

if (module.hot) {
  module.hot.accept()
  require('preact/debug')
}
