import React, { useState } from "react";
import { MailBoxImg, FooterLogo } from "../assets/images";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../assets/icons";
import CustomButton from "./CustomButton";

function Accordion({ title, children, isOpen, onClick }) {
  return (
    <div className="w-full flex flex-col tracking-wider gap-3 lg:hidden">
      <h3
        className="text-[16px] font-semibold cursor-pointer"
        onClick={onClick}
      >
        {title}
      </h3>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index); // Close if clicked again
  };

  return (
    <footer className="relative font-['Montserrat'] mt-20">
      <div className="bg-[#CDEAE1] flex justify-between p-[24px] rounded-2xl w-[90vw] max-w-[1136px] absolute left-[50%] -translate-x-[50%]">
        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-[44px] font-semibold leading-tight">
            Subscribe <br /> Newsletter
          </h1>
          <div>
            <p className="font-semibold text-[20px]">The Travel</p>
            <p className="text-[16px]">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
          </div>
          <div className="flex flex-col w-full sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Your email address"
              className="sm:w-[400px] w-full h-[56px] px-3 rounded-md"
            />
            <CustomButton
              style="sm:w-[104px] w-full text-white bg-[#112211] rounded-md h-[56px]"
              text="Subscribe"
            />
          </div>
        </div>
        <div className="relative w-[300px] h-[230px] lg:block hidden">
          <img
            className="absolute -bottom-[46px] left-[50%] -translate-x-[50%] max-w-[300px]"
            src={MailBoxImg}
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#8DD3BB] h-[800px] lg:h-[422px] w-full absolute -z-10 top-[150px] flex justify-center items-start lg:items-end pb-12">
        <div className="w-[90vw] max-w-[1136px] pt-[300px] lg:pt-0 flex flex-col lg:flex-row gap-4 justify-between">
          <div className="w-full lg:w-[156px] flex gap-3 flex-col items-center">
            <img src={FooterLogo} className="w-[120px]" alt="" />
            <div className="flex items-center gap-2 justify-center lg:justify-between">
              <img className="w-[18px]" src={FacebookIcon} alt="" />
              <img className="w-[18px]" src={TwitterIcon} alt="" />
              <img className="w-[18px]" src={YoutubeIcon} alt="" />
              <img className="w-[18px]" src={InstagramIcon} alt="" />
            </div>
          </div>

          {/* Accordion for smaller screens */}
          <Accordion
            title="Our Destinations"
            isOpen={openAccordion === 1}
            onClick={() => handleAccordionClick(1)}
          >
            <p className="text-[14px]">Canada</p>
            <p className="text-[14px]">Alaska</p>
            <p className="text-[14px]">France</p>
            <p className="text-[14px]">Iceland</p>
          </Accordion>

          <Accordion
            title="Our Activities"
            isOpen={openAccordion === 2}
            onClick={() => handleAccordionClick(2)}
          >
            <p className="text-[14px]">Northern Lights</p>
            <p className="text-[14px]">Cruising & sailing</p>
            <p className="text-[14px]">Multi-activities</p>
            <p className="text-[14px]">Kayaking</p>
          </Accordion>

          <Accordion
            title="Travel Blogs"
            isOpen={openAccordion === 3}
            onClick={() => handleAccordionClick(3)}
          >
            <p className="text-[14px]">Bali Travel Guide</p>
            <p className="text-[14px]">Sri Lanka Travel Guide</p>
            <p className="text-[14px]">Peru Travel Guide</p>
            <p className="text-[14px]">Bali Travel Guide</p>
          </Accordion>

          <Accordion
            title="About Us"
            isOpen={openAccordion === 4}
            onClick={() => handleAccordionClick(4)}
          >
            <p className="text-[14px]">Our Story</p>
            <p className="text-[14px]">Work with us</p>
          </Accordion>

          <Accordion
            title="Contact Us"
            isOpen={openAccordion === 5}
            onClick={() => handleAccordionClick(5)}
          >
            <p className="text-[14px]">Our Story</p>
            <p className="text-[14px]">Work with us</p>
          </Accordion>

          {/* Normal display for larger screens */}
          <div className="hidden lg:flex flex-row gap-4">
            <div className="w-[140px] flex flex-col tracking-wider gap-3">
              <h3 className="text-[16px] font-semibold">Our Destinations</h3>
              <p className="text-[14px]">Canada</p>
              <p className="text-[14px]">Alaska</p>
              <p className="text-[14px]">France</p>
              <p className="text-[14px]">Iceland</p>
            </div>

            <div className="w-[140px] flex flex-col tracking-wider gap-3">
              <h3 className="text-[16px] font-semibold">Our Activities</h3>
              <p className="text-[14px]">Northern Lights</p>
              <p className="text-[14px]">Cruising & sailing</p>
              <p className="text-[14px]">Multi-activities</p>
              <p className="text-[14px]">Kayaking</p>
            </div>

            <div className="w-[140px] flex flex-col tracking-wider gap-3">
              <h3 className="text-[16px] font-semibold">Travel Blogs</h3>
              <p className="text-[14px]">Bali Travel Guide</p>
              <p className="text-[14px]">Sri Lanka Travel Guide</p>
              <p className="text-[14px]">Peru Travel Guide</p>
              <p className="text-[14px]">Bali Travel Guide</p>
            </div>

            <div className="w-[140px] flex flex-col tracking-wider gap-3">
              <h3 className="text-[16px] font-semibold">About Us</h3>
              <p className="text-[14px]">Our Story</p>
              <p className="text-[14px]">Work with us</p>
            </div>

            <div className="w-[140px] flex flex-col tracking-wider gap-3">
              <h3 className="text-[16px] font-semibold">Contact Us</h3>
              <p className="text-[14px]">Our Story</p>
              <p className="text-[14px]">Work with us</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
