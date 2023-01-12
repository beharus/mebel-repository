import React from "react";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CatalogItem({ name, image, description }) {
  const { catalogActive } = useSelector((state) => state.catalog);

  return catalogActive ? (
    <div className="group cursor-pointer group category-item lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-6">
      <Link to={`/model-3d/${name}`} >
        <div className="cursor-pointer w-full relative">
          <img
            src={require(`./images/${image}`)}
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
    <div className="bg-[#F2F3F5] px-[2%] py-[15px] grid grid-cols-2 justify-between items-center category-item lg:col-span-3 sm:col-span-6 col-span-6">
      <div className=" col-span-1 gap-5 w-full flex justify-center items-center cursor-pointer relative">
        <img
          src={require(`./images/${image}`)}
          className="object-cover w-10/12"
          alt="img"
        />
      </div>
      <div className=" col-span-1 gap-5 card-footer font-raleway">
        <h5 className=" font-raleway font-medium text-lg leading-[22px] uppercase text-[#4B4844] mb-[15px] card-title">
          {name}
        </h5>
        <p className="card-text tracking-widest font-light text-xs leading-[127.5%] text-[#4b4844]">
          {description}
        </p>
=======

function CatalogItem({ name, image }) {
  return (
    <div className="col">
      <div className="card category-item">
        <img
          src={require(`../../images/catalog_images/${image}`)}
          className="card-img-top img-fluid"
          alt="img"
        />
        <div className="card-body"></div>
        <div className="card-footer">
          <h5 className="card-title text-center">{name}</h5>
        </div>
>>>>>>> 93e7294 (redux and components added)
      </div>
    </div>
  );
}

export default CatalogItem;
