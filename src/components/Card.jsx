import React from "react";

const Card = ({ email, first_name, last_name, avatar }) => {
  let showEmail = true;
  return (
    <div className="card">
      <div>
        <img src={avatar} alt="" />
      </div>
      <div>
        <div style={{ fontSize: "28px" }}>name: {first_name}</div>
        <div style={{ fontSize: "26px" }}>surname: {last_name}</div>
        <div style={{ fontSize: "24px" }}>
          email: {showEmail && <span>{email}</span>}
        </div>
      </div>
    </div>
  );
};

export default Card;
