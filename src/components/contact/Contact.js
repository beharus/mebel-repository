import React from "react";
import Button from "../button/Button";

function Contact() {
  return (
    <div className="bg-[#A9C2BE] m-0 p-0 ">
      <div className=" container">
        <div className=" mx-auto relative flex justify-center md:justify-end w-full">
          <img
            className=" left-[5%] md:block hidden xl:left-[15%] absolute top-0 bottom-0 h-full w-auto"
            src={require("../../images/post.png")}
            alt="post.png"
          />
          <div className=" relative z-10 max-w-[470px] w-full pt-[31px] pb-[17px] my-[31px] mx-[18px] md:mx-0 md:mr-[10%] bg-white px-[35px] md:px-[50px]">
            <img className=" hidden sm:block absolute top-[-21px] left-[-15%]" src={require('../../images/О.png')}/>
            <p className=" text-[#FF9619] leading-4 font-medium text-[10px] md:text-sm mb-[10px] md:mb-[15px]">
              Заполните форму
            </p>
            <h2 className=" uppercase font-bold text-[20px] md:text-[28px] leading-[33px]  font-raleway">
              остались вопросы?
            </h2>
            <form>
              <input
                className=" border-b border-[#D1D1D1] outline-none mt-[18px] mb-[4px] p-0 md:mt-[20px] md:mb-[5px] w-full placeholder-[#343434] font-normal leading-4 text-[10px] md:text-[14px] py-[5px]"
                type="text"
                placeholder="Ваше имя*"
              />
              <br />
              <input
                className=" border-b border-[#D1D1D1] outline-none mt-[18px] mb-[4px] p-0 md:mt-[20px] md:mb-[5px] w-full placeholder-[#343434] font-normal leading-4 text-[10px] md:text-[14px] py-[5px]"
                type="text"
                placeholder="Ваш номер телефона*"
              />
              <br />
              <input
                className=" border-b border-[#D1D1D1] outline-none mt-[18px] mb-[4px] p-0 md:mt-[20px] md:mb-[5px] w-full placeholder-[#343434] font-normal leading-4 text-[10px] md:text-[14px] py-[5px]"
                type="text"
                placeholder="Страна"
              />
              <br />
              <input
                className=" border-b border-[#D1D1D1] outline-none mt-[18px] mb-[4px] p-0 md:mt-[20px] md:mb-[25px] w-full placeholder-[#343434] font-normal leading-4 text-[10px] md:text-[14px] py-[5px]"
                type="text"
                placeholder="Комментарий"
              />
            </form>
            <div className="check flex gap-[10px] font-raleway font-normal text-[11px] text-[#343434]">
              <input type="checkbox" name="" id="" />
              <p>
                Подтверждая заказ, я принимаю условия пользовательского
                соглашения
              </p>
            </div>
            <div className=" flex mt-[30px] justify-center">
              <Button text="запросить звонок" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
