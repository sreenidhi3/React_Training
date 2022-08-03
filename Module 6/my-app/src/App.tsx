import { useState } from 'react';
import './App.css';

interface PostLoginPayload {
  email: string;
  password: string;
}

interface PostLoginResponse {
  token: string;
}

function App() {
  const [email, setEmail] =  useState<string>("eve.holt@reqres.in")
  const [password, setPassword] =  useState<string>("cityslicka")
  const [token, setToken] = useState<string>("")
  // const handleSubmit=(e)=>{
 
  const handleSubmit = async ()=>{
    let payload: PostLoginPayload = {email, password}
    return fetch("https://reqres.in/api/login", {
      method: "POST", 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(payload)
      }).then((res) => res.json().then((data:PostLoginResponse) => setToken(data.token)))
    }
  
  // }
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
      </header>
    </div>
  );
}

export default App;
