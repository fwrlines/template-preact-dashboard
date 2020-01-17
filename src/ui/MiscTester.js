import { h, Fragment } from 'preact'

import { LoginButton } from 'ui/local'

export default ({ props }) => (
  <>
    <h3>Login button underneath</h3>
    <LoginButton />
    <p>On top here</p>
  </>
)
