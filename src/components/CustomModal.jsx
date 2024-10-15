import React from "react";
import ReactDOM from "react-dom";

export default function CustomModal({ children }) {
  return ReactDOM.createPortal(
    <div className="bg-[rgba(0,0,0,0.7)] fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center shadow-sm shadow-black font-['Montserrat']">
      <div className="w-[300px] bg-white rounded-lg p-5 flex flex-col items-left justify-center gap-3">
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
