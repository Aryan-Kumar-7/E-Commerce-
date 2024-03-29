import './App.css';
import Navbar from './Compnents/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory category="men"/>}/>
          <Route path='/womens' element={<ShopCategory category="women"/>}/>
          <Route path='/kids' element={<ShopCategory category="kid"/>}/>
          <Route path='product' element={<Product/>}>
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path=':productId' element={<Cart/>} />
          <Route path=':productId' element={<LoginSignup/>} />

        </Routes>

      </ BrowserRouter>
    </>
  )
}

export default App
