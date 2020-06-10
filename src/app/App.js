import React, { useState, useContext } from 'react'
//import Prototypes from 'prototypes' //Capitalize, etc
import { Switch, Redirect, Route, Link } from 'react-router-dom'

//import NotFound from './NotFound.js'

//import oAuth2Routes from './oauth2/routes'
//import Clock from 'ui/test/AsyncClock'
//import QueryTester from 'ui/test/QueryTester'
//import { MyProfile } from 'ui/local/dashboardMain'

import {
  AnimatedVCaret,
  SessionContext,
  SwitchRouteMap
} from '@fwrlines/ds'


import routes from './allRoutes.js'

const App = () => {
  //const [active, setActive] = useState(false)

  const {
    loginPath,
    logoutPath
  } = useContext(SessionContext)

  return (
    <>
      <SwitchRouteMap
        routes={routes}
        NotFound={<Redirect to={loginPath} />}
      />
      {/*}
      <MyProfile />
              <Clock
                thing="thing"
                thing2="thing2"
              />
              {' '}
              <QueryTester />
Includes
      <AnimatedVCaret
        active={active}
        setActive={setActive}
        id="myarrow"
        width="200px"
      />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={loginPath}>LOGIN</Link>
          </li>
          <li>
            <Link to="/d/profile">My account</Link>
          </li>
        </ul>
      </nav>
      */}
    </>
  )
}

export default App
