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

const SwiperMobile = ({
  setSelectedIndex,
  swiperRef,
  technologies: list,
}: props) => {
  return (
    <div className="w-screen my-8 tablet:mt-16 desktop:mb-[72px] desktop:hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(e) => setSelectedIndex(e.activeIndex)}
        draggable
        onInit={(core) => {
          swiperRef.current = core;
        }}
      >
        {list.map((technology) => (
          <SwiperSlide>
            <div
              className="flex flex-row justify-center items-center border-bottom relative w-auto h-[170px] tablet:h-[310px]"
              key={technology.name}
            >
              <Image
                src={technology.images.landscape}
                alt={technology.description}
                fill={true}
                objectFit="contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperMobile;
