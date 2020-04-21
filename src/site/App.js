import React, { useState, useContext } from 'react'
//import Prototypes from 'prototypes' //Capitalize, etc
import { Switch, Route, Link } from 'react-router-dom'
import oAuth2Routes from './oauth2/routes'
import Clock from 'ui/AsyncClock'
import QueryTester from 'ui/QueryTester'
import Redeemer from 'ui/local/Redeemer'
import MyProfile from 'ui/local/MyProfile'
import Misc from 'ui/MiscTester'
import QUERY from 'ui/local/graphql/oAuth2Google.graphql'
import {
  AnimatedVCaret,
  Label,
  Logout,
  ProfileContext,
  ProfileContextProvider
} from '@fwrlines/ds'
import { LoginButton } from 'ui/local'
//<Route path="/redeem/:redeem([0-9a-z-]{3,80})">
//
import GQL_QUERY_ME from 'ui/local/graphql/me.graphql'

const profileContextProps = {
  loginPath :'/login',
  logoutPath:'/logout',
  cookieName:process.env.SESSION_COOKIE_NAME,
  GQL_QUERY_ME
}

const Wrapper = ({ children }) => (
  <ProfileContextProvider
    {...profileContextProps}
  >
    { children }
  </ProfileContextProvider>
)


const InsideApp = () => {
  const [active, setActive] = useState(false)

  const {
    loginPath,
    logoutPath
  } = useContext(ProfileContext)

  return (
    <>
    
      <MyProfile />
      <Switch>
        <Route path={logoutPath}>
          <Logout />
        </Route>
        <Route path={loginPath}>
          <LoginButton />
        </Route>
        <Route path="/redeem/:code([0-9a-z-]{64})">
          <h1>redeem</h1>
          <Redeemer />
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
      <Label
        className="x-red"
        basic
      >
Under
      </Label>
      <h1>React test 4 toby</h1>
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
            <Link to={loginPath}>LOGIN</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default () => <Wrapper><InsideApp /></Wrapper>
