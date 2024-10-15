import React from "react";
import {
  FlightHero,
  DottedWorldMap,
  MelbourneCardImg,
  ParisCardImg,
  LondonCardImg,
  ColumbiaCardImg,
  SrilankaImgsGrid,
} from "../assets/images";
import FilterBox from "../components/FilterBox";
import CustomButton from "../components/CustomButton";

export default function FlightPage() {
  return (
    <>
      <section>
        <img src={FlightHero} alt="" />
        <div className="pt-[50px]">
          <FilterBox />
        </div>
      </section>
      <section className="flex flex-col items-center gap-5 font-['Montserrat']">
        <div className="flex justify-between gap-3 items-center flex-wrap w-[90vw] max-w-[1136px]">
          <div>
            <h1 className="font-semibold text-[32px]">
              Let's go places together
            </h1>
            <p className="text-[#112211] text-[16px]">
              Discover the latest offers and news and start planning your next
              trip with us.
            </p>
          </div>
          <CustomButton
            text="See All"
            style="border-[1px] border-[#8DD3BB] w-[80px]"
          />
        </div>
        <img src={DottedWorldMap} alt="" />
      </section>
      <section className="flex flex-col items-center gap-5 mt-16 font-['Montserrat']">
        <div className="flex justify-between gap-3 items-center flex-wrap w-[90vw] max-w-[1136px]">
          <div>
            <h1 className="font-semibold text-[32px]">Fall into travel</h1>
            <p className="text-[#112211] text-[16px] w-auto max-w-[700px]">
              Going somewhere to celebrate this season? Whether you’re going
              home or somewhere to roam, we’ve got the travel tools to get you
              to your destination.
            </p>
          </div>
          <CustomButton
            text="See All"
            style="border-[1px] border-[#8DD3BB] w-[80px]"
          />
        </div>
        <div className="max-w-[1136px] w-[90vw] flex justify-between items-center gap-3 flex-wrap">
          <div className="relative m-auto mt-4">
            <img src={MelbourneCardImg} className="w-[270px]" alt="" />
            <div className="absolute bottom-5 w-[270px] px-6 flex flex-col gap-4">
              <div className="flex justify-between items-end ">
                <div>
                  <h1 className="text-[24px] font-semibold text-white">
                    Melbourne
                  </h1>
                  <p className="text-[14px] text-white">An amazing journey</p>
                </div>
                <h2 className="text-[24px] font-semibold text-white">$ 700</h2>
              </div>
              <CustomButton
                text="Book Flight"
                style="w-full bg-[#8DD3BB] rounded-md"
              />
            </div>
          </div>

          <div className="relative m-auto mt-4">
            <img src={ParisCardImg} className="w-[270px]" alt="" />
            <div className="absolute bottom-5 w-[270px] px-6 flex flex-col gap-4">
              <div className="flex justify-between items-end ">
                <div>
                  <h1 className="text-[24px] font-semibold text-white">
                    Melbourne
                  </h1>
                  <p className="text-[14px] text-white">An amazing journey</p>
                </div>
                <h2 className="text-[24px] font-semibold text-white">$ 700</h2>
              </div>
              <CustomButton
                text="Book Flight"
                style="w-full bg-[#8DD3BB] rounded-md"
              />
            </div>
          </div>

          <div className="relative m-auto mt-4">
            <img src={LondonCardImg} className="w-[270px]" alt="" />
            <div className="absolute bottom-5 w-[270px] px-6 flex flex-col gap-4">
              <div className="flex justify-between items-end ">
                <div>
                  <h1 className="text-[24px] font-semibold text-white">
                    Melbourne
                  </h1>
                  <p className="text-[14px] text-white">An amazing journey</p>
                </div>
                <h2 className="text-[24px] font-semibold text-white">$ 700</h2>
              </div>
              <CustomButton
                text="Book Flight"
                style="w-full bg-[#8DD3BB] rounded-md"
              />
            </div>
          </div>

          <div className="relative m-auto mt-4">
            <img src={ColumbiaCardImg} className="w-[270px]" alt="" />
            <div className="absolute bottom-5 w-[270px] px-6 flex flex-col gap-4">
              <div className="flex justify-between items-end ">
                <div>
                  <h1 className="text-[24px] font-semibold text-white">
                    Melbourne
                  </h1>
                  <p className="text-[14px] text-white">An amazing journey</p>
                </div>
                <h2 className="text-[24px] font-semibold text-white">$ 700</h2>
              </div>
              <CustomButton
                text="Book Flight"
                style="w-full bg-[#8DD3BB] rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 font-['Montserrat'] flex flex-col items-center gap-5 ">
        <div className="flex justify-between gap-3 items-center flex-wrap w-[90vw] max-w-[1136px]">
          <div>
            <h1 className="font-semibold text-[32px]">
              Let's go places together
            </h1>
            <p className="text-[#112211] text-[16px]">
              Discover the latest offers and news and start planning your next
              trip with us.
            </p>
          </div>
          <CustomButton
            text="See All"
            style="border-[1px] border-[#8DD3BB] w-[80px]"
          />
        </div>
        <div className="flex justify-between flex-wrap gap-3 w-[90vw] max-w-[1136px]">
          <div className="bg-[#8DD3BB] p-[24px] max-w-[500px] w-[90vw] rounded-lg m-auto flex flex-col gap-3">
            <div className="flex justify-between flex-wrap gap-2">
              <h1 className="text-[40px] font-semibold">
                Backpacking <br /> Sri Lanka
              </h1>
              <div className="bg-white rounded-md w-[68px] h-[62px] flex flex-col justify-center items-center">
                <p className="text-[14px]">From</p>
                <p className="text-[20px] font-semibold">$700</p>
              </div>
            </div>
            <div>
              <p className="text-[14px] pb-16">
                Traveling is a unique experience as it's the best way to unplug
                from the pushes and pulls of daily life. It helps us to forget
                about our problems, frustrations, and fears at home. During our
                journey, we experience life in different ways. We explore new
                places, cultures, cuisines, traditions, and ways of living.
              </p>
            </div>
            <CustomButton text="Book Flight" style="bg-white w-full" />
          </div>
          <div className="m-auto">
            <img src={SrilankaImgsGrid} className="w-[600px]" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
