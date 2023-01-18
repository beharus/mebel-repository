import React from "react";

function Button({ text = "", href = "/" }) {
  return (
    <a
      className=" w-fit group bg-[#FF9619] py-[12px] px-[16px]  md:py-[13px] md:px-[20px] duration-200 hover:bg-[#5B5B5B]  text-[#fff] "
      href={href}
    >
      <button className=" text-base uppercase font-raleway font-bold">
        {text}
      </button>
    </a>
  );
}

export default Button;
