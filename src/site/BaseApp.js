import * as React from 'react'

import { ApolloProvider } from '@apollo/client'
import { getClient } from 'graphql/getClient'
import { BrowserRouter } from 'react-router-dom'

import GQL_QUERY_ME from 'ui/local/graphql/me.graphql'

import { SiteContextProvider, ProfileContextProvider } from '@fwrlines/ds'

import App from './App'

const client = getClient(process.env.GRAPHQL_ENDPOINT)

const profileContextProps = {
  cookieName:process.env.SESSION_COOKIE_NAME, //defaults to session insteqd
  //cookiePath:'/' //Defaults to '/''
  loginPath :'/login',
  logoutPath:'/logout',
  GQL_QUERY_ME
}

const siteContextConfig={
  SITE_NAME     :'Internet 1999',
  SITE_CANONICAL:'https://internet1999.org',
  FACEBOOK      :'facebook_id',
  INSTAGRAM     :'@superaccount'
}

export default (
  <ApolloProvider
    client={client}
  >
    <BrowserRouter>
      <SiteContextProvider config={siteContextConfig}>
        <ProfileContextProvider
          {...profileContextProps}
        >
	        <App />
        </ProfileContextProvider>
      </SiteContextProvider>
    </BrowserRouter>
  </ApolloProvider>
)
