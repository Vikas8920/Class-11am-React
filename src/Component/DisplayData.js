import React, { useContext } from 'react'
import { FormContext } from '../Context/FormContext'

const DisplayData = () => {
    const {formData} = useContext(FormContext)
  return (
    <>
      <div>
        <h2>Form Data:</h2>
        <p><strong>Name:</strong>{formData.name}</p>
        <p><strong>Email:</strong>{formData.email}</p>
        <p><strong>Age:</strong>{formData.age}</p>
      </div>
    </>
  )
}

export default DisplayData
