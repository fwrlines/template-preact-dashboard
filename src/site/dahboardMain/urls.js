import { urljoin as _u } from 'utils'

const basePath = '/d/'

export default {
  LOGIN  :'login',
  LOGOUT :'logout',
  HOME   :basePath,
  PROFILE:_u(basePath, 'profile')
}
