import Countdown from "react-countdown";
import { productCard } from "./home-data";
import SingleCard from "./singlecard";
import { useRef } from "react";
import CarouselControl from "./carousel-control";

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  const formatTwoDigits = (value: number) => String(value).padStart(2, "0");

  return (
    <div className="flex gap-4 md:gap-10 items-center">
      <div className="flex flex-col items-center">
        <span className="capitalize text-[12px] font-[600]">days</span>
        <span className="font-[600] text-[32px] ">{formatTwoDigits(days)}</span>
      </div>
      <span className="text-red-500 font-[600]">:</span>
      <div className="flex flex-col items-center">
        <span className="capitalize text-[12px] font-[600] ">hours</span>
        <span className="font-[600] text-[32px] ">
          {formatTwoDigits(hours)}{" "}
        </span>
      </div>
      <span className="text-red-500 font-[600]">:</span>
      <div className="flex flex-col items-center">
        <span className="capitalize text-[12px] font-[600] ">minutes</span>
        <span className="font-[600] text-[32px] ">
          {" "}
          {formatTwoDigits(minutes)}
        </span>
      </div>
      <span className="text-red-500 font-[600]">:</span>
      <div className="flex flex-col items-center">
        <span className="capitalize text-[12px] font-[600] ">seconds</span>
        <span className="font-[600] text-[32px] ">
          {formatTwoDigits(seconds)}
        </span>
      </div>
    </div>
  );
};

const FlashSale = () => {
  const oneWeekFromNow = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const sliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="my-4  grid border-b-[1px] border-[#000000]/20 pb-16">
      <div className="flex gap-6 my-10">
        <div className="w-2 h- bg-[#DB4444] rounded-sm " />
        <h1 className="text-[#DB4444] font-[600]  ">Today’s</h1>
      </div>
      <div className="flex items-center w-full flex-col md:flex-row justify-between mb-10">
        <div className="flex flex-[6] items-center gap-10 w-full ">
          <h1 className="text-[#000000] font-[600] text-[30px] md:text-[36px]">
            Flash Sales
          </h1>
          <Countdown date={oneWeekFromNow} renderer={renderer} />
        </div>
        <div className=" w-full  flex-[3]  flex md:items-center md:justify-center gap-5 ">
          <CarouselControl sliderRef={sliderRef} sliderType="productSlider" />
        </div>
      </div>
      <div
        className="w-full overflow-x-scroll scrollbar-hide flex gap-6 "
        ref={sliderRef}
      >
        {productCard.map((product, index) => (
          <SingleCard {...product} key={index} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <a
          href="#"
          className=" text-white bg-[#DB4444] py-4 px-4 rounded-md min-w-[200px] text-center text-[16px] font-[600]"
        >
          View All Products
        </a>
      </div>
    </div>
  );
};

export default FlashSale;