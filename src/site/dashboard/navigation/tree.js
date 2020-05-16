import * as React from 'react'
import MODULE_URLS from '../urls'
import { AUTH as AUTH_URLS } from 'site/urls'

import { FormattedMessage } from 'react-intl'

import messages from './messages'

export default {
  title   :'WebOffice',
  pathname:'/',
  //redirectFromPathname:'/',
  subItems:[
    {
      //section :'',
      title   :<FormattedMessage {...messages.home} />,
      pathname:MODULE_URLS.HOME
      //redirectFromPathname:'/website/',
    },
    {
      //section :<FormattedMessage {...messages.}>,
      section :'WebOfficina',
      title   :<FormattedMessage {...messages.website} />,
      pathname:MODULE_URLS.WEBSITE_HOME
      //redirectFromPathname:'/website/',
    },
    {
      section :'WebOfficina',
      title   :<FormattedMessage {...messages.shop} />,
      //title   :'My images',
      pathname:MODULE_URLS.SHOP_HOME
      //redirectFromPathname:'/media/',
    },
    {
      //section :'Account',
      section :<FormattedMessage {...messages.account} />,
      title   :<FormattedMessage {...messages.profile} />,
      pathname:MODULE_URLS.ACCOUNT_HOME,
      //redirectFromPathname:['/account/', '/account/profile/'],
      subItems:[
        {
          //section:''
          title   :<FormattedMessage {...messages.profile} />,
          pathname:MODULE_URLS.ACCOUNT_PROFILE
        },
        {
          //section:''
          title   :<FormattedMessage {...messages.googleintgr} />,
          pathname:MODULE_URLS.ACCOUNT_GOOGLE_INTEGRATION
        }
      ]
    },
    {
      section :<FormattedMessage {...messages.account} />,
      title   :<FormattedMessage {...messages.planpayment} />,
      pathname:MODULE_URLS.PLAN_HOME,
      //redirectFromPathnames:['/plan/', '/plan/profile'],
      subItems:[
        {
          //section:''
          title   :<FormattedMessage {...messages.plan} />,
          pathname:MODULE_URLS.PLAN_DETAILS
        },
        {
          //section:''
          title   :<FormattedMessage {...messages.payment} />,
          pathname:MODULE_URLS.PLAN_PAYMENT
        }
      ]
    },
    {
      section :<FormattedMessage {...messages.account} />,
      title   :'Profile Info',
      pathname:MODULE_URLS.PROFILE2
    },
    {
      section :<FormattedMessage {...messages.account} />,
      title   :<FormattedMessage {...messages.logout} />,
      pathname:AUTH_URLS.LOGOUT
    }
  ]
}

