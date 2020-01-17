import { h, Component } from 'preact'

import QUERY from './graphql/oAuth2Google.graphql'

import {
  oAuth2LoginButton as LoginButton
} from '@fwrlines/ds'

export default ({ props }) => (
  <LoginButton
    label="Login with google"
    query={QUERY}
    dataKey="oAuth2Google"
    {...props}
  />
)
