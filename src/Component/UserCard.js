import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
    return (
        <>
            <div class="card" style={{width: '20rem'}}>
                <img src={user.image} class="card-img-top" alt="user" width={'250px'} height={'200px'}/>
                    <div class="card-body">
                        <h5 class="card-title"><strong>Full Name:</strong> {user.firstName +' '+ user.lastName}</h5>
                        <h6 class="card-title"><strong>Email:</strong> {user.email}</h6>
                        <h6 class="card-title"><strong>Age:</strong> {user.age}</h6>
                        <p class="card-text"><strong>University Name:</strong> {user.university}</p>
                        <Link to={`/users/${user.id}`} className='btn btn-primary mt-2'>Show Details</Link>
                    </div>
            </div>
        </>
    )
}

export default UserCard
