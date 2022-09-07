import React,{useState ,useEffect} from 'react'
import './LandingForm.css'
// import {useSelector,useDispatch} from 'react-redux'



function LandingForm(props) {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [FormValid,setFormValid] = useState(false)
    const [isPassValid,setValidPass] = useState()
    const [isEmailValid,setValidEmail]= useState()


  useEffect(()=>{
    setFormValid(email.includes('@') && password.trim().length > 6)
  },[email,password])

    const emailHandler = (e) =>{
      setEmail(e.target.value)
    }
    const passwordHandler = (e) =>{
      setPassword(e.target.value)
    }

    const ValidEmailHandler = () =>{
      setValidEmail(email.includes('@'))
    }
    const ValidPassHandler = () =>{
      setValidPass(password.trim().length > 6)
    }
    const loginHandler = (e)=>{
        e.preventDefault();
        // dispatch(authActions.login())
        props.onLogin()
    }


  return (
    <form className='form'> 

        <label>Email:- </label>
        <input type='text' 
        onChange={emailHandler} 
        onBlur={ValidEmailHandler} 
        className = {`emailInput  ${FormValid === false ? 'invaild' : ''} `}/><br/>

        <label>PassWord:- </label>
        <input type='password' 
        onChange={passwordHandler} 
        onBlur={ValidPassHandler}
        className = {`passInput  ${FormValid === false ? 'invalid' : ''}`}
        /><br />

        <button onClick={loginHandler} disabled = {!FormValid}>Log in</button>
    </form>

  )
}

export default LandingForm
