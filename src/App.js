import React from 'react'

// Today's Topic: React JSX, Fragment tag, if-esle statement
import './App.css'
import Form from './Component/Form'
import Button from './Component/Button'

const App = () => {
  const x = 5
  // let text = 'Good bye'
  // if(x<10){
  //   text = 'Hello React'
  // }
  return (
    <>
      <h1>React is {5+5} times better with JSX</h1>
      <p className='para'>I am a paragrapgh</p>
      <p className='para'>I am another paragrapgh</p>
      <input />
      <br/>
      <hr/>

      {/* <h1>{text}</h1> */}

      {/* Syntax: condition?'true statement':False statement'*/}
      <h1>{(x<10)?'Hello React':'Good bye'}</h1>

      <Form/>
      <Button name={'Click me!'}/>
    </>
   
  )
}

export default App
