"use client";
import { technology } from "@/app/api/technology/types";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/all";
import { useRef, useState } from "react";
import SwiperClass from "swiper";

// Import Swiper styles
import "swiper/css";
import Selector from "./Selector";
import SwiperDesktop from "./SwiperDesktop";
import SwiperMobile from "./SwiperMobile";
import TechnologyDetail from "./TechnologyDetail";

gsap.registerPlugin(MotionPathPlugin);

interface props {
  technologies: technology[];
}

const Display = ({ technologies: list }: props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const swiperRef = useRef<SwiperClass>();
  const swiperRef2 = useRef<SwiperClass>();
  return (
    <div className="flex flex-col justify-center items-center desktop:flex-row desktop:gap-28">
      <SwiperMobile
        technologies={list}
        swiperRef={swiperRef}
        setSelectedIndex={setSelectedIndex}
      />
      <div className="flex flex-col justify-center desktop:flex-row desktop:gap-20">
        <Selector
          selectedIndex={selectedIndex}
          swiperRef={swiperRef}
          swiperRef2={swiperRef2}
          technologies={list}
        />
        <TechnologyDetail technologyDetail={list[selectedIndex]} />
      </div>
      <SwiperDesktop
        technologies={list}
        swiperRef={swiperRef}
        setSelectedIndex={setSelectedIndex}
      />
    </div>
  );
};

export default Display;
