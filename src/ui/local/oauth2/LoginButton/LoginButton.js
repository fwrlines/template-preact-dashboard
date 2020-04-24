/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

//Config
//import C from 'ui/cssClasses'
//
import QUERY from './graphql/oAuth2Google.graphql'

import {
  OLoginButton as LoginButton
} from '@fwrlines/ds'

/**
 * Use `LoginButton` to
 * Has color `x`
 */

const LocalLoginButton = ({
  label,
  dataKey,
  query,
  ...props
}) => (
  <LoginButton
    {...props}
    label={label}
    query={query}
    dataKey={dataKey}
  />
)

LocalLoginButton.propTypes = {

  /**
   *
   */
  label:PropTypes.string,

  /**
   *
   */
  query:PropTypes.string,

  /**
   *
   */
  dataKey:PropTypes.string
}

LocalLoginButton.defaultProps = {
  label  :'Login with google',
  query  :QUERY,
  dataKey:'oAuth2Google'
}

export default LocalLoginButton
