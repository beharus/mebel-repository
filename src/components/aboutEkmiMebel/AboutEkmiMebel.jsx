import React from "react";

function AboutEkmiMebel(props) {
  return (
    <div>
      <div className="max-w-[1440px] container mx-auto mt-[160px]">
        <div className="max-w-[1440px] container mx-auto px-[9.5%] md:grid-cols-2 lg:grid-cols-3 justify-center gap-2 grid">
          <div className=" relative col-span-1">
            <div className=" absolute top-0 left-0 w-[105px] font-poppins leading-[196px] text-[#5A5A5A1A] font-bold text-[176px] self-start">1</div>
            <div className=" mt-[50px] ml-[55px] md:ml-[15%] font-raleway text-lg font-medium tracking-wider leading-[127.5%] text-[#343434]">
              Осуществляемые компанией «Экми-Мебель» постоянные инвестиции в
              сертификацию своей продукции, убедительно подтверждают лидерство
              компании на украинском рынке мягкой мебели.
            </div>
          </div>
          <div className=" relative col-span-1">
            <div className=" absolute top-0 left-0 w-[105px] font-poppins leading-[196px] text-[#5A5A5A1A] font-bold text-[176px] self-start">2</div>
            <div className=" mt-[50px] ml-[55px] md:ml-[15%] font-raleway text-lg font-medium tracking-wider leading-[127.5%] text-[#343434]">
              Фабрика «Экми-мебель» сертифицирована по системе менеджмента
              качества ISO 9001:2000 на соответствие международным стандартам,
              представительством «Бюро Веритас» в Украине.
            </div>
          </div>
          <div className=" relative col-span-1 justify-self-center">
            <div className=" absolute top-0 left-0 w-[105px] font-poppins leading-[196px] text-[#5A5A5A1A] font-bold text-[176px] self-start">3</div>
            <div className=" mt-[50px] ml-[55px] md:ml-[15%] font-raleway text-lg font-medium tracking-wider leading-[127.5%] text-[#343434]">
              Компания «Экми-Мебель» первой из украинских производителей мягкой
              мебели обеспечила свою мебель полноценной гарантией и первой
              обоснованно заявила о лучшем качестве производимой мебели.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutEkmiMebel;
