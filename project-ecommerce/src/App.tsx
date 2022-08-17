import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './App.css';

const Login =()=>{
  return(
    <div>
     <h2>Login</h2>
    </div>
  )
}

const Products =()=>{
  return(
    <div>
     <h2>Products</h2>
    </div>
  )
}

const SignUp =()=>{
  return(
    <div>
     <h2>SignUp</h2>
    </div>
  )
}

function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}


export default App;
