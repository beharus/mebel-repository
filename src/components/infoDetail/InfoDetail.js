import React from "react";
import { useSelector } from "react-redux";
import Button from "../button/Button";

function InfoDetail() {
  const { infoDetail } = useSelector((state) => state.catalog);
  const { name, image, description } = infoDetail;

  return (
    <div className="row container my-[35px] mx-auto">
      <div className="col-lg-8">
        <img
          src={require(`../../images/${image}`)}
          className="img-fluid object-cover max-h-[380px] w-full max-w-[700px] h-full rounded-start"
          alt={image}
        />
      </div>
      <div className="col-lg-4">
        <div className="card-body">
          <h5 className="card-title text-[35px] font-bold leading-[52px] font-raleway mb-[30px]">
            {name}
          </h5>
          <h2 className=" font-raleway text-[18px] font-medium leading-[21px] capitalize text-[#343434] mb-[15px]">
            Коллекция: {/*{Modern}*/}
          </h2>
          <p className="card-text text-[18px] font-raleway leading-[27px] font-light">
            {description}
          </p>
          <p className=" text-[#ff9619] leading-[27px] text-xl font-semibold uppercase mt-[15px] mb-[30px]">
            от {/*65 000*/} uah
          </p>
          <div className=" mb-[200px]">
            <Button text="просчет стоимости" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoDetail;
