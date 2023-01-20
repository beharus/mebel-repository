import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

function LatestPublic(props) {
  const { filteredCatalog } = useSelector((state) => state.catalog);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 25000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return filteredCatalog[0] ? (
    <div className=" container">
      <div className="latest-public container px-[8%] md:px-[2%] mb-[160px]">
        <h2 className="text-[#343434] font-bold text-xl lg:text-4xl leading-[38.5px] font-raleway mb-[30px] md:mb-[80px]">
          <span className=" text-[#ff9619]">{props.firstLetter}</span>{props.header}
        </h2>
        <Slider {...settings}>
          {filteredCatalog[0].map((item) => {
            return (
              <div
                key={item.id}
                className="group px-1 cursor-pointer group category-item lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-6"
              >
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
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default LatestPublic;
