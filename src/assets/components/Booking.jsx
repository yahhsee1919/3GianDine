import { useState } from "react";
import { options } from "../../utils/constants";
import useScreenSize from "../../utils/useScreenSize";

function Booking() {
  const [selectedOpt, setSelectedOpt] = useState("Family Gathering");
  const windowSize = useScreenSize();
  const isLargeScreen = windowSize >= 1024;

  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 space-y-8 lg:flex-row lg:space-y-0 lg:space-x-20">
      {/* image */}
      <div className=" shadow-lg mb-8 lg:mb-0">
        {options.map((curr) => {
          return (
            <img
              src={
                curr.title === selectedOpt
                  ? isLargeScreen
                    ? curr.imgMobile
                    : curr.imgDesktop
                  : ""
              }
              key={curr.key}
            />
          );
        })}
      </div>

      <div className="flex flex-col-reverse lg:flex-col lg:items-start">
        {/* content */}
        <div className="flex flex-col items-center space-y-8 lg:mb-12 lg:items-start">
          <div className="flex flex-col text-center  px-5 space-y-4 lg:items-start lg:px-0 lg:text-start">
            <h2 className="text-3xl capitalize font-spartan font-bold lg:text-4xl">
              family gathering
            </h2>
            <p className="font-spartan leading-2 max-w-md">
              We love catering for entire familites. So please bring everyone
              along for a special meal with your loved ones. We'll provide a
              memorable experience for all.
            </p>
          </div>
          {/* button */}
          <button className="bg-black text-white font-bold px-16 py-4 tracking-widest border  uppercase hover:bg-white hover:text-black hover:border-black  duration-500">
            book a table
          </button>
        </div>

        {/* options */}
        <div className="flex flex-col relative items-center justify-center text-gray-400 text-center uppercase space-y-4 text-sm mb-8  font-spartan tracking-widest text-light lg:items-start">
          {options.map((curr) => {
            return (
              <button
                key={curr.key}
                onClick={() => setSelectedOpt(curr.title)}
                className={
                  curr.title === selectedOpt
                    ? "scale-110 border-b border-beaver transition duration-500 text-black"
                    : "border-none"
                }
              >
                {curr.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Booking;
