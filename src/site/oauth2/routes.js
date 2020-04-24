import { urljoin as _u, loadable } from 'utils'

import MODULE_URLS from './urls'

const MODULE_NAME = 'app.oauth2'

const redeemParam = ':slug([0-9a-f]{24})'

export default [
  {
    path     :_u(MODULE_URLS.REDEEM, redeemParam),
    component:loadable(() => import (/* webpackChunkName: `app.oauth2` */ './components/Redeemer.js'))
  }

  /*
  {
    path     :MODULE_URLS.LOGOUT,
    component:Logout,
    private  :true
  },
  */
]
