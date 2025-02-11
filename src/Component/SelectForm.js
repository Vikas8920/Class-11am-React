import React, { useState } from 'react'

const SelectForm = () => {
    const[myCar, setMyCar] = useState('')
    const handleChange = (e) =>{
        setMyCar(e.target.value)
    }
  return (
    <>
      <form>
        <select value={myCar} onChange={handleChange}>
            <option>Select</option>
            <option value='Ford'>Ford</option>
            <option value='Volvo'>Volvo</option>
            <option value='Mercedes'>Mercedes</option>
            <option value='BMW'>BMW</option>
        </select>
      </form>
    </>
  )
}

export default SelectForm
