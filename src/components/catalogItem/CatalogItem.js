import React from "react";

function CatalogItem({ name, image }) {
  return (
    <div className="cursor-pointer group lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-6">
      <div className=" mebel-item">
        <div className="w-full relative">
          <img
            src={require(`../../images/catalog_images/${image}`)}
            className="object-cover w-full"
            alt="img"
          />
        </div>
        <div className="card-footer">
          <h5 className="group-hover:text-[#FF9619] duration-200 font-raleway font-medium text-lg leading-[22px] uppercase text-[#343434] mt-[22px] card-title text-center">
            {name}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default CatalogItem;
