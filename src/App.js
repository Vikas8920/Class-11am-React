import React from 'react'
import Navbar from './Component/Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import ProductList from './Component/ProductList'
import Cart from './Component/Cart'

const App = () => {
  return (
      <Router>
        <CartProvider>
          <div>
            <Navbar />
            <Routes>
              <Route path='/' element={<ProductList />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </CartProvider>
      </Router>
  )
}

export default App
