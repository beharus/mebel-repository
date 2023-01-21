import React from "react";
import { Link } from "react-router-dom";
import indiv from "../../images/indiv.png";
import Button from "../button/Button";
import "./indivMebel.css";

function IndivMebel() {
  return (
    <div className=" iniv-mebel relative lg:bg-transparent bg-no-repeat mt-[125px] mb-[90px] lg:mb-[160px] lg:mt-[195px]">
      <div className=" container">
        <div className=" container indivMebel mx-auto px-[9.5%] grid lg:flex justify-center flex-col lg:flex-row items-center gap-7">
          <div className=" absolute h-[70%] top-0 lg:h-full w-full lg:w-[75%] right-0 bg-[#5B5B5B] -z-30"></div>
          <div className=" absolute h-[50%] lg:h-[80%] bottom-[12%] right-0 lg:top-0 w-[60%] lg:w-[40%] lg:left-0 -z-30 bg-[#A9C2BE]"></div>
          <div className=" absolute right-0 lg:right-[5%] -top-[35px] bg-[#ff9619]">
            <p className="mt-[46px] mb-[12px] ml-[6px] mr-[26px] lg:mt-[50px] lg:mr-[60px] lg:ml-[11px] lg:mb-[33px] font-raleway font-normal leading-[18.75px] text-[15px] tracking-[0.245em] text-white">
              furniture
            </p>
          </div>
          <div className=" order-3 button-content flex justify-center lg:hidden">
            <Button text="перейти в КАталог" href="/model-2d" />
          </div>
          <div className=" flex img-content lg:mt-10 lg:-mb-10 w-full">
            <img className=" w-full" src={indiv} alt="" />
          </div>
          <div className=" text-content">
            <h2 className=" mt-[80px] text-[#fff] font-bold text-xl lg:text-4xl leading-[38.5px] font-raleway mb-[10px] lg:mb-[15px]">
              <span className=" text-[#ff9619]">И</span>ндивидуальная мебель
            </h2>
            <p className=" font-raleway font-medium leading-[25px] text-base lg:text-xl my-[10px] lg:my-[15px] tracking-widest text-white">
              Полный цикл производства.
            </p>
            <p className=" font-raleway font-light leading-[25px] mb-[39px] lg:mb-0 text-sm lg:text-lg tracking-widest text-white">
              Качество мягкой мебели начинается задолго до начала ее
              производства.
            </p>
            <div className="lg:block hidden mt-[30px]">
              <Link
                className=" w-fit group bg-[#FF9619] py-[12px] px-[16px]  md:py-[13px] md:px-[20px] duration-200 hover:bg-[#ffffff] hover:text-[#ff9619]  text-[#fff] "
                to="/model-2d"
              >
                <button className="uppercase font-raleway font-bold">
                  перейти в КАталог
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndivMebel;
