import React, { useEffect } from 'react'
import { h } from 'preact'

export default function Loading() {

  /*
  useEffect(() => {
    const pl =  document.getElementById('pl')
    pl.className=''
    return () => {
      pl.classList.add('ld')
      //console.log('unmounting', pl)
    }
  }, [])
  return null
  */
  return <h1>A module is loading</h1>
}
