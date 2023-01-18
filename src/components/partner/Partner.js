import React from "react";
import Slider from "react-slick";

function Partner() {
  const setting = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 25000,
    dots: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 824,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div>
      <div className=" mt-[160px] mb-[115px]">
        <div className="">
          <div className="mx-auto">
            <h2 className="mx-auto container px-[2%] text-[#343434] font-bold text-xl lg:text-4xl leading-[38.5px] font-raleway mb-[30px] md:mb-[80px]">
              <span className=" text-[#ff9619]">Н</span>аши партнеры
            </h2>
          </div>
          <div className="relative">
            <div className=" container">
              <div className=" px-[2%] md:px-[2%] grid lg:grid-cols-4 gap-[30px] items-center justify-between grid-cols-1 py-[28px]">
                <div className=" absolute left-0 w-full lg:w-[70%] bg-[#5B5B5B] top-0 h-full -z-10"></div>
                <div className="absolute lg:w-[100px] w-[46px] h-[46px] lg:h-[80px] bg-[#ff9619] lg:-top-[34px] -z-[1] -top-[23px] right-[2%] lg:right-[44%]"></div>
                <div className=" absolute bg-[#A9C2BE] lg:bg-[#CCB2A3] lg:right-0 lg:left-auto left-0 bottom-[-100px] lg:bottom-auto lg:top-0 -z-10 w-[80%] sm:w-[60%] lg:w-[40%] h-[35%] sm:h-[50%] lg:h-[75%]"></div>
                <div className=" container lg:col-span-2 col-span-1">
                  <p className=" font-raleway font-medium leading-[25px] text-base md:text-xl xl:text-xl mb-[15px] lg:mb-[25px] tracking-widest text-white">
                    Компании сотрудничают с нами по всему миру
                  </p>
                  <p className=" xl:mb-[15px] mb-[20px] lg-[0] font-raleway font-light leading-[27px] lg:mb-0 text-sm md:text-lg xl:text-lg tracking-widest text-white">
                    На данный момент дилерская сеть фабрики «Экми-Мебель»
                    насчитывает более 30 салонов по всей Украине. Сейчас мы
                    заинтересованы в расширении сети.
                  </p>
                  <p className=" pb-[65px] lg:pb-0 font-raleway font-light leading-[27px] lg:mb-0 text-sm md:text-lg xl:text-lg tracking-widest text-white">
                    Основным преимуществом фабрики является изготовление любого
                    индивидуального изделия, мягкой мебели и аксессуаров из
                    наших основных коллекций..
                  </p>
                </div>
                <div className=" lg:col-span-2 col-span-1 -mb-[50px]">
                  <img
                    className=" w-full h-full"
                    src={require(`../../images/partners-img.png`)}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto container mt-[140px] mb-[160px]">
        <div className=" flex justify-center px-[2%] container ">
          <img src={require('../../images/sponsor.png')} alt="" />
        </div>
      </div>
      <div className="sponsor-carousel container mx-auto">
        <div className=" px-[2%] sm:px-[2%] container mb-[90px] md:mb-[260px]">
          <Slider {...setting}>
            <div className=" h-full px-1 md:px-2 w-full"><img className=" w-full" src={require('../../images/sponsor-carousel1.png')} alt="" /></div>
            <div className=" h-full px-1 md:px-2 w-full"><img className=" w-full" src={require('../../images/sponsor-carousel2.png')} alt="" /></div>
            <div className=" h-full px-1 md:px-2 w-full"><img className=" w-full" src={require('../../images/sponsor-carousel3.png')} alt="" /></div>
            <div className=" h-full px-1 md:px-2 w-full"><img className=" w-full" src={require('../../images/sponsor-carousel4.png')} alt="" /></div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Partner;
