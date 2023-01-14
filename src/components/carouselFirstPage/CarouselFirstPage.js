import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../images/Post01.png";
import img2 from "../../images/Post1.png"
import img3 from "../../images/Post02.png";
import Button from "../button/Button";

export default class CarouselFirstPage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 15000,
      pauseOnHover: true,
    };
    return (
      <div className="carouselFirstPage w-full max-w-[870px]">
        <h2 className="hidden lg:block text-end font-raleway text-xl font-normal leading-[127.5%] text-[#fff] pb-[35px]">
          Основано в 1993 году
        </h2>
        <div className=" w-full">
          <Slider {...settings}>
            <div className=" w-full max-w-[870px]">
              <img src={img1} alt="" />
            </div>
            <div className=" w-full max-w-[870px]">
              <img src={img2} alt="" />
            </div>
            <div className=" w-full max-w-[870px]">
              <img src={img3} alt="" />
            </div>
          </Slider>
        </div>
        <div className="block lg:hidden mt-[20px]">
          <h2 className="text-center font-raleway text-xl font-normal leading-[127.5%] text-[#fff] py-[20px]">
            Основано в 1993 году
          </h2>
          <div className=" flex justify-center mb-[54px]">
            <Button text="перейти в КАталог" />
          </div>
        </div>
      </div>
    );
  }
}
