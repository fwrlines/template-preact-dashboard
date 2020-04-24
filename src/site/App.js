import React, { useState, useContext } from 'react'
//import Prototypes from 'prototypes' //Capitalize, etc
import { Switch, Route, Link } from 'react-router-dom'

import oAuth2Routes from './oauth2/routes'
import Clock from 'ui/test/AsyncClock'
import QueryTester from 'ui/test/QueryTester'
import { MyProfile } from 'ui/local/dashboardMain'

import {
  AnimatedVCaret,
  ProfileContext,
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
      <Switch
        children={
          [
            ...routes.map(({ isPrivate, ...routeProps }, i) =>
              isPrivate ?
                <PrivateRoute
                  key={i}
                  {...routeProps}
                /> :
                <Route
                  key={i}
                  {...routeProps}
                />
            ),
            <Route path="/">
              {' '}
              <Clock
                thing="thing"
                thing2="thing2"
              />
              {' '}
              <QueryTester />
              {' '}
            </Route>
          
          ]
        }
      />
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
    </>
  )
}

export default App
