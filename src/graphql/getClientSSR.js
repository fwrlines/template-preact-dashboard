
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { RetryLink } from 'apollo-link-retry'
//import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'

function getLink(endpoint) {
  const httpLink = createHttpLink({ uri:endpoint, fetch: fetch })
  const retryLink = new RetryLink({
    delay: {
      initial: 10000,
      max: 2000,
      jitter: true
    },
    attempts: {
      max: 2,
      retryIf: (error, _operation) => !!error
    }
  })
  const link = ApolloLink.from([
    retryLink,
    httpLink,
  ])
  return link
}

function getClient(endpoint){
  const Link = getLink(endpoint)
  const c = new ApolloClient({
    link:Link,
    cache:new InMemoryCache(),
    ssrForceFetchDelay: 900,
    ssrMode: true
  })
  return c
}

export { getClient }


