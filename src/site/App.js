import { h, Fragment } from 'preact'
//import Prototypes from 'prototypes' //Capitalize, etc
import { Switch, Route } from 'react-router-dom'
import oAuth2Routes from './oauth2/routes'
import { useState } from 'preact/hooks'
import Clock from 'ui/AsyncClock'
import QueryTester from 'ui/QueryTester'
import Misc from 'ui/MiscTester'
import {
  AnimatedVCaret,
  oAuth2LoginButton as LoginButton
} from '@fwrlines/ds'

const App = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      <Switch>
        <oAuth2Routes />
      </Switch>
      <h1>Preact test</h1>
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
      <Clock
        thing="thing"
        thing2="thing2"
      />
      <Misc />
      <QueryTester />
    </>
  )
}

export default App
