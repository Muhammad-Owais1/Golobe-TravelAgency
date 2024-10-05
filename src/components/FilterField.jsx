import React from "react";

export default function FilterField({ type, title, width, icon, inputType }) {
  if (type === "DoubleDropDown") {
    return (
      <fieldset
        className={`relative h-[56px] px-4 border-[1px] border-black rounded-lg flex items-center justify-between m-2 ${width}`}
      >
        <legend className="absolute -top-3 left-2 bg-white px-2 text-[14px]">
          {title}
        </legend>
        <div className="flex items-center justify-center gap-2">
          <select className="bg-transparent appearance-none">
            <option value="">pakistan</option>
            <option value="">pakistan</option>
            <option value="">pakistan</option>
          </select>
          <p>-</p>
          <select className="bg-transparent appearance-none">
            <option value="">pakistan</option>
            <option value="">pakistan</option>
            <option value="">pakistan</option>
          </select>
        </div>
        {icon && <img src={icon} className="w-[15px]" alt="" />}
      </fieldset>
    );
  } else if (type === "SingleDropDown") {
    return (
      <fieldset
        className={`relative h-[56px] px-4 border-[1px] border-black rounded-lg flex items-center justify-between m-2 ${width}`}
      >
        <legend className="absolute -top-3 left-2 bg-white px-2 text-[14px]">
          {title}
        </legend>
        <div className="flex items-center justify-center gap-2">
          <select className="bg-transparent appearance-none">
            <option value="">pakistan</option>
            <option value="">pakistan</option>
            <option value="">pakistan</option>
          </select>
        </div>
        {icon && <img src={icon} className="w-[15px]" alt="" />}
      </fieldset>
    );
  } else if (type === "DoubleInput") {
    return (
      <fieldset
        className={`relative h-[56px] px-4 border-[1px] border-black rounded-lg flex items-center justify-between m-2 ${width}`}
      >
        <legend className="absolute -top-3 left-2 bg-white px-2 text-[14px]">
          {title}
        </legend>
        <div className="flex items-center justify-center gap-2">
          <input type={inputType} className="appearance-none" />
          <p>-</p>
          <input type={inputType} className="appearance-none" />
        </div>
        {icon && <img src={icon} className="w-[15px]" alt="" />}
      </fieldset>
    );
  } else {
    return (
      <fieldset
        className={`relative h-[56px] px-4 border-[1px] border-black rounded-lg flex items-center justify-between m-2 ${width}`}
      >
        <legend className="absolute -top-3 left-2 bg-white px-2 text-[14px]">
          {title}
        </legend>
        <div className="flex items-center justify-center gap-2">
          <input type={inputType} className="appearance-none" />
        </div>
        {icon && <img src={icon} className="w-[15px]" alt="" />}
      </fieldset>
    );
  }
}
