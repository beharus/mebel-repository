import React, { useEffect } from "react";
import "./catalogList.css";
import { useDispatch, useSelector } from "react-redux";
import CatalogItem from "../catalogItem";
import { filterdCatalogList } from "../../redux/actions";

function CatalogList() {
  const { catalog, catalogFilter, catalogActive, filteredCatalog, search } =
    useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    if (catalog.length) {
      dispatch(filterdCatalogList(catalog, catalogFilter, search));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catalogFilter, search]);

  let clas = "catalog-list";
  clas += catalogActive
    ? " grid grid-cols-12 gap-x-[30px] gap-y-[40px] catalog-list active"
    : " grid grid-cols-6 gap-x-[30px] gap-y-[40px] catalog-list active";

  return filteredCatalog ? (
    <div className={clas}>
      {filteredCatalog.map((elem) => (
        <CatalogItem key={elem.id} {...elem} />
      ))}
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default CatalogList;
