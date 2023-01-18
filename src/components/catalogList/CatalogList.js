import React, { useEffect } from "react";
import "./catalogList.css";
import { useDispatch, useSelector } from "react-redux";
import CatalogItem from "../catalogItem";
import { filterdCatalogList } from "../../redux/actions";
import Button from "../button/Button";
import Slider from "react-slick";

function CatalogList() {
  const { catalog, catalogFilter, catalogActive, filteredCatalog, search } =
    useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  const settings = {
    speed: 500,
    infinite:false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (catalog.length) {
      dispatch(filterdCatalogList(catalog, catalogFilter, search));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catalogFilter, search]);

  let clas = "catalog-list";
  clas += catalogActive
    ? " mx-auto container grid grid-cols-12 gap-x-[30px] gap-y-[40px] active"
    : " mx-auto container grid grid-cols-6 gap-x-[30px] gap-y-[40px] active";

  return filteredCatalog[0] ? (
    <div className="mx-auto container">
      <div className={clas}>
        {filteredCatalog[0].map((elem) => (
          <CatalogItem key={elem.id} {...elem} />
        ))}
      </div>
      <div className=" pager-item w-1/12 mt-[60px] text-center mx-auto">
        <Slider {...settings}>
          <div className=" font-light text-xl leading-[22px] cursor-pointer hover:text-[#343434] hover:font-medium duration-200 text-[#34343480]">
            <span>1</span>
          </div>
          <div className=" font-light text-xl leading-[22px] cursor-pointer hover:text-[#343434] hover:font-medium duration-200 text-[#34343480]">
            <span>2</span>
          </div>
          <div className=" font-light text-xl leading-[22px] cursor-pointer hover:text-[#343434] hover:font-medium duration-200 text-[#34343480]">
            <span>3</span>
          </div>
          <div className=" font-light text-xl leading-[22px] cursor-pointer hover:text-[#343434] hover:font-medium duration-200 text-[#34343480]">
            <span>4</span>
          </div>
          <div className=" font-light text-xl leading-[22px] cursor-pointer hover:text-[#343434] hover:font-medium duration-200 text-[#34343480]">
            <span>5</span>
          </div>
          <div className=" font-light text-xl leading-[22px] cursor-pointer hover:text-[#343434] hover:font-medium duration-200 text-[#34343480]">
            <span>6</span>
          </div>
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
