import React from "react";

const Card = ({ imgsrc }) => {
  return (
    <div className="card">
      <img src={imgsrc} alt={imgsrc} width={"100%"} />
    </div>
  );
};

export default Card;
