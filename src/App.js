import React, { useState } from 'react'
import Form3 from './Component/Form3'
import Display from './Component/Display'
// import Checkbox from './Component/Checkbox'
// import SelectForm from './Component/SelectForm'
// import Radio from './Component/Radio'
// import Form2 from './Component/Form2'
// import Form from './Component/Form'

const App = () => {
  const [formData, setFormData] = useState(null)
  const handleFormSubmit = (data) =>{
    setFormData(data)
  }
  return (
    <>
     {/* <Form/> */}
     {/* <Form2/> */}
      {/* <SelectForm/> */}
      {/* <Radio/> */}
      {/* <Checkbox/> */}
      <Form3 onFormSubmit={handleFormSubmit}/>
      {formData && <Display data={formData}/>}
      {/* if formData exists, render the display component */}
    </>
  )
}

export default App

