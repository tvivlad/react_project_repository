import React from "react";
import Card from "./components/Card";

function App() {
  const email = "george.bluth@reqres.in";
  const first_name = "George";
  const last_name = "Bluth";
  const avatar = "https://reqres.in/img/faces/1-image.jpg";
  return (
    <div>
      <Card
        name={first_name}
        surname={last_name}
        email={email}
        avatar={avatar}
      />
    </div>
  );
}

export default App;
