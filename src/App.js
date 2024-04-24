import React from 'react'
import Card from './components/Card'

function App() {
  const email = 'george.bluth@reqres.in'
  const first_name = 'George'
  const last_name = 'Bluth'
  const avatar = 'https://reqres.in/img/faces/1-image.jpg'

  return (
    <div>
      <Card
        email={email}
        first_name={first_name}
        last_name={last_name}
        avatar={avatar}
      />
    </div>
  )
}

export default App
