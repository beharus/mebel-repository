import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import CatalogMenuItem from "../catalogMenuItem/CatalogMenuItem";

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
    <div className="latest-public my-5 py-5">
      <h1>Последние публикации</h1>
      <Slider {...settings}>
        {filteredCatalog.map((item) => {
          return <CatalogMenuItem key={item.id} {...item} />;
        })}
      </Slider>
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default LatestPublic;
