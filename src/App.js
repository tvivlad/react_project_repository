import React from "react";
import Card from "./components/Card";

function App() {
  const email = "janet.weaver@reqres.in";
  const first_name = "Janet";
  const last_name = "Weaver";
  const avatar = "https://reqres.in/img/faces/2-image.jpg";

  return (
    <div>
      <Card
        email={email}
        first_name={first_name}
        last_name={last_name}
        avatar={avatar}
      />
    </div>
  );
}

export default App;
