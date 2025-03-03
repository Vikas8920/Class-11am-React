import React, { useContext, useState } from 'react'
import { FormContext } from '../Context/FormContext'

const FormComponent = () => {
    const {updateFormData} = useContext(FormContext)
    const [formState, setFormState] = useState({
        name:'',
        email:'',
        age:''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormState({
            ...formState,
            [name]:value,
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        updateFormData(formState)
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type='text' name='name' value={formState.name} onChange={handleChange}/>
        </div>
        <div>
            <label>Email:</label>
            <input type='email' name='email' value={formState.email} onChange={handleChange}/>
        </div>
        <div>
            <label>Age:</label>
            <input type='number' name='age' value={formState.age} onChange={handleChange}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default FormComponent
