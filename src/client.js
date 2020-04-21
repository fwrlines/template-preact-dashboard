import * as React from 'react'
import { render } from 'react-dom'

import { ApolloProvider } from '@apollo/client'
import { getClient } from 'graphql/getClient'
import { BrowserRouter } from 'react-router-dom'

import { ProfileContextProvider } from '@fwrlines/ds'

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

render(
  jsx,
  rootElement)

if (module.hot) {
  module.hot.accept()
}
