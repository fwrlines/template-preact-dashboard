import React, { useEffect } from 'react'

import {
  Heading,
  InlineLoader
} from '@fwrlines/ds'

export default ({ color='link' }) =>

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
  (
    <div
      className="uc u1"
      style={{
        height        :'100%',
        display       :'flex',
        flexDirection :'column',
        justifyContent:'center',
        alignItems    :'center'
      }}
    >
      <Heading
        headingAs="h1"
        heading="Loading module"
      />
      {/*
      <div>
        <pre className="x-paragraph pv-u">
          { JSON.stringify(props, null, 2) }
        </pre>
      </div>*/}
      <div className="pv-u">

        <InlineLoader
          type="circle"
          height="3em"
          loaderClassName={`x-${color}`}
        />
      </div>
    </div>
  )

