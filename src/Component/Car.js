import React, { useState } from 'react'

const Car = () => {
    const [car, setCar] = useState({
        brand: 'Ford',
        model: 'Mustang',
        year: '2000',
        color:'red'
    })
    const updateColor = () =>{
        setCar(previousState =>{
            return {...previousState, color:'blue'}
        })
    }
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>It is a  {car.color} {car.model} from the year {car.year} </p>
      <button type='button' onClick={updateColor}>Blue</button>
    </>
  )
}

export default Car
