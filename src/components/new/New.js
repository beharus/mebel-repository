import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import CatalogMenuItem from "../catalogMenuItem";

function New() {
  const { catalog } = useSelector((state) => state.catalog);
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

  return catalog ? (
    <div className="new">
      <h1>Новинки</h1>
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

export default New;
