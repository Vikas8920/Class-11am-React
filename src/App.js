import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Blogs from './Component/Blogs'
import Contact from './Component/Contact'
import NoPage from './Component/NoPage'

import './App.css'
import ParentComponent from './Component/ParentComponent'

const App = () => {
  return (
    <>
    <ParentComponent/>
      <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<NoPage/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
