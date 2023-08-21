import React from "react";
import Image from "next/image";
import hamburger from "@public/shared/icon-hamburger.svg";
import logo from "@public/shared/logo.svg";
import { Cycle } from "framer-motion";
import Link from "next/link";
import routes from "@/routes/routes";
import { usePathname } from "next/navigation";

interface props {
  sidebarCycleOpen: Cycle;
  setPreloader: (path: string) => void;
}

const Header = ({ sidebarCycleOpen, setPreloader }: props) => {
  const pathname = usePathname();

  return (
    <div className="z-10 w-full fixed flex flex-row items-center tablet:items-start justify-between">
      <div className="py-6 px-6 tablet:px-10 desktop:px-[55px] desktop:py-16 ">
        <Link href={"/"}>
          <Image className="h-[40px] w-[40px]" src={logo} alt="logo" />
        </Link>
      </div>
      <button
        onClick={() => sidebarCycleOpen()}
        className="tablet:hidden py-6 px-6 tablet:px-10"
      >
        <Image className="h-[21px] w-[24px]" src={hamburger} alt="hamburger" />
      </button>
      <div className="h-24 px-12 w-[450px] hidden bg-white/[0.04] backdrop-blur-[40.774227142333984px] tablet:flex flex-row justify-between items-center desktop:mt-[40px] desktop:w-[830px] desktop:px-[123px]">
        {routes.map((route, index) => (
          <div
            key={route.id}
            className={`h-full flex items-center border-b-[3px] transition-all duration-300 ${
              pathname === route.to
                ? "border-b-white"
                : "border-b-transparent hover:border-b-white/50"
            }`}
          >
            <Link
              className="font-barlowCondensed text-[14px] tracking-[2.362px] desktop:text-base desktop:tracking-[2.7px] h-full flex justify-center items-center"
              href={route.to}
              onClick={() => setPreloader(route.to)}
            >
              <span className="mr-3 hidden desktop:inline-block font-barlowCondensed text-base font-bold tracking-[2.7px]">
                0{index}
              </span>
              {route.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
