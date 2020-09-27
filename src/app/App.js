import React, { useState, useContext } from 'react'
//import Prototypes from 'prototypes' //Capitalize, etc
import { Switch, Redirect, Route, Link } from 'react-router-dom'

//import NotFound from './NotFound.js'

//import oAuth2Routes from './oauth2/routes'
//import Clock from 'ui/test/AsyncClock'
//import QueryTester from 'ui/test/QueryTester'
//import { MyProfile } from 'ui/local/dashboardMain'

import {
  SessionContext,
  SwitchRouteMap,
  useSite
} from '@fwrlines/ds'


import routes from './allRoutes.js'

const App = () => {
  //const [active, setActive] = useState(false)
  const {
    loginPath,
    logoutPath
  } = useContext(SessionContext)

  const {
    userTheme
  } = useSite()

  return (
    <div
      className={
        [
          'ui-'+ userTheme,
          'y-background b-y'
        ].filter(e => e).join(' ')
      }
      style={{ minHeight: '100%', height: '100%' }}
    >
      <SwitchRouteMap
        routes={routes}
        NotFound={() => <Redirect to={loginPath} />}
      />
    </div>
  )

}

export default App
