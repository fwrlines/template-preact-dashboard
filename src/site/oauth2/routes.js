import React from 'react'
import {
  //Switch,
  Route
} from 'react-router-dom'

import { urljoin as _u, loadable } from 'utils'
import LOCAL_URLS from './urls'

/* Blog */


const AsyncRedeemer = loadable(() => import (/* webpackChunkName: "app.blog" */ './Redeemer.js'))

const paramSetter = ':slug([0-9a-f]{24})'

export default (props) =>
  (<>
    <Route
      //exact
      path={'a'}
      component={AsyncRedeemer}
    />
  </>)
