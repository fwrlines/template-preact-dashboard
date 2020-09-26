/* @fwrlines/generator-react-component 2.2.3 */
import { defineMessages } from 'react-intl'

const messages = defineMessages({
  unauthorizedTitle:{
    id            :'app.auth.pages.unauthorized.title',
    defaultMessage:'Unauthorized',
    description   :'Subtitle for the unauthorized page'
  },
  unauthorizedSubtitle:{
    id            :'app.auth.pages.unauthorized.subtitle',
    defaultMessage:'Your have sucessfully connected your account, but you are not allowed to log in.',
    description   :'Subtitle for the unauthorized page'
  },
  unauthorizedExplanation:{
    id            :'app.auth.pages.unauthorized.explanation',
    defaultMessage:'You can try to login with another account { link }. Alternatively, if you believe this is a mistake',
    description   :'Text for the unauthorized page'
  },
  unauthorizedContact:{
    id            :'app.auth.pages.unauthorized.contact',
    defaultMessage:'you can contact support here.',
    description   :'Contact support when theres a login problem'
  },
  here:{
    id            :'app.auth.pages.unauthorized.here',
    defaultMessage:'here',
    description   :'Link to the login page'
  },
  error:{
    id            :'app.auth.pages.unauthorized.error',
    defaultMessage:'Error',
    description   :''
  }
})

export default messages
