import React from "react";
import { useSelector } from "react-redux";

function InfoDetail() {
  const { infoDetail } = useSelector((state) => state.catalog);
  const { name, image, description } = infoDetail;

  return (
    <div className="row g-0">
      <div className="col-md-8">
        <img
          src={require(`./images/${image}`)}
          className="img-fluid rounded-start"
          alt={image}
        />
      </div>
      <div className="col-md-4">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoDetail;
