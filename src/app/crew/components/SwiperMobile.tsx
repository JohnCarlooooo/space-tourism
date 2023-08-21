import React, { SetStateAction, MutableRefObject, Dispatch } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";
import Image from "next/image";
import { crew } from "@/app/api/crews/types";

interface props {
  crews: crew[];
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  swiperRef: MutableRefObject<SwiperClass | undefined>;
}

const SwiperMobile = ({ crews: list, setSelectedIndex, swiperRef }: props) => {
  return (
    <div className="w-screen mt-8 tablet:hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(e) => setSelectedIndex(e.activeIndex)}
        draggable
        onInit={(core) => {
          swiperRef.current = core;
        }}
      >
        {list.map((crew) => (
          <SwiperSlide>
            <div
              className="flex flex-row justify-center items-center border-bottom relative w-auto h-[222px]"
              key={crew.name}
            >
              <Image
                src={crew.images.webp}
                alt={crew.bio}
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
