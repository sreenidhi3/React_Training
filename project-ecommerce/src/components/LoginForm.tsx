import { stat } from 'fs'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserAction, loginUserAction } from '../actions/login.actions'
import { login } from '../login.service'
import { loginReducer } from '../reducers/login.reducers'
import { RootState } from '../store'
const LoginForm =()=>{
    const state = useSelector((state: RootState) => state.loginReducer);
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [errEmail, setErrEmail] = useState("")
    const [errPassword, setErrPassword] = useState("")
    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const handleSubmit = async (e:any)=>{
        // e.preventDefault()
        // const data = await login({email, password})
        dispatch(loginUserAction({email, password}))
        // console.log(data)
        // navigate("/products")
    }

    function validateEmail(value: string): void {
        if (!emailRegex.test(value)) {
            setErrEmail("Enter a valid email")
        }else{
            setErrEmail("")
        }
        setEmail(value)
    }  
    function validatePassword(value: string): void {
        if(value.length < 6){
            setErrPassword("Password should be greater than 6 characters")
        }else{
            setErrPassword("")
        }
        setPassword(value)
    }    

    console.log("Login", state)
    return(
        <div className='container'>
            <form>
            <h2>Welcome Back</h2>
                <div className='label'>
                    <label htmlFor="email">Email:</label>
                    <input value={email} placeholder="john.doe@email.com" id="email" type="email" onChange={(e)=>validateEmail(e.target.value)}/>
                    {errEmail ? (<div className='error-msg'>{errEmail}</div>) : ("")}
                    {/* <div className='error-msg'>{errEmail}</div> */}
                </div>
                <div className='label'>
                    <label htmlFor="password">Password:</label>
                    <input value={password} placeholder="******" type="password" id="password" onChange={(e)=>validatePassword(e.target.value)}/>
                    {errPassword ? (<div className='error-msg'>{errPassword}</div>) : ("")}
                    {/* <div className='error-msg'>{errPassword}</div> */}
                </div>
                {state.error ? (<div className='error-msg'>{state.error}</div>) : ("")}
                
                <button type="button" className='btn-primary-full' disabled={(errEmail || errPassword) ? true : false } onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;

