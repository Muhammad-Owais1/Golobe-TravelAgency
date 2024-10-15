import React from "react";
import {
  HomeHeroImg,
  HomeHeroText,
  SydneyImg,
  BakuImg,
  MaléImg,
  ParisImg,
  NewYorkImg,
  LondonImg,
  TokyoImg,
  DubaiImg,
  IstanbulImg,
  FlightImg,
  HotelImg,
} from "../assets/images";
import FilterBox from "../components/FilterBox";
import CustomButton from "../components/CustomButton";
import { PaperPlane } from "../assets/icons";

export default function HomePage() {
  return (
    <div className="font-['Montserrat']">
      <div className="w-full px-[30px] md:absolute -z-10 top-[30px]">
        <div className="overflow-hidden rounded-3xl w-full aspect-[1380/599] flex items-center">
          <img
            className="brightness-75 w-full object-fill"
            src={HomeHeroImg}
            alt=""
          />
        </div>
        <div className="relative w-full h-full">
          <img
            src={HomeHeroText}
            className="absolute w-[50%] left-[50%] translate-x-[-50%] translate-y-[-200%]"
            alt=""
          />
        </div>
      </div>

      <div className="mt-[30%] pt-0 md:pt-[96px]">
        <FilterBox />

        <section className="w-full flex justify-center">
          <div className="max-w-[1136px] w-[90vw] flex flex-col items-center gap-[16px]">
            <div className="flex justify-between gap-3 items-center flex-wrap w-full mb-28">
              <div>
                <h1 className="font-semibold text-[32px]">
                  Plan your perfect trip
                </h1>
                <p className="text-[#112211] text-[16px]">
                  Search Flights & Places Hire to our most popular destinations
                </p>
              </div>
              <CustomButton
                text="See More Places"
                style="border-[1px] border-[#8DD3BB] w-[150px]"
              />
            </div>
            <div className="flex justify-center items-center gap-[16px] flex-wrap max-w-[1136px] w-[90vw]">
              {[
                { name: "Istanbul, Turkey", img: IstanbulImg },
                { name: "Sydney, Australia", img: SydneyImg },
                { name: "Baku, Azerbaijan", img: BakuImg },
              ].map((place, index) => (
                <div
                  key={index}
                  className="bg-white w-[368px] h-[122px] rounded-lg flex items-center justify-between gap-[16px] p-[16px]"
                >
                  <img src={place.img} className="w-[90px]" alt={place.name} />
                  <div className="w-full flex flex-col justify-between items-start">
                    <p className="font-semibold text-[#112211] text-[16px]">
                      {place.name}
                    </p>
                    <p className="text-[17px]">Flights . Hotels . Resorts</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-[16px] flex-wrap max-w-[1136px] w-[90vw]">
              {[
                { name: "Malé, Maldives", img: MaléImg },
                { name: "Paris, France", img: ParisImg },
                { name: "New York, US", img: NewYorkImg },
              ].map((place, index) => (
                <div
                  key={index}
                  className="bg-white w-[368px] h-[122px] rounded-lg flex items-center justify-between gap-[16px] p-[16px]"
                >
                  <img src={place.img} className="w-[90px]" alt={place.name} />
                  <div className="w-full flex flex-col justify-between items-start">
                    <p className="font-semibold text-[#112211] text-[16px]">
                      {place.name}
                    </p>
                    <p className="text-[17px]">Flights . Hotels . Resorts</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-[16px] flex-wrap max-w-[1136px] w-[90vw]                 ">
              {[
                { name: "London, UK", img: LondonImg },
                { name: "Tokyo, Japan", img: TokyoImg },
                { name: "Dubai, UAE", img: DubaiImg },
              ].map((place, index) => (
                <div
                  key={index}
                  className="bg-white w-[368px] h-[122px] rounded-lg flex items-center justify-between gap-[16px] p-[16px]"
                >
                  <img src={place.img} className="w-[90px]" alt={place.name} />
                  <div className="w-full flex flex-col justify-between items-start">
                    <p className="font-semibold text-[#112211] text-[16px]">
                      {place.name}
                    </p>
                    <p className="text-[17px]">Flights . Hotels . Resorts</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center mt-28">
          <div className="max-w-[1136px] w-[90vw] flex flex-wrap gap-[16px] justify-center items-center">
            <div className="relative">
              <img
                src={FlightImg}
                className="brightness-75 w-[560px] min-w-[360px]"
                alt=""
              />
              <div className="absolute top-[45%] sm:top-[60%] w-full flex flex-col items-center justify-center gap-3">
                <h2 className="text-white text-[40px] font-bold">Flights</h2>
                <p className="text-[16px] text-white w-[80%] text-center">
                  Search Flights & Places Hire to our most popular destinations
                </p>
                <CustomButton
                  style="bg-[#8DD3BB] w-[144px] rounded-md"
                  text="Show Flights"
                  icon={PaperPlane}
                />
              </div>
            </div>
            <div className="relative">
              <img
                src={HotelImg}
                className="brightness-75 w-[560px] min-w-[360px]"
                alt=""
              />
              <div className="absolute top-[45%] sm:top-[60%] w-full flex flex-col items-center justify-center gap-3">
                <h2 className="text-white text-[40px] font-bold">Hotels</h2>
                <p className="text-[16px] text-white w-[80%] text-center">
                  Search hotels & Places Hire to our most popular destinations
                </p>
                <CustomButton
                  style="bg-[#8DD3BB] w-[144px] rounded-md"
                  text="Show Hotels"
                  icon={PaperPlane}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
