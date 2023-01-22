import React from "react";
import "./catalogMenuItem.css";
import { useDispatch, useSelector } from "react-redux";
import { setCatalogFilter } from "../../redux/reducers/catalog_slice";

function CatalogMenuItem({ name, image }) {
  const { catalogFilter } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  const clas =
    name === catalogFilter
      ? "card-title text-center activeFilter"
      : "card-title text-center";
  return (
    <div
      className="w-full h-full "
      onClick={() => dispatch(setCatalogFilter(name))}
    >
      <div className="card category-item mx-2">
        <div className="">
          <img
            src={require(`../../images/${image}`)}
            className=" h-[140px]"
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

export default CatalogMenuItem;
