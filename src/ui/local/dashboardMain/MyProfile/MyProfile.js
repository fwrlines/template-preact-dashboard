/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
//import {} from 'react'
//import PropTypes from 'prop-types'
import { useContext } from 'react'

import { ProfileContext } from '@fwrlines/ds'

import { Link } from 'react-router-dom'


//Config
//import C from 'ui/cssClasses'


/**
 * Use `MyProfile` to
 * Description :
 */

//export default () => <h2>Wks</h2>

const MyProfile = ({
}) => {

  const {
    currentUserData={},
    currentUserLoading,
    logoutPath
  } = useContext(ProfileContext)
  
  console.log('EXE => Consumer, context is', currentUserData)

  return (
    <>
      { !currentUserData ?
        'You are not connected' :
        <>
          <h1>
You are
            { currentUserData.email }
          </h1>
          <Link to={logoutPath}>Logout</Link>
        </>

      }
    </>

  )
}

/*
MyProfile.propTypes = {
}
*/

/*
MyProfile.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default MyProfile
