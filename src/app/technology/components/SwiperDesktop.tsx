import { technology } from "@/app/api/technology/types";
import Image from "next/image";
import React, { SetStateAction, Dispatch, MutableRefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";

interface props {
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  technologies: technology[];
  swiperRef: MutableRefObject<SwiperClass | undefined>;
}
const SwiperDesktop = ({
  setSelectedIndex,
  swiperRef,
  technologies: list,
}: props) => {
  return (
    <div className="w-screen my-8 tablet:mt-16 desktop:mb-[72px] hidden desktop:inline-block desktop:w-[515px]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(e) => setSelectedIndex(e.activeIndex)}
        draggable
        onInit={(core) => {
          swiperRef.current = core;
        }}
      >
        {list.map((technology, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="flex flex-row justify-center items-center border-bottom relative w-auto h-[170px] tablet:h-[310px] desktop:h-[527px] desktop:w-[515px]"
              key={technology.name}
            >
              <Image
                src={technology.images.portrait}
                alt={technology.description}
                fill={true}
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperDesktop;
