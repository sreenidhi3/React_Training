import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import "./styles/globals.css"
import NavBar from './components/NavBar';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from './store';

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

const Home =()=>{
  return(
    <div>
     <h2>Home</h2>
    </div>
  )
}

const Cart =()=>{
  return(
    <div>
     <h2>Cart</h2>
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
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.loginReducer);
  console.log(state)
  return (
  <div>
    <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  </div>
  );
}


export default App;
