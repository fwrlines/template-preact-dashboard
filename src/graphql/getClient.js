import {
  ApolloClient,
  ApolloLink,
  createHttpLink
} from '@apollo/client'

import { RetryLink } from '@apollo/link-retry'
import { setContext } from '@apollo/link-context'
import { InMemoryCache } from '@apollo/client/cache'

import { Cookies } from 'react-cookie'

function getLink(endpoint) {
  const httpLink = createHttpLink({ uri: endpoint })
  const retryLink = new RetryLink({
    delay:{
      initial:10000,
      max    :2000,
      jitter :true
    },
    attempts:{
      max    :2,
      retryIf:(error, _operation) => !!error
    }
  })

  const authLink = setContext((_, { headers }) => {
    const cookies = new Cookies()
    //console.log('🔑', process.env.COOKIE_NAME)
    const token = cookies.get(process.env.SESSION_COOKIE_NAME)
    //console.log(987987, headers, token, cookies)
    if (token){
      return {
        headers:{
          ...headers,
          authorization:token ? `Bearer ${token}` : ''
        }
      }
    }
    return headers
   
  })

  const link = ApolloLink.from([
    retryLink,
    authLink,
    httpLink
  ])
  return link
}

function getClient(endpoint){
  const Link = getLink(endpoint)
  const c = new ApolloClient({
    link :Link,
    cache:new InMemoryCache().restore(window.__APOLLO_STATE__)
  })
  return c
}

export { getClient }


