import React from "react";
import { HomeHeroImg, HomeHeroText } from "../assets/images";
import FilterBox from "../components/FilterBox";

export default function HomePage() {
  return (
    <div className="md:absolute -z-10 top-[30px] ">
      <div className="w-full px-[30px] relative">
        <div className="overflow-hidden rounded-3xl w-full aspect-[1380/599] flex items-center">
          <img
            className="brightness-75 w-full object-fill"
            src={HomeHeroImg}
            alt=""
          />
        </div>
        <img
          src={HomeHeroText}
          className="absolute w-[50%] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
          alt=""
        />
      </div>

      <FilterBox />
    </div>
  );
}
