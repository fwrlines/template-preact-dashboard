import React, { useState, useContext } from 'react'
//import Prototypes from 'prototypes' //Capitalize, etc
import { Switch, Route, Link } from 'react-router-dom'

import oAuth2Routes from './oauth2/routes'
import Clock from 'ui/AsyncClock'
import QueryTester from 'ui/QueryTester'
import MyProfile from 'ui/local/MyProfile'

import {
  AnimatedVCaret,
  ProfileContext,
  ProfileContextProvider,
  PrivateRoute
} from '@fwrlines/ds'

import routes from './allRoutes.js'

const App = () => {
  const [active, setActive] = useState(false)

  const {
    loginPath,
    logoutPath
  } = useContext(ProfileContext)

  return (
    <>
    
      <MyProfile />
      <Switch>
        { routes.map(({ isPrivate, ...routeProps }, i) =>
          isPrivate ?
            <Route {...routeProps} /> :
            <PrivateRoute {...routeProps} />
        ) }
        <Route path="/">
          <Clock
            thing="thing"
            thing2="thing2"
          />
          <QueryTester />
        </Route>
      </Switch>
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
            <Link to="/account">My account</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default App
