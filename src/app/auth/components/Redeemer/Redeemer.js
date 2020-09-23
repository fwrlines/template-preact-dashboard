/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
import { useState, useEffect, useContext } from 'react'

//import PropTypes from 'prop-types'

import { useParams, useHistory, Redirect } from 'react-router-dom'

import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import QUERY from './graphql/oAuth2Login.graphql'

import { Heading, InlineLoader, SessionContext } from '@fwrlines/ds'

import { RedirectAfterLoginUrl } from '../../urls'

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

  const [isCookieReady, setIsCookieReady] = useState()

  const {
    //sessionCookie,
    isConnected,
    currentUserData,
    setSessionCookie,
    loadCurrentUser
  } = useContext(SessionContext)

  useEffect(() => {
    if (loginInfo) {
      setSessionCookie(
        loginInfo.access_token,
        {
          //path  :'/', //make it accessible on all pages //Deprecated, now set up at the provider level
          //expires:
          maxAge:loginInfo.expires_in,
          //domain: //defaults on current domain
          secure:!(process.env.LOCAL === 'true')
          //sameSite:'strict'
        }
      )
      setIsCookieReady(true)
    }
  },
  [history, setSessionCookie, loginInfo]
  )

  useEffect(() => {
    if(isCookieReady) {
      loadCurrentUser()
    }
  }, [isCookieReady])

  useEffect(() => {
    if(isConnected) {
      history.push(RedirectAfterLoginUrl)

    }
    
  }, [isConnected])

  return (
    <div
      className="uc u1"
      style={{
        height        :'100%',
        display       :'flex',
        flexDirection :'column',
        justifyContent:'center',
        alignItems    :'center'
      }}
    >
      <Heading
        headingAs="h1"
        heading="Logging in"
        subtitle={`${code}`}
      />
      <div className="pv-u">
        
        <InlineLoader
          type="circle"
          height="3em"
          loaderClassName="x-link"
        />
      </div>
      <div>
        <p className="x-subtitle c-x">
          Will redirect to
          {' '}
          <code className="c-x">{ RedirectAfterLoginUrl }</code>
        </p>
      </div>
    </div>

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
