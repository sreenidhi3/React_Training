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
import Cart from './pages/Cart';
import ProdDetails from './pages/ProdDetails';
import Error from './pages/Error';
import Payment from './pages/Payment';

const Home =()=>{
  return(
    <div>
     <h2>Home</h2>
    </div>
  )
}

const Success=()=>{
  return(
    <div>
      <h1 className='text-center'>Order Placed Successfully!</h1>
      <p className='text-center'><Link to="/" style={{color:"var(--primary-color)"}}>Back to Home</Link></p>
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
          <Route path="/error" element={<Error/>} />
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/products" element={<Catalogue />} />
          <Route path="/products/:prodId" element={<ProdDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path='*' element={<Error/>}/>
        </Routes>
    </div>
  );
}


export default App;
