import React, { MutableRefObject } from "react";
import { technology } from "@/app/api/technology/types";
import SwiperClass from "swiper";

interface props {
  technologies: technology[];
  swiperRef: MutableRefObject<SwiperClass | undefined>;
  swiperRef2: MutableRefObject<SwiperClass | undefined>;
  selectedIndex: number;
}

const Selector = ({
  technologies: list,
  swiperRef,
  swiperRef2,
  selectedIndex,
}: props) => {
  return (
    <div className="mb-8 w-full flex flex-row justify-center items-center gap-4 tablet:mb-11 desktop:flex-col">
      {list.map((_, index) => (
        <div
          onClick={() => {
            swiperRef.current?.slideTo(index);
            swiperRef2.current?.slideTo(index);
          }}
          key={index}
          className={`relative group cursor-pointer`}
        >
          <div
            className={`w-[40px] h-[40px] tablet:w-[60px] tablet:h-[60px] border-white border-[1px] rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "opacity-1 bg-white"
                : "opacity-[0.25] group-hover:opacity-50 "
            }`}
          ></div>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <span
              className={`font-bellefair text-base font-normal transition-all duration-300 ${
                selectedIndex === index ? "text-[#0B0D17]" : "text-white"
              }
            } tablet:text-[24px]`}
            >
              {index + 1}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Selector;
