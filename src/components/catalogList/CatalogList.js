import React, { useEffect } from "react";
import "./catalogList.css";
import { useDispatch, useSelector } from "react-redux";
import CatalogItem from "../catalogItem";
import { filterdCatalogList } from "../../redux/actions";
import Button from "../button/Button";

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
    ? " mx-auto container grid grid-cols-12 gap-x-[30px] gap-y-[40px] active"
    : " mx-auto container grid grid-cols-6 gap-x-[30px] gap-y-[40px] active";

  return filteredCatalog[0] ? (
    <div className="mx-auto container">
      <div className={clas}>
        {filteredCatalog[0].map((elem) => (
          <CatalogItem key={elem.id} {...elem} />
        ))}
      </div>
<<<<<<< Updated upstream
      <div className="my-[80px] flex justify-center">
        <Button text="смотреть все" />
      </div>
=======
>>>>>>> Stashed changes
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default CatalogList;
