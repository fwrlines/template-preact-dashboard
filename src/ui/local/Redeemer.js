import * as React from 'react'
import { useEffect, useContext } from 'react'

import { useParams, useHistory } from 'react-router-dom'

import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import QUERY from './graphql/oAuth2Login.graphql'

import { ProfileContext } from '@fwrlines/ds'

//export default () => <h2>Wks</h2>

export default ({ props }) => {
  //console.log('redeemer')
  const { code } = useParams()

  const history = useHistory()

  const [doLogin, { data:{ oAuth2Login:loginInfo }={}, loading, error, called }] = useMutation(
    gql(QUERY),
    {
      variables:{
        code
      }
    }
  )
  
  //console.log(8787897, loading, error, loginInfo)

  useEffect(() => {
    if (!called && code) doLogin()
  },
  [called, code]
  )

  const {
    sessionCookie,
    setSessionCookie
  } = useContext(ProfileContext)

  useEffect(() => {
    if (loginInfo) {
      setSessionCookie(
        loginInfo.token,
        {
          path  :'/', //make it accessible on all pages
          //expires:
          maxAge:loginInfo.maxAge,
          //domain: //defaults on current domain
          secure:!(process.env.LOCAL === 'true')
          //sameSite:'strict'

        }

      )
      history.push('/')
      console.log('cookie set')
      
    }
  },
  [loginInfo]
  )
  
  //console.log('in this render..the cookie', sessionCookie)


  return (
    <>
      <h1>
      We are redeeming a code to login
      </h1>
      <pre>{ code }</pre>
    </>

  )
}
