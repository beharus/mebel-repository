import React from "react";
import { Link } from "react-router-dom";

function Button({ text = "", href = "/" }) {
  return (
    <Link
      className=" w-fit group bg-[#FF9619] py-[12px] px-[16px]  md:py-[13px] md:px-[20px] duration-200 hover:bg-[#5B5B5B]  text-[#fff] "
      to={href}
    >
      <button className=" text-base uppercase font-raleway font-bold">
        {text}
      </button>
    </Link>
  );
}

export default Button;
