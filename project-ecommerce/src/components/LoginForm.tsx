import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserAction, loginUserAction } from '../actions/login.actions'
import { login } from '../login.service'
import { loginReducer } from '../reducers/login.reducers'
const LoginForm =()=>{
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const handleSubmit = async (e:any)=>{
        e.preventDefault()
        // const data = await login({email, password})
        dispatch(loginUserAction({email, password}))
        // console.log(data)
        // navigate("/products")
    }

    return(
        <div className='container'>
            <form>
            <h2>Welcome Back</h2>
                <div className='label'>
                    <label htmlFor="email">Email:</label>
                    <input value={email} placeholder="john.doe@email.com" id="email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='label'>
                <label htmlFor="password">Password:</label>
                    <input value={password} placeholder="******" type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className='btn-primary-full' onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;