import React, { useState } from 'react'
//import Prototypes from 'prototypes' //Capitalize, etc
import { Switch, Route, Link } from 'react-router-dom'
import oAuth2Routes from './oauth2/routes'
import Clock from 'ui/AsyncClock'
import QueryTester from 'ui/QueryTester'
import Misc from 'ui/MiscTester'
import QUERY from 'ui/local/graphql/oAuth2Google.graphql'
import {
  AnimatedVCaret,
  OLoginButton
} from '@fwrlines/ds'

const App = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      <Switch>
        <Route path="/about">
          <h1>About</h1>
          <OLoginButton
            query={QUERY}
            label="Login with google"
            dataKey="oAuth2Google"
          />
        </Route>
        <Route path="/users">
          <h1>Users</h1>
        </Route>
        <Route path="/">
          <Clock
            thing="thing"
            thing2="thing2"
          />
          <QueryTester />
        </Route>
      </Switch>
      <h1>React test</h1>
      <h2>
Includes
        <AnimatedVCaret
          active={active}
          setActive={setActive}
          id="myarrow"
          width="200px"
        />
      </h2>
      <ul>
        <li>
        SSR
        </li>
        <li>
        Lighthouse 100/100 ootb
        </li>
        <li>
        Apollo
        </li>
      </ul>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default App
