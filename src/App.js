import React from 'react'

function App() {
  //  const email "george.bluth@reqres.in"
  //  const first_name "George"
  //  const last_name "Bluth"
  //  const avatar "https://reqres.in/img/faces/1-image.jpg"
  let showEmail = true
  return (
    <div className='card'>
      <div>
        <img src='https://reqres.in/img/faces/1-image.jpg' alt='' />
      </div>
      <div style={{ fontWeight: '20px' }}>name: George</div>
      <div style={{ fontWeight: '20px' }}>surname: Bluth</div>
      <div style={{ fontWeight: '20px' }}>
        email: {showEmail && <span>george.bluth@reqres.in</span>}
      </div>
    </div>
  )
}

export default App
