"use client";
import { crew } from "@/app/api/crews/types";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/all";
import { useRef, useState } from "react";
import SwiperClass from "swiper";

// Import Swiper styles
import "swiper/css";
import CrewDetails from "./CrewDetails";
import SwiperMobile from "./SwiperMobile";
import SwiperTablet from "./SwiperTablet";

gsap.registerPlugin(MotionPathPlugin);

interface props {
  crews: crew[];
}

const Display = ({ crews: list }: props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const swiperRef = useRef<SwiperClass>();
  const swiperRef2 = useRef<SwiperClass>();
  return (
    <div className="flex flex-col justify-center items-center desktop:flex-row desktop desktop:gap-20">
      <div className="flex flex-col justify-center items-center desktop:items-start">
        <SwiperMobile
          crews={list}
          setSelectedIndex={setSelectedIndex}
          swiperRef={swiperRef}
        />
        <div className="h-[1px] w-full px-6 bg-[#383B4B] mb-8 leading-none tablet:hidden"></div>
        <div className="mb-8 w-full flex flex-row justify-center items-center gap-4 tablet:hidden">
          {list.map((_, index) => (
            <div
              onClick={() => {
                swiperRef.current?.slideTo(index);
                swiperRef2.current?.slideTo(index);
              }}
              key={index}
              className={`w-[10px] h-[10px] bg-white rounded-full transition-all duration-300 cursor-pointer ${
                selectedIndex === index
                  ? "opacity-1"
                  : "opacity-[0.174363] hover:opacity-50"
              }`}
            ></div>
          ))}
        </div>
        <CrewDetails crews={list} selectedIndex={selectedIndex} />
        <div className="mb-8 tablet:mb-0 w-full flex-row justify-center items-center gap-4 hidden tablet:flex desktop:justify-start ">
          {list.map((_, index) => (
            <div
              onClick={() => {
                swiperRef.current?.slideTo(index);
                swiperRef2.current?.slideTo(index);
              }}
              key={index}
              className={`w-[10px] h-[10px] bg-white rounded-full transition-all duration-300 cursor-pointer ${
                selectedIndex === index
                  ? "opacity-1"
                  : "opacity-[0.174363] hover:opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <SwiperTablet
        crews={list}
        setSelectedIndex={setSelectedIndex}
        swiperRef={swiperRef2}
      />
    </div>
  );
};

export default Display;
