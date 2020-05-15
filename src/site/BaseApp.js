import * as React from 'react'

import { ApolloProvider } from '@apollo/client'
import { getClient } from 'graphql/getClient'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

import GQL_QUERY_ME from './dashboard/graphql/me.graphql'

import { SiteContextProvider, SessionContextProvider } from '@fwrlines/ds'

import localizedMessages from 'translations/it.json'

import App from './App'
import * as URLS from './urls'

const client = getClient(process.env.GRAPHQL_ENDPOINT)

const profileContextProps = {
  cookieName       :process.env.SESSION_COOKIE_NAME, //defaults to session insteqd
  //cookiePath:'/' //Defaults to '/''
  loginPath        :URLS.AUTH.LOGIN,
  logoutPath       :URLS.AUTH.LOGOUT,
  dashboardHomePath:URLS.DASHBOARD.PROFILE,
  GQL_QUERY_ME
}

const siteContextConfig={
  SITE_NAME     :'Internet 1999',
  SITE_CANONICAL:'https://internet1999.org',
  SUPPORT_EMAIL :'support@support.com',
  FACEBOOK      :'facebook_id',
  INSTAGRAM     :'@superaccount'
}


export default (
  <ApolloProvider
    client={client}
  >
    <BrowserRouter>
      <SiteContextProvider
        config={siteContextConfig}
        initialTheme="system"
      >
        <IntlProvider
          locale={'it'}
          messages={localizedMessages}
        >
          <SessionContextProvider
            {...profileContextProps}
          >
	        <App />
          </SessionContextProvider>
        </IntlProvider>
      </SiteContextProvider>
    </BrowserRouter>
  </ApolloProvider>
)

