import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Button from "../button/Button";

function InfoDetail() {
  const { infoDetail } = useSelector((state) => state.catalog);
  const { name, image, price, description } = infoDetail;

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 25000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          dots:true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          dots:true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          dots:true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="row container my-[80px] md:my-[160px] mx-auto">
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
              от {price} uah
            </p>
            <div className=" mb-[200px]">
              <Button text="просчет стоимости" />
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-[80px] md:mb-[160px] infodetail-carousel max-w-[1460px] mx-auto">
        <Slider {...settings}>
          <div className="">
            <img className=" py-[5px] px-[5px] xl:mx-auto" src={require('../../images/infodetails-img1.png')} alt="" />
            <img className=" py-[5px] px-[5px] " src={require('../../images/infodetails-img1.png')} alt="" />
          </div>
          <div className="">
            <img className=" py-[5px] px-[5px] xl:mx-auto" src={require('../../images/infodetails-img2.png')} alt="" />
            <img className=" py-[5px] px-[5px] " src={require('../../images/infodetails-img2.png')} alt="" />
          </div>
          <div className="">
            <img className=" py-[5px] px-[5px] xl:mx-auto" src={require('../../images/infodetails-img3.png')} alt="" />
            <img className=" py-[5px] px-[5px] " src={require('../../images/infodetails-img3.png')} alt="" />
          </div>
          <div className="">
            <img className=" py-[5px] px-[5px] xl:mx-auto" src={require('../../images/infodetails-img4.png')} alt="" />
            <img className=" py-[5px] px-[5px] " src={require('../../images/infodetails-img4.png')} alt="" />
          </div>
        </Slider>
      </div>
      <div className=""></div>
    </div>
  );
}

export default InfoDetail;
