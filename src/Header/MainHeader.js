import React from 'react'
import './MainHeader.css'

function MainHeader(props) {

  return (
    <div className='header'>
      {props.children}
      {/* <Header />
      <Navbar onLogout={gettingLogOut}/> */}
    </div>
  )
}

export default MainHeader
