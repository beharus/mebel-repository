import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import CatalogItem from "../catalogItem/CatalogItem";

function LatestPublic() {
  const { filteredCatalog } = useSelector((state) => state.catalog);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
  };

  return filteredCatalog ? (
    <div className=" container">
      <div className="latest-public px-[9.5%] max-w-[1444px] container">
        <h2 className="text-[#343434] font-bold text-xl lg:text-4xl leading-[38.5px] font-raleway mb-[30px] md:mb-[80px]">
          <span className=" text-[#ff9619]">Н</span>аша история
        </h2>
        <Slider {...settings}>
          {filteredCatalog.map((item) => {
            return (
              <div className=" px-1">
                <CatalogItem key={item.id} {...item} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default LatestPublic;
