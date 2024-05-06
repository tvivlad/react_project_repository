import React from "react";
import Card from 'components/card'

function App() {
    const email = 'george.bluth@reqres.ins'
    const first_name = 'George'
    const last_name = 'Bluth'
    const avatar = 'https://reqres.in/img/faces/1-image.jpg'

    return (
        <div>
            <Card avatar = {avatar} first_name = {first_name} last_name = {last_name} email = {email}/>
        </div>
    )
}

export default App