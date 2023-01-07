import React from "react";
import { useSelector } from "react-redux";
import CatalogSliderItem from "../catalogSliderItem";

function CatalogSlider() {
  const { catalog } = useSelector((state) => state.catalog);
  
  return catalog ? (
    <div className="row row-cols-1 row-cols-md-6 g-4 catalog-list">
      {catalog.map((item) => {
        return <CatalogSliderItem key={item.id} {...item} />;
      })}
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default CatalogSlider;
