
import './App.css';
import LandingForm from './Form/LandingForm';
import {useSelector,useDispatch} from 'react-redux'
import {authActions} from './redux/store'
import Home from './Form/Home'
import MainHeader from './Header/MainHeader';
import Counter from './Counter/Counter';
import Navbar from './Header/Navbar'
import Header from './Header/Header'
// import {useState,useEffect} from 'react'


function App() {
  //In below useselector we get currentstate and return new state value so we have tobe perfectly define as per configure store and this is example of multislice reducer problem

  const logged_in = useSelector((state)=>{
    
    // console.log(state)
    return state.auth.auth
  })

  const dispatch = useDispatch()

  const getLogin = () =>{
    // localStorage.setItem('Login','1')
    dispatch(authActions.login())
  }


  const getLogout = () =>{
    // localStorage.removeItem('Login')
    dispatch(authActions.logout())
  }
  return (
    <div className="App">
      <MainHeader >
        <Header />
        {!logged_in && <Navbar onLogout={getLogout}/>}
      </MainHeader>
       {logged_in && <LandingForm  onLogin={getLogin} />}
       {!logged_in && <Home />}
       {!logged_in && <Counter />}
    </div>
  );
}

export default App;
