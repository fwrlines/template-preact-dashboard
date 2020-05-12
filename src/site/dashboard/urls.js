import { urljoin as _u } from 'utils'

const basePath = '/d/'

export default {
  basePath,
  all     :_u(basePath, '*'),
  HOME    :basePath,
  PROFILE :_u(basePath, 'profile'),
  PROFILE2:_u(basePath, 'profile2')
}
