// import React from 'react';
import logo from "../../assets/logo2.png";

const RequestCallback = () => {
  return (
    <div className="my-10 md:my-16 lg:my-32 px-4 md:px-10 lg:px-20">
      <div className="px-4 md:px-0 lg:px-20 py-16 border flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-32 items-center">
        <div className="flex-1">
          <img className="" src={logo} alt="logo" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl text-center lg:text-start font-semibold mb-4">Request a Callback</h3>
          <p className="text-base text-center lg:text-start lg:font-semibold mb-10 md:mb-10 lg:mb-16">
            Submit your details, and we arrange a free, no-obligation callback
            at a time to suit you.
          </p>
          <div>
            <form action="">
              <div className=" flex flex-col lg:flex-row  md:mt-4 lg:my-4 lg:gap-6">
                <div className=" w-full lg:w-1/2">
                  <input
                    className="w-full py-3 text-[#000] outline-none border-b border-[#DDD] placeholder-[#778997] "
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full name"
                  />
                </div>
                <div className=" w-full lg:w-1/2">
                  <input
                    className="w-full py-3 text-[#000] outline-none border-b border-[#DDD] placeholder-[#778997] "
                    type="text"
                    name="telephone"
                    id="telephone"
                    placeholder="Telephone"
                  />
                </div>
              </div>
              <div className=" flex flex-col lg:flex-row mb-8 lg:gap-6">
                <div className=" w-full lg:w-1/2">
                  <input
                    className="w-full py-3 text-[#000] outline-none border-b border-[#DDD] placeholder-[#778997] "
                    type="text"
                    name="callback"
                    id="callback"
                    placeholder="Callback date"
                  />
                </div>
                <div className=" w-full lg:w-1/2">
                  <input
                    className="w-full py-3 text-[#000] outline-none border-b border-[#DDD] placeholder-[#778997] "
                    type="text"
                    name="time"
                    id="time"
                    placeholder="Prefered time"
                  />
                </div>
              </div>
              <div className="text-center">
                <input
                  className="w-full py-4 cursor-pointer font-semibold md:font-medium bg-[#1C2946] text-[#B5E6EA]"
                  type="submit"
                  value="REQUEST A CALLBACK "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCallback;
