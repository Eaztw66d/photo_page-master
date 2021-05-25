import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="header">
      <h1><FontAwesomeIcon icon={faCameraRetro}/></h1>
    </div>
  )
}

export default Header
