import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

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
    <div className="latest-public container">
      <h1>Последние публикации</h1>
      <Slider {...settings}>
        {filteredCatalog.map((item) => {
          return (
            <div className="group cursor-pointer group category-item lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-6">
              <div className="cursor-pointer w-full relative">
                <img
                  src={require(`../../images/${item.image}`)}
                  className="object-cover w-full"
                  alt="img"
                />
              </div>
              <div className="card-footer">
                <h5 className=" font-raleway font-medium text-lg leading-[22px] uppercase duration-200 group-hover:text-[#ff9619] text-[#343434] mt-[22px] card-title text-center">
                  {item.name}
                </h5>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default LatestPublic;
