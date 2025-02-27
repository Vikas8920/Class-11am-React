import React from 'react'
import ThemeProvider from './Component/ThemeProvider'
import ThemeToggle from './Component/ThemeToggle'
import CounterProvider from './Component/CounterProvider'
import CounterDisplay from './Component/CounterDisplay'

const App = () => {
  return (
    <>
      <ThemeProvider>
        <h1>Theme Toggle</h1>
        <ThemeToggle/>
      </ThemeProvider>
      
      <hr/>
      <CounterProvider>
        <h1>Counter</h1>
        <CounterDisplay/>
      </CounterProvider>
    </>
  )
}

export default App
