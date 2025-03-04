import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './Component/action'

const App = () => {
  const dispatch = useDispatch()
  const {isAuthenticated, user} =  useSelector((state)=>state.auth)

  const handleLogin = () =>{
    const userData = {name:'Vikas', email: 'vikas@gmail.com'}
    dispatch(login(userData))
  }

  const handleLogout = () =>{
    dispatch(logout())
  }
  return (
    <div>
      <h1>React Redux Authentication</h1>
      {isAuthenticated?(
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ):(
        <div>
          <h2>Please Log in</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  )
}

export default App
