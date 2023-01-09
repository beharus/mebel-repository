import React from "react";

function Button(props) {
  return (
    <a
      className=" w-fit group bg-[#FF9619] py-[12px] px-[16px]  md:py-[13px] md:px-[20px] duration-200 hover:bg-white border-[1px] border-[#ff9619] text-[#fff] hover:text-[#ff9619]"
      href="!#"
    >
      <button className="uppercase font-raleway font-bold">{props.text}</button>
    </a>
  );
}

export default Button;
