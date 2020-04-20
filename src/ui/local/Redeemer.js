import * as React from 'react'

import { useParams } from 'react-router-dom'

import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import QUERY from './graphql/oAuth2Login.graphql'

//export default () => <h2>Wks</h2>

export default ({ props }) => {
  console.log('redeemer')
  const { code } = useParams()

  const [doLogin, { data, loading, error }] = useMutation(
    gql(QUERY),
    {
      variables:{
        code
      }
    }
  )
  
  doLogin()
  
  console.log(8787897, data, loading, error)


  return (
    <>
      <h1>
      We are redeeming a code to login
      </h1>
      <pre>{ code }</pre>
    </>

  )
}
