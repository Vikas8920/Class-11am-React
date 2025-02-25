// import React, { useEffect, useRef, useState } from 'react'
import React from 'react'
import AuthProvider from './Component/AuthProvider'
import Login from './Component/Login'
import UserProfile from './Component/UserProfile'
// import Counter from './Component/Counter'

const App = () => {
  // const [inputValue, setInputValue] = useState('')

  // const previousInputValue = useRef('')

  // useEffect(()=>{
  //   previousInputValue.current = inputValue
  // }, [inputValue])
  return (
    <>
      {/* <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <h1>Current Value: {inputValue}</h1>
      <h1>Previous Value: {previousInputValue.current}</h1>

      <hr/>

      <Counter/> */}

      <AuthProvider>
        <h1>Simple Authentication System</h1>
        <Login/>
        <UserProfile/>
      </AuthProvider>
    </>
  )
}

export default App
