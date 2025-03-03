import React from 'react'
import { FormProvider } from './Context/FormContext'
import FormComponent from './Component/FormComponent'
import DisplayData from './Component/DisplayData'
import './App.css'

const App = () => {
  return (
    <>
      <FormProvider>
        <div className='app'>
          <h1>Form with React Context</h1>
          <FormComponent/>
          <DisplayData/>
        </div>
      </FormProvider>
    </>
  )
}

export default App
