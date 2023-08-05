import React from 'react';
import logo from "../../assets/logo.png";
import banner from "../../assets/banner.png";
import { BsArrowRight } from "react-icons/bs";
import whatsapp from "../../assets/whatsapp.svg";
import email from "../../assets/email.svg";
import call from "../../assets/call.svg";
import brandImage from '../../assets/brand.svg';

const Header = () => {
  return (
    <div>
      {/* image div */}
      <div className="w-full bg-[#1B2946]">
        <div className="ps-0 md:ps-10 lg:ps-14 pt-8 md:pt-10 lg:pt-14 pb-3 ">
          <img
            className="mx-auto md:mx-0 lg:mx-0 w-[104px] md:w-[134px] lg:w-[154px]"
            src={logo}
            alt="logo"
          />
        </div>
        <div>
          <img className="w-[100%]" src={banner} alt="banner" />
        </div>
      </div>
      {/* text div */}
      <div className="flex flex-col md:flex-row">
        <div className="py-8 md:py-10 lg:py-16 ps-4 md:ps-10 lg:ps-16 flex-1">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-10 md:mb-12 lg:mb-24">
            GET IMMEDIATE <br /> ENGAGEMENT AND YOUR <br /> BEST CHANCE OF
            <br /> ACQUITTAL
          </h2>
          <button className="text-base flex items-center px-6 md:px-6 lg:px-8 py-4 md:py-4 lg:py-6 text-[#FFF] bg-[#1C2946]">
            <span className="me-8 md:me-10 lg:me-16">LETS TALK IT OVER</span>
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
        <div className="py-8 md:py-10 lg:py-16 ps-4 md:ps-10 lg:ps-16 flex-1 bg-[#1C2946] text-[#FFF] relative">
          <img className='hidden lg:block absolute right-10 bottom-10' src={brandImage} alt="" />
          <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-8 md:mb-10 lg:mb-16">
            EMERGENCY?
          </h2>
          <p className="text-lg md:text-lg lg:text-2xl text-[#B5E6EA] mb-2 md:mb-2 lg:mb-6">
            Call 24 hours a day , 7 days a week .
          </p>
          <p className="text-lg md:text-xl lg:text-3xl underline mb-8 md:mb-10 lg:mb-20 font-medium">
            0121 345 9067
          </p>
          <div className="text-base">
            <p className="text-sm md:text-sm lg:text-xl">CONTACT US NOW</p>
            <div className="flex items-center mt-4">
              <div className="flex flex-col items-center  mr-5">
                <img className="" src={whatsapp} alt="whatsapp" />
                <p className="mt-1 text-sm md:text-sm lg:text-xl">WhatsApp</p>
              </div>
              <div className="flex flex-col items-center mr-8">
                <img className="" src={email} alt="whatsapp" />
                <p className="mt-2 text-sm md:text-sm lg:text-xl">Email</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={call} alt="whatsapp" />
                <p className="mt-2 text-sm md:text-sm lg:text-xl">Call us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
