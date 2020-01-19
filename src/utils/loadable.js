import React from 'react'
import baseLoadable from '@loadable/component'
import Loading from 'site/Loading'

export default function loadable(func) {
  return baseLoadable(func, { fallback: <Loading /> })
}
