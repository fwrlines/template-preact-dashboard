import * as React from 'react'

import { urljoin as _u, loadable } from 'utils'

import { MainLayout } from './layouts'

import MODULE_URLS from './urls'
import { AUTH as AUTH_URLS } from '../urls.js'

const MODULE_NAME = 'app.dashboard'

const navTree = {
  title   :'WebOffice',
  pathname:'/',
  //redirectFromPathname:'/',
  subItems:[
    {
      section :'General',
      title   :'My website',
      pathname:'/website/'
      //redirectFromPathname:'/website/',
    },
    {
      section :'General',
      title   :'My images',
      pathname:'/media/'
      //redirectFromPathname:'/media/',
    },
    {
      section :'Account',
      title   :'My account',
      pathname:'/account/',
      //redirectFromPathname:['/account/', '/account/profile/'],
      subItems:[
        {
          //section:''
          title   :'My profile',
          pathname:'/account/profile/'
        },
        {
          //section:''
          title   :'Google Integration',
          pathname:'/account/integration/'
        }
      ]
    },
    {
      section :'Account',
      title   :'Plan and payment',
      pathname:'/plan/',
      //redirectFromPathnames:['/plan/', '/plan/profile'],
      subItems:[
        {
          //section:''
          title   :'My plan',
          pathname:'/plan/profile/'
        },
        {
          //section:''
          title   :'Billing',
          pathname:'/plan/billing/'
        }
      ]
    },
    {
      section :'Account',
      title   :'Profile Info',
      pathname:MODULE_URLS.PROFILE2
    },
    {
      section :'Account',
      title   :'Logout',
      pathname:AUTH_URLS.LOGOUT
    }
  ]
}

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
