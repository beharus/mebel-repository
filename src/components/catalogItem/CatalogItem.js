import React from "react";

function CatalogItem({ name, image }) {
  return (
    <div className="col">
      <div className="card category-item">
        <img
          src={require(`../../images/catalog_images/${image}`)}
          className="card-img-top img-fluid"
          alt="img"
        />
        <div className="card-body"></div>
        <div className="card-footer">
          <h5 className="card-title text-center">{name}</h5>
        </div>
      </div>
    </div>
  );
}

export default CatalogItem;
