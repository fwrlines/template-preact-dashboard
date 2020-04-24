/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
import { useEffect, useContext } from 'react'

//import PropTypes from 'prop-types'

import { useParams, useHistory } from 'react-router-dom'

import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import QUERY from './graphql/oAuth2Login.graphql'

import { ProfileContext } from '@fwrlines/ds'

/**
 * Use `Redeemer` to exchange an authorization code for a login token
 *
 */
const Redeemer = (props) => {
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
  
  useEffect(() => {
    if (!called && code) doLogin()
  },
  [called, code, doLogin]
  )

  const {
    //sessionCookie,
    setSessionCookie
  } = useContext(ProfileContext)

  useEffect(() => {
    if (loginInfo) {
      setSessionCookie(
        loginInfo.token,
        {
          //path  :'/', //make it accessible on all pages //Deprecated, now set up at the provider level
          //expires:
          maxAge:loginInfo.maxAge,
          //domain: //defaults on current domain
          secure:!(process.env.LOCAL === 'true')
          //sameSite:'strict'
        }
      )
      history.push('/')
    }
  },
  [history, setSessionCookie, loginInfo]
  )


  return (
    <>
      <h1>
      We are redeeming a code to login
      </h1>
      <pre>{ code }</pre>
    </>

  )
}

/*
Redeemer.propTypes = {
}
*/

/*
Redeemer.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

export default Redeemer
