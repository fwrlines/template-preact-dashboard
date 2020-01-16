//import React from 'react'
import { h } from 'preact'
import baseLoadable from '@loadable/component'
import Loading from 'site/Loading'

export default function loadable(func) {
  return baseLoadable(func, { fallback: <Loading /> })
}
