import React, { useState } from 'react'

const Color = () => {
    const [color, setColor] = useState('red')
    const changeColor = () =>{
      setColor('blue')
    }
  return (
    <>
       <h1>My Favourite Color is {color}</h1>
       <button type='button' onClick={changeColor}>Blue</button>
    </>
  )
}

export default Color
