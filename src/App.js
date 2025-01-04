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
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; // Import PayPal provider
import {BrowserRouter, Routes, Route, RouterProvider} from 'react-router-dom'

function App() {
  // PayPal provider options
  const initialOptions = {
    "client-id":
      "ASKH0VyqxB5iXV3R5WWxv46BF4PQsv6kNKZmjxJK-lKq-f3XfMcA02pDDpbS4lMQXJjW1kurSVmRXVgL", // Replace with your PayPal Client ID
    currency: "USD",
  };



  return (
    <PayPalScriptProvider options={initialOptions}>
         <BrowserRouter>
   <Routes>
  <Route path='/' element= {<Home/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/men' element= {<Men/>}/>
  {/* <Route path='/women' element={<Women/>}/> */}
  <Route path='/about' element={<About/>} />
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/checkout' element={<Checkout/>}/>
  <Route path="/product/:id" element={<ProductDetail />} />
  <Route path='/ordercomplete' element={<OrderComplete/>}/>
  <Route path='/addtowishlist' element={<AddToWishlist/>}/>
   </Routes>
   </BrowserRouter>

    </PayPalScriptProvider>
  )
}
export default App