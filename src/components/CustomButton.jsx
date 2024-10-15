import React from "react";

export default function CustomButton({ style, text, icon, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`${style} flex items-center justify-center gap-2 h-[48px] font-medium text-[14px]`}
    >
      {icon && <img className="w-[14px]" src={icon} alt="" />}
      {text}
    </button>
  );
}
