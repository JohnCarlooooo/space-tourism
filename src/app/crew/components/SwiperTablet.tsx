import { crew } from "@/app/api/crews/types";
import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";
import Image from "next/image";

interface props {
  crews: crew[];
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  swiperRef: MutableRefObject<SwiperClass | undefined>;
}

const SwiperTablet = ({ crews: list, setSelectedIndex, swiperRef }: props) => {
  return (
    <div className="w-screen mt-8 hidden tablet:inline-block desktop:w-[568.072px] dedsktop:mt-0">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(e) => setSelectedIndex(e.activeIndex)}
        draggable
        onInit={(core) => {
          swiperRef.current = core;
        }}
      >
        {list.map((crew, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="flex flex-row justify-center items-center border-bottom relative w-auto h-[222px] tablet:h-[572px] desktop:w-[568.072px] desktop:h-[712px]"
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

export default SwiperTablet;
