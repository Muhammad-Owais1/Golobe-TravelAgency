import React, { useState } from "react";

const CustomInputField = ({
  title,
  inputType,
  width,
  value,
  onChange,
  notError,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className={`relative font-['Montserrat'] ${width}`}>
      <label
        className={`absolute left-3 top-3 bg-white px-1 transition-all duration-200 pointer-events-none ${
          isFocused || value
            ? `text-sm ${
                notError ? "text-[#8DD3BB]" : "text-red-500"
              } -translate-y-6 scale-90`
            : "text-gray-500"
        }`}
        htmlFor="inputField"
      >
        {title}
      </label>
      <input
        id="inputField"
        type={inputType}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value !== "")}
        onChange={onChange}
        className={`block w-full px-3 py-2 border rounded-md focus:outline-none ${
          notError
            ? "border-gray-300 focus:ring-2 focus:ring-[#8DD3BB]"
            : "border-red-500 focus:ring-2 focus:ring-red-500"
        }`}
        placeholder=" " // The placeholder is just a space to keep the label floating
      />
    </div>
  );
};

export default CustomInputField;
