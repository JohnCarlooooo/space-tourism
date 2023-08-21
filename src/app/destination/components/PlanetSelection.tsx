import { destination } from "@/app/api/destinations/types";

interface props {
  destinations: destination[];
  selectedIndex: number;
  changePlanetHandler: (index: number) => void;
}

const PlanetSelection = ({
  destinations: list,
  selectedIndex,
  changePlanetHandler,
}: props) => {
  return (
    <div className="pb-8 flex flex-row gap-[26px] justify-center items-center desktop:pb-[37px]">
      {list.map((destination: any, index) => (
        <div
          className="flex flex-col justify-center items-center gap-2 group cursor-pointer"
          key={destination.name}
          onClick={() => changePlanetHandler(index)}
        >
          <span className="uppercase font-barlowCondensed text-sm tracking-[2.362px] text-[#D0D6F9] pl-[2.362px] leading-none tablet:text-[16px] tablet:tracking-[2.7px]">
            {destination.name}
          </span>
          <div
            className={`w-full h-[3px] bg-white transition-all duration-300 ${
              selectedIndex === index
                ? "opacity-1"
                : "opacity-0 group-hover:opacity-50"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default PlanetSelection;
