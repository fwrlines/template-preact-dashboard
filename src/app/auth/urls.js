/* @fwrlines/generator-react-component 2.1.3 */
import { urljoin as _u } from 'utils'
import * as URLS from 'app/urls'

// const basePath = '/auth/'

const UNAUTHORIZED = '/unauthorized'

export default {
  LOGIN :'/login',
  REDEEM:'/redeem',
  LOGOUT:'/logout',
  UNAUTHORIZED
}

export const RedirectAfterLoginUrl = URLS.DASHBOARD.HOME
export const RedirectUnauthorized = UNAUTHORIZED
