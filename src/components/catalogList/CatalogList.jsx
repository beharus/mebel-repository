import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatalogItem from "../catalogItem";
import { filterdCatalogList } from "../../redux/actions";
import Button from "../button/Button";

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
    <div className=" mt-20">
      <div className="container grid grid-cols-12 gap-x-[30px] gap-y-[40px] mebel-list mb-[60px]">
        {filteredCatalog.map((elem) => (
          <CatalogItem key={elem.id} {...elem} />
        ))}
      </div>

      <div className=" flex justify-center mb-[160px]">
        <Button text="смотреть все" />
      </div>
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default MebelList;
