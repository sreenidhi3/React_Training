import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import "./styles/globals.css"
import NavBar from './components/NavBar';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from './store';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import { useEffect } from 'react';
import Catalogue from './pages/Catalogue';
import { fecthAllCategories, fecthAllProducts } from './services/products.service';
import { fetchCategoriesAction } from './types/products.types';
import { fetchProductsAction } from './actions/products.actions';

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

function App() {
  const dispatch = useDispatch();
  const combiState = useSelector((state: RootState) => state);
  console.log("CObstate", combiState)
  const state = useSelector((state: RootState) => state.loginReducer);
  useEffect(()=>{
      dispatch(fetchCategoriesAction())
      dispatch(fetchProductsAction())
      // fecthAllProducts().then(data=>console.log(data))
      // fecthAllCategories().then(data=>console.log(data))
  }, [])
  console.log(state)
  return (
  <div className='app'>
    <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/products" element={<Catalogue />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  </div>
  );
}


export default App;
