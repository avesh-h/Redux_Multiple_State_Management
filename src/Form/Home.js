import React from 'react'
import './Home.css'

function Home(props) {
    // const logoutHandler =(e) =>{
    //     e.preventDefault();
    //     // dispatch(authActions.logout())
    //     props.onLogout()
    // }
  return (
    <div className='home'>
       <p> Welcome back user </p>
       {/* <button onClick={logoutHandler}>log out</button> */}
    </div>
  )
}

export default Home;
   