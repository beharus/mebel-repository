import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { filterdCatalogList } from "../../redux/actions";
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
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return filteredCatalog.length ? (
    <div className="new container">
      <h1>Новинки</h1>
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

export default New;
