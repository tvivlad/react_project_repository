import React from 'react'

const Card = ({ email, first_name, last_name, avatar }) => {
  let showEmail = true
  return (
    <div className='card'>
      <div>
        <img src={avatar} alt='' />
      </div>
      <div>
        <div>name: {first_name}</div>
        <div>surname: {last_name}</div>
        <div>email: {showEmail && <span>{email}</span>}</div>
      </div>
    </div>
  )
}

export default Card
