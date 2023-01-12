import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { filterdCatalogList } from "../../redux/actions";

function New() {
  const { catalog, filteredCatalog, catalogFilter, search } = useSelector(
    (state) => state.catalog
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterdCatalogList(catalog, catalogFilter, search));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catalogFilter, search]);

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return filteredCatalog[0] ? (
    <div className="new container">
      <h1>Новинки</h1>
      <Slider {...settings}>
        {filteredCatalog[0].map((item) => {
          return (
            <div
              key={item.id}
              className="group cursor-pointer group category-item lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-6"
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
                <h5 className=" font-raleway font-medium text-lg leading-[22px] uppercase duration-200 group-hover:text-[#ff9619] text-[#343434] mt-[22px] card-title text-center">
                  {item.price} UAH
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

export default New;
