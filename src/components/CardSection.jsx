import React from "react";

export default function CardSection() {
  return (
    <div>
      <h1 className="text-[32px] font-semibold text-start max-w-[1136px] w-[90vw]">
        Payment Methods
      </h1>
      <div className="max-w-[1136px] w-[90vw] bg-white rounded-lg py-[32px] px-[24px]">
        <div className="w-[380px] h-[212px] rounded-md p-[16px] bg-[#8DD3BB] flex flex-col justify-between">
          <div>
            <p className="text-xl">**** **** ****</p>
            <p className="text-[20px] font-semibold">1234</p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-xl">Valid Thru</p>
              <p className="text-[20px] font-semibold">02/27</p>
            </div>
            <h1 className="text-lg font-semibold">TRUE PAY</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
