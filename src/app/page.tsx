import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Space Tourism",
  description:
    "This endeavor presents an adept resolution to a challenge from Frontend Mentor, showcasing mastery in addressing real-world design hurdles.",
};

export default function Home() {
  return (
    <article className="flex flex-col justify-center items-center pt-[112px] tablet:pt-[200px] px-6 desktop:flex-row desktop:justify-around desktop:items-end">
      <div className="flex flex-col justify-center items-center desktop:mt-[250px] desktop:items-start">
        <p className="font-barlowCondensed text-[16px] tracking-[2.7px] text-center text-[#D0D6F9] tablet:tracking-[3.375px] tablet:text-[20px] desktop:text-[28px] desktop:tracking-[4.725px]">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="font-bellefair leading-[100px] text-white text-center text-[80px] py-4 tablet:text-[150px] tablet:leading-[150px] tablet:py-6 desktop:py-6 desktop:text-left">
          SPACE
        </h1>
        <p className="font-barlow text-[15px] leading-[25px] text-[#D0D6F9] text-center mb-20 tablet:w-[444px] tablet:[16px] tablet:leading-[28px] tablet:mb-40 desktop:mb-0 desktop:text-[18px] desktop:leading-[32px] desktop:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link href={"/destination"}>
        <div className="h-[150px] w-[150px] rounded-full bg-white flex justify-center items-center tablet:h-[242px] tablet:w-[242px] desktop:h-[274px] desktop:w-[274px] relative group">
          <span className="text-DarkBlue font-bellefair font-normal tracking-[1.25px] text-xl tablet:text-[32px] tablet-tracking-[2px]">
            EXPLORE
          </span>
          <div className="absolute bg-white scale-0 h-[450px] w-[450px] opacity-[0.1036] rounded-full group-hover:scale-100 transition-all duration-300"></div>
        </div>
      </Link>
    </article>
  );
}
