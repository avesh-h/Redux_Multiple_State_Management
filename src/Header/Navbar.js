import React from 'react'
import './Navbar.css'

function Navbar(props) {
    const logoutHandler =(e) =>{
        e.preventDefault();
        props.onLogout()
    }
  return (
    <div className='navbar'>
        <ul>
            <li>
                About
            </li>
            <li>
                Services
            </li>
            <li>
                <button onClick={logoutHandler}>
                    Log Out
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
