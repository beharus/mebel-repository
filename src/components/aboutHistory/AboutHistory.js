import React from "react";
import history from "../../images/history.png";

function History() {
  return (
    <div className="">
      <div className=" container mx-auto">
        <h2 className=" px-[2%] text-[#343434] font-bold text-xl lg:text-4xl leading-[38.5px] font-raleway mb-[30px] md:mb-[80px]">
          <span className=" text-[#ff9619]">Н</span>аша история
        </h2>
        <div className=" px-[2%] md:px-0 md:mx-[2%] bg-[#5b5b5b] mb-[300px] md:mb-0 md:bg-transparent md:h-[543px] pb-[26px] relative md:pt-[66px]">
          <div className=" md:ml-0 max-w-[600px] w-full md:px-[42px] py-[50px] md:bg-[#5B5B5B] font-raleway">
            <h3 className=" md:text-xl text-white tracking-widest text-base leading-[25px] font-medium">
              Наработки длинной в 25 лет
            </h3>
            <p className=" text-white font-light tracking-widest text-sm md:text-lg leading-[24px] mt-[25px]">
              Каждый производитель заявляет, что делает все для своих
              покупателей, но не каждый производитель способен подтвердить свои
              заявления многолетней историей{" "}
            </p>
          </div>
          <img
            className="-mb-[200px] sm:-mb-[260px] md:px-0 mx-auto md:h-full md:max-w-[800px] max-w-[550px] w-full md:absolute z-20 md:-z-10 md:top-0 md:right-0 md:left-auto"
            src={history}
            alt=""
          />
        </div>
      </div>
      <div className=" container mx-auto">
        <div className=" mx-auto px-[2%] md:flex grid col-span-2 justify-between items-center my-[80px]">
          <p className=" col-span-1 mt-40px justify-self-start order-2 md:order-first leading-[32px] font-raleway text-[#343434] text-[25px] font-light">1993</p>
          <p className=" col-span-2 sm:order-first text-center md:order-2 font-raleway text-[75px] sm:text-[111px] md:text-[144px] leading-[150%] font-semibold text-[#3434341A]">25 лет</p>
          <p className=" col-span-1 mt-40px justify-self-end order-3 md:order-3 leading-[32px] font-raleway text-[#343434] text-[25px] font-light">2021</p>
        </div>
      </div>
    </div>
  );
}

export default History;
