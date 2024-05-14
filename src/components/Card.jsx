import React from "react";

const Card = () => {
  let showEmail = true;
  const name = "root";
  const surname = "root";
  const email = "root";
  const img = "https://via.placeholder.com/150";
  return (
    <div className="card">
      <div>
        <img src={img} alt="Eror 404" />
      </div>
      <div>Name: {name}</div>
      <div>Surname: {surname}</div>
      <div>Email: {email}</div>
    </div>
  );
};
export default Card;
