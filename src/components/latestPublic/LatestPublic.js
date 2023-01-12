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
    <div className="latest-public container">
      <h1>Последние публикации</h1>
      <Slider {...settings}>
        {filteredCatalog.map((item) => {
          return <CatalogItem key={item.id} {...item} />;
        })}
      </Slider>
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default LatestPublic;
