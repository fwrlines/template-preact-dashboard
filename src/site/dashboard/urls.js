import { urljoin as _u } from 'utils'

const basePath = '/d/'
const accountBasePath = '/account/'
const shopBasePath = '/shop/'
const websitebasePath = '/website/'
const planBasePath = '/plan/'

export default {
  basePath,
  all                       :_u(basePath, '*'),
  HOME                      :basePath,
  WEBSITE_HOME              :websitebasePath,
  SHOP_HOME                 :shopBasePath,
  SHOP_DETAILS              :_u(shopBasePath, 'details'),
  SHOP_HOURS                :_u(shopBasePath, 'opening-hours'),
  SHOP_CONTACT              :_u(shopBasePath, 'contact'),
  ACCOUNT_HOME              :accountBasePath,
  ACCOUNT_PROFILE           :_u(accountBasePath, 'profile'),
  ACCOUNT_GOOGLE_INTEGRATION:_u(accountBasePath, 'google'),
  PLAN_HOME                 :planBasePath,
  PLAN_DETAILS              :_u(planBasePath, 'details'),
  PLAN_PAYMENT              :_u(planBasePath, 'billing'),
  PROFILE                   :_u(basePath, 'profile'),
  PROFILE2                  :_u(basePath, 'profile2')
}
