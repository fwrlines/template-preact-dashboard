import * as React from 'react'

import { urljoin as _u, loadable } from 'utils'

import { MainLayout } from './layouts'

import { tree as navTree } from './navigation'

import MODULE_URLS from './urls'

//import { AUTH as AUTH_URLS } from '../urls.js'

const MODULE_NAME = 'app.dashboard'


const internalRoutes = [
  {
    path     :MODULE_URLS.PROFILE,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/Profile.js'))
    //isPrivate:true
  },
  {
    path     :MODULE_URLS.PROFILE2,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/Profile.js'))
    //isPrivate:true
  }
]

export default [
  {
    path  :MODULE_URLS.all,
    render:(props) => (<MainLayout
      routes={internalRoutes}
      navTree={navTree}
      {...props}
    />)
    //isPrivate:true
  }
]
