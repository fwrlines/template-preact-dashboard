import { urljoin as _u, loadable } from 'utils'

import { Logout } from '@fwrlines/ds'
import { Login } from './pages/Login'

import MODULE_URLS from './urls'

const MODULE_NAME = 'app.dashboard_main'

export default [
  {
    path     :MODULE_URLS.LOGIN,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard_main` */ './pages/Login.js'))
  },
  {
    path     :MODULE_URLS.LOGOUT,
    component:Logout,
    isPrivate:true
  },
  {
    path     :MODULE_URLS.HOME,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard_main` */ './pages/Home.js')),
    isPrivate:true
  },
  {
    path     :MODULE_URLS.PROFILE,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard_main` */ './pages/Profile.js')),
    isPrivate:true
  }
]
