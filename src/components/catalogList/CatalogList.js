import React, { useEffect } from "react";
import "./catalogList.css";
import { useDispatch, useSelector } from "react-redux";
import CatalogItem from "../catalogItem";
import { filterdCatalogList } from "../../redux/actions";
import Button from "../button/Button";
import Slider from "react-slick";
import { setDIndex } from "../../redux/reducers/catalog_slice";

function CatalogList() {
  const {
    catalog,
    catalogFilter,
    catalogActive,
    filteredCatalog,
    search,
    dIndex,
  } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (catalog.length) {
      dispatch(filterdCatalogList(catalog, catalogFilter, search));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catalogFilter, search]);

  let clas = "catalog-list mx-auto container grid gap-x-[30px] gap-y-[40px]";
  clas += catalogActive ? " grid-cols-12" : " grid-cols-6";

  return filteredCatalog[0] ? (
    <div className="mx-auto container">
      <div className={clas}>
        {filteredCatalog[dIndex].map((elem) => (
          <CatalogItem key={elem.id} {...elem} />
        ))}
      </div>
      <div className=" pager-item w-1/12 mt-[60px] text-center mx-auto">
        <Slider {...settings}>
          {filteredCatalog.map((_, index) => {
            return (
              <div
                key={index}
                className=" font-light text-xl leading-[22px] cursor-pointer hover:text-[#343434] hover:font-medium duration-200 text-[#34343480]"
              >
                <span onClick={() => dispatch(setDIndex(index))}>
                  {index + 1}
                </span>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="my-[80px] flex justify-center">
        <Button text="смотреть все" />
      </div>
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default CatalogList;
