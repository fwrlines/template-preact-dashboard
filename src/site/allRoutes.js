import { routes as dashboardMainRoutes } from './dahboardMain'
import { routes as oAuth2Routes } from './oauth2'

export default [
  ...dashboardMainRoutes,
  ...oAuth2Routes
]
