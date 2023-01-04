import React from "react";

function MebelItem({ name, image }) {
  return (
    <div className="card mebel-item">
      <img
        src={require(`../images/mebel_images/${image}`)}
        className="card-img-top img-fluid"
        alt="img"
      />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
}

export default MebelItem;
