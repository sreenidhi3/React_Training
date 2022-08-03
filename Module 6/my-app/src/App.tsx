import { useState } from 'react';
import './App.css';
import { postLogin } from './services/login.services';



function App() {
  const [email, setEmail] =  useState<string>("eve.holt@reqres.in")
  const [password, setPassword] =  useState<string>("cityslicka")
  const [token, setToken] = useState<string>("")

  const handleSubmit = async ()=>{
   const token = postLogin({email, password}).then((data)=>setToken(data.token))
   console.log(token)

  }

  return (
    <div >
      <header style={{padding: "3rem", margin:"auto"}}>
        <label> Email: <br/>
          <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <br/>
        <label> Password: <br/>
          <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <button onClick={handleSubmit}>Login</button>
        <h4>{token}</h4>
      </header>
    </div>
  );
}

export default App;
