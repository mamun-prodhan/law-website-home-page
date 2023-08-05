import React from 'react';
import image1 from "../../assets/warning.svg";
import whatsapp from "../../assets/whatsapp2.svg";
import email from "../../assets/email2.svg";
import call from "../../assets/call2.svg";

const HelpLine = () => {
  return (
    <div className="md:px-10 lg:px-20 mb-10 md:mb-16 lg:mb-32">
      <div className="px-4 md:px-10 lg:px-20 py-12 flex-col lg:flex-row flex items-center justify-between bg-[#0F1B33]">
        <div className="lg:flex">
          <img className="mx-auto lg:mx-0" src={image1} alt="" />
          <div className="text-[#FFF] text-center lg:text-start mt-3 lg:mt-0 lg:ms-20">
            <p className="text-base mb-3">NEED URGENT HELP?</p>
            <h3 className="text-xl lg:text-3xl">
              Call our 24 hour emergency helpline:
              <span className="text-[#B5E6EA]"> 07902 169 333</span>
            </h3>
          </div>
        </div>
        <div className="flex mt-10 text-[#B5E6EA]">
          <div className="flex flex-col items-center  mr-5">
            <img className="" src={whatsapp} alt="whatsapp" />
            <p className="mt-1 text-base">WhatsApp</p>
          </div>
          <div className="flex flex-col items-center mr-8">
            <img className="" src={email} alt="whatsapp" />
            <p className="mt-2 text-base">Email</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={call} alt="whatsapp" />
            <p className="mt-2 text-base">Call us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpLine;
