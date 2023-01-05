import React from "react";
import { useSelector } from "react-redux";
import CatalogItem from "../catalogItem";

function CatalogList() {
  const { catalog } = useSelector((state) => state.catalog);

  return catalog ? (
    <div className="row row-cols-1 row-cols-md-6 g-4 catalog-list">
      {catalog.map((item) => {
        return <CatalogItem key={item.id} {...item} />;
      })}
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default CatalogList;
