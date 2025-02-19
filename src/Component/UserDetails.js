import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const {userId} = useParams()
    const [userDetails, setUserDetails] = useState(null)
    
    useEffect(() => {
        fetch(`https://dummyjson.com/users/${userId}`)
            .then(response => response.json())
            .then(data => { setUserDetails(data) })
    }, [userId])
  return (
    <>
      <div className='container mt-3'>
        {userDetails ? (
            <div className='row mt-3'>
                <h2 className='text-center mb-5'>User Details</h2>
                <div className='col-md-6 border border-1 border-dark rounded-1 d-flex justify-content-center align-items-center p-4'>
                    <img src={userDetails.image} alt='userDetails' width={'200px'}/>
                </div>
                <div className='col-md-6 border border-1 border-dark rounded-1 p-4 pt-5'>
                        <h5 class="card-title"><strong>Full Name:</strong> {userDetails.firstName +' '+ userDetails.lastName}</h5>
                        <h6 class="card-title"><strong>Email:</strong> {userDetails.email}</h6>
                        <h6 class="card-title"><strong>Age:</strong> {userDetails.age}</h6>
                        <h6 class="card-title"><strong>Gender:</strong> {userDetails.gender}</h6>
                        <h6 class="card-title"><strong>DOB:</strong> {userDetails.birthDate}</h6>
                </div>
            </div>
        ):(
            <div className='display-4'>Loading User Details....</div>
        )}
      </div>
    </>
  )
}

export default UserDetails
