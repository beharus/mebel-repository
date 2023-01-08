import React from "react";
import { useSelector } from "react-redux";

function CatalogItem({ name, image, description }) {
  const { catalogActive } = useSelector((state) => state.catalog);

  return catalogActive ? (
    <div className="category-item">
      <div className="cursor-pointer w-full relative">
        <img
          src={require(`./images/${image}`)}
          className="object-cover w-full"
          alt="img"
        />
      </div>
      <div className="card-footer">
        <h5 className=" font-raleway font-medium text-lg leading-[22px] uppercase text-[#343434] mt-[22px] card-title text-center">
          {name}
        </h5>
      </div>
    </div>
  ) : (
    <div className="category-item">
      <div className="cursor-pointer w-full relative col-md-3">
        <img
          src={require(`./images/${image}`)}
          className="object-cover w-full"
          alt="img"
        />
      </div>
      <div className="card-footer col-md-3">
        <h5 className=" font-raleway font-medium text-lg leading-[22px] uppercase text-[#343434] mt-[22px] card-title text-center">
          {name}
        </h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default CatalogItem;
