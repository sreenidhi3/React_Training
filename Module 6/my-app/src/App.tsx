import { useReducer, useState } from 'react';
import './App.css';
import { postLogin } from './services/login.services';

let emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

interface LoginState{
  email:{
    value: string;
    error: string;
    touched: boolean;
  },
  password:{
    value: string;
    error: string;
    touched: boolean;
  }
}

interface ReducerAction{
  type: string;
  payload?:any;
}

function App() {
  // const [email, setEmail] =  useState<string>("eve.holt@reqres.in")
  // const [password, setPassword] =  useState<string>("cityslicka")
  const [token, setToken] = useState<string>("")

  let initialState = {
    email:{
      value: "",
      error: "",
      touched: false
    },
    password:{
      value: "",
      error: "",
      touched: false
    }
  }

  const LoginReducer = (state:LoginState, action:ReducerAction):LoginState=>{
    switch (action.type){
      case "ON_EMAIL_CHANGE":
        let updatedEmail = {value: action.payload, error:""}
        if(! emailRegex.test(action.payload)){
          updatedEmail.error = "Enter a valid email"
        }
        return {...state, email: {...state.email, ...updatedEmail} }
      case "ON_PASSWORD_CHANGE":
        let updatedPassword = {value: action.payload, error:""}
        if(action.payload.length < 6){
          updatedPassword.error="Password should be greater than 6 characters"
        }
        return {...state, password:{...state.password, ...updatedPassword} }
      case "SET_EMAIL_TOUCHED":
        return {...state, email:{...state.email, touched:true}}
      case "SET_PASSWORD_TOUCHED":
        return {...state, password:{...state.password, touched:true}}
      default:
        return state
    }
  }

  const [loginState, dispatch] =  useReducer(LoginReducer,initialState)

  const handleSubmit = async ()=>{
   const token = postLogin({email: loginState.email.value, password:loginState.password.value}).then((data)=>{
      setToken(data.token);
      console.log(data)
  })
}

  return (
    <div >
      <header style={{padding: "3rem", margin:"auto"}}>

        <div>
          <label> Email: <br/>
            <input type="text" placeholder='Email' 
              value={loginState.email.value} 
              onChange={(e)=>dispatch({type: "ON_EMAIL_CHANGE", payload: e.target.value})}
              onBlur={()=>dispatch({type:"SET_EMAIL_TOUCHED"})}    
            />
          </label>
          {loginState.email.touched && <p  style={{color:"red", fontSize: "12px"}}>{loginState.email.error}</p>}
        </div>

        <div>
          <label> Password: <br/>
            <input type="password" placeholder='Password' 
              value={loginState.password.value} 
              onChange={(e)=>dispatch({type: "ON_PASSWORD_CHANGE", payload: e.target.value})}
              onBlur={()=>dispatch({type:"SET_PASSWORD_TOUCHED"})}    
            />
          </label>
          {loginState.password.touched &&  <p style={{color:"red", fontSize: "12px"}}>{loginState.password.error}</p>}
        </div>  

        <button onClick={handleSubmit}>Login</button>

        <h4>{token}</h4>
      </header>
    </div>
  );
}

export default App;
