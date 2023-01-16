import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CatalogItem({ name, image, description }) {
  const { catalogActive } = useSelector((state) => state.catalog);

  return catalogActive ? (
    <div className="group cursor-pointer group category-item lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-6">
      <Link to={`/model-3d/${name}`}>
        <div className="cursor-pointer w-full relative">
          <img
            src={require(`../../images/${image}`)}
            className="object-cover w-full"
            alt="img"
          />
        </div>
        <div className="card-footer">
          <h5 className=" font-raleway font-medium text-lg leading-[22px] uppercase duration-200 group-hover:text-[#ff9619] text-[#343434] mt-[22px] card-title text-center">
            {name}
          </h5>
        </div>
      </Link>
    </div>
  ) : (
    <div className="bg-[#F2F3F5] px-[2%] py-[15px] grid grid-cols-1 sm:grid-cols-2 justify-between items-center category-item lg:col-span-3 sm:col-span-6 col-span-6">
      <div className=" col-span-1 gap-5 w-full flex justify-center items-center cursor-pointer relative">
        <img
          src={require(`../../images/${image}`)}
          className="object-cover w-10/12"
          alt="img"
        />
      </div>
      <div className=" col-span-1 gap-5 card-footer font-raleway">
        <h5 className="px-[8%] sm:px-0 font-raleway font-medium text-lg leading-[22px] uppercase text-[#4B4844] mb-[15px] card-title">
          {name}
        </h5>
        <p className="px-[8%] sm:px-0 pb-10 card-text tracking-widest font-light text-xs leading-[127.5%] text-[#4b4844]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CatalogItem;
