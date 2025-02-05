import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <>
      <form>
       <input type='text' placeholder='Your Name'/>
       <Button name={'Submit'}/>    
    </form> 
    </>
  )
}

export default Form
