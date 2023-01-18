import React from "react";
import Button from "../button/Button";
import CarouselFirstPage from "../carouselFirstPage";

function Main() {
  return (
    <div className=" bg-[#CCB2A3]">
      <div className=" container ">
        <div className="lg:mx-5 px-[2%] mx-auto block lg:flex justify-center items-center lg:pb-16 py-9">
          <div className=" mx-2">
            <h1 className=" font-raleway capitalize font-semibold leading-[110%] text-[25px] mb-[30px] lg:text-[40px] text-white">
              <span className=" text-[#ff9619]">Л</span>учная Жизнь, <br />
              Созданная Для Вас!
            </h1>
            <div className=" mt-[73px] hidden lg:block">
              <Button text="перейти в Каталог" href="/model-2D" />
            </div>
          </div>
          <div className=" w-full lg:w-10/12 justify-self-end lg:-mb-[200px]">
            <CarouselFirstPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
