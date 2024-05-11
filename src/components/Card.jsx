import React from 'react'

const Card = ({ name, surname, email, avatar }) => {
  return (
    <div className='card'>
      <div>
        <img src={avatar} alt='' />
      </div>
      <div>
        <div>name: {name}</div>
        <div>surname: {surname}</div>
        <div>
          email: <span>{email}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
