import React from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const Form = ({form}) => {
 if(form==true){
     return (
         <>
             {/* Login Form */}
             <LoginForm />
         </>
     )
 } else {
     return (
         <>
             {/* Registration Form */}
             <RegistrationForm />
         </>
     )
 }
 
}

export default Form
