import React from "react";

function Partner() {
  return (
    <div className=" mt-[160px] mb-[115px]">
      <div className="">
        <div className=" container">
          <h2 className="container px-[9.5%] text-[#343434] font-bold text-xl lg:text-4xl leading-[38.5px] font-raleway mb-[30px] md:mb-[80px]">
            <span className=" text-[#ff9619]">Н</span>аши партнеры
          </h2>
        </div>
        <div className="relative">
          <div className=" container max-w-[1442px]">
            <div className="max-w-[1442px] px-[9.5%] grid lg:grid-cols-4 gap-[30px] items-center justify-between grid-cols-1 py-[28px]">
              <div className=" absolute left-0 w-full lg:w-[70%] bg-[#5B5B5B] top-0 h-full -z-10"></div>
              <div className="absolute lg:w-[100px] w-[46px] h-[46px] lg:h-[80px] bg-[#ff9619] lg:-top-[34px] -z-[1] -top-[23px] right-[2%] lg:right-[44%]"></div>
              <div className=" absolute bg-[#A9C2BE] lg:bg-[#CCB2A3] lg:right-0 lg:left-auto left-0 bottom-[-100px] lg:bottom-auto lg:top-0 -z-10 w-[60%] lg:w-[40%] h-[50%] lg:h-[75%]"></div>
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
                  индивидуального изделия, мягкой мебели и аксессуаров из наших
                  основных коллекций..
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
  );
}

export default Partner;
