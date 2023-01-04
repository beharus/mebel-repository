import React from "react";
import { useSelector } from "react-redux";
import CatalogItem from "./CatalogItem";

function CatalogList() {
  const { catalog } = useSelector((state) => state.catalog);

  return catalog ? (
    <div className="catalog-list">
      {catalog.map((item) => {
        return <CatalogItem key={item.id} {...item} />;
      })}
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default CatalogList;
