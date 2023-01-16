import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import CatalogMenuItem from "../catalogMenuItem";

function CatalogMenu() {
  const { catalog } = useSelector((state) => state.catalog);
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 15000,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 15000,
          autoplay: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 15000,
          autoplay: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 800,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 15000,
          autoplay: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 15000,
          autoplay: true,
          cssEase: "linear",
        },
      },{
        breakpoint: 400,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 15000,
          autoplay: true,
          cssEase: "linear",
        },
      },
    ],
  };

  return catalog ? (
    <div className="catalog-menu px-[8%] md:px-[2%] container mx-auto">
      <Slider {...settings}>
        {catalog.map((item) => {
          return <CatalogMenuItem key={item.id} {...item} />;
        })}
      </Slider>
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default CatalogMenu;
