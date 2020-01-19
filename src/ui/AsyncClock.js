import { loadable } from 'utils'
export default loadable(() => import(

  /* webpackChunkName: "chunk-bar-baz-ozo" */
  /* webpackPreload: true */
  './Clock.js'))

