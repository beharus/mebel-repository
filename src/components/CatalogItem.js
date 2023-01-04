import React from "react";

function CatalogItem({ name, image }) {
  return (
    <div className="card category-item">
      <img
        src={require(`../images/catalog_images/${image}`)}
        className="card-img-top img-fluid"
        alt="img"
      />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
}

export default CatalogItem;
