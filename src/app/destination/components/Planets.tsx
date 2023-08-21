import React, { MutableRefObject } from "react";
import { destination } from "@/app/api/destinations/types";
import Image from "next/image";
interface props {
  destinations: destination[];
  planets: MutableRefObject<[HTMLDivElement | null]>;
}

const Planets = ({ destinations: list, planets }: props) => {
  return (
    <div className="relative mt-8 mb-[26px] h-[170px] w-[170px] overflow-visible tablet:h-[300px] tablet:w-[300px] tablet:mt-[60px] tablet:mb-[53px]  desktop:h-[445px] desktop:w-[445px]">
      {list.map((destination: destination) => (
        <div
          key={destination.description}
          ref={(ref) => planets.current.push(ref)}
          className="absolute flex flex-row justify-center items-center opacity-0 h-[170px] w-[170px] tablet:h-[300px] tablet:w-[300px] desktop:h-[445px] desktop:w-[445px]"
        >
          <Image
            src={destination.images.webp}
            alt={destination.description}
            fill={true}
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Planets;
