import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { filterdCatalogList } from "../../redux/actions";
import Button from "../button/Button";
import CatalogMenuItem from "../catalogMenuItem";

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
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 25000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return filteredCatalog[0] ? (
    <div className="new container">
      <div className=" container max-w-[1444px] mx-auto mt-[80px] lg:pt-[160px] lg:mt-[200px] px-[9.5%]">
        <h2 className="text-[#343434] font-bold text-xl lg:text-4xl leading-[38.5px] font-raleway mb-[30px] md:mb-[90px]">
          <span className=" text-[#ff9619]">Н</span>овинки
        </h2>

        <div className="news-carousel">
          <Slider {...settings}>
            {filteredCatalog[0].map((item) => {
              return (
                <div
                  key={item.id}
                  className="group px-[11%] cursor-pointer group category-item lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-6"
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
                    <h5 className=" font-openSans font-medium text-lg leading-[22px] uppercase duration-200 group-hover:text-[#ff9619] text-[#ff9619] mt-[5px] card-title text-center">
                      {item.price} UAH
                    </h5>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className=" flex justify-center mt-[40px] md:mt-[60px] mb-[54px]">
          <Button text="перейти в КАталог" />
        </div>
      </div>
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default New;
