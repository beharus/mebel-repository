import React from "react";
import { useSelector } from "react-redux";
import './catalogitem.css'

function CatalogItem({ name, image }) {
  const { catalogStatus } = useSelector((state) => state.catalog);
  const clas =
    name === catalogStatus
      ? "card-title text-center activeStatus"
      : "card-title text-center";
  return (
    <div className="col d-flex">
      <div className="card category-item">

        <div className="card-body">
          <img
            src={require(`../../images/catalog_images/${image}`)}
            className="card-img-top img-fluid"
            alt="img"
          />
        </div>
        <div className="card-footer">
          <h5 className={clas}>{name}</h5>
        </div>
      </div>
    </div>
  );
}

export default CatalogItem;
