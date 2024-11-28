import React from 'react'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/ProductDetail'
import OrderComplete from './pages/OrderComplete'
import AddToWishlist from './pages/AddToWishlist'
import {BrowserRouter, Routes, Route, RouterProvider} from 'react-router-dom'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
  <Route path='/' element= {<Home/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/men' element= {<Men/>}/>
  <Route path='/women' element={<Women/>}/>
  <Route path='/about' element={<About/>} />
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/checkout' element={<Checkout/>}/>
  <Route path='/productdetail' element={<ProductDetail/>}/>
  <Route path='/ordercomplete' element={<OrderComplete/>}/>
  <Route path='/addtowishlist' element={<AddToWishlist/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App