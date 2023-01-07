import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatalogItem from "../catalogItem";
import { filterdCatalogList } from "../../redux/actions";

function MebelList() {
  const { catalog, catalogFilter, filteredCatalog, search } = useSelector(
    (state) => state.catalog
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (catalog.length) {
      dispatch(filterdCatalogList(catalog, catalogFilter, search));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return filteredCatalog ? (
    <div className=" grid grid-cols-12 gap-x-[30px] gap-y-[40px] mebel-list">
      {filteredCatalog.map((elem) => (
        <CatalogItem key={elem.id} {...elem} />
      ))}
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default MebelList;
