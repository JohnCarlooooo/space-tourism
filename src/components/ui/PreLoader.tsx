import React from "react";
import { gsap } from "gsap";

const PreLoader = ({
  pathname,
  preloaders,
}: {
  pathname: string;
  preloaders: string[];
}) => {
  React.useEffect(() => {
    const fadeTL = gsap.timeline();
    if (preloaders.length === 1) {
      fadeTL.to(".preloader", { y: 0, opacity: 1, duration: 0 });
    } else {
      fadeTL.fromTo(
        ".preloader",
        { y: "100%", opacity: 1 },
        { y: 0, duration: 0.3, opacity: 1 }
      );
    }
    fadeTL.to(".preloader", {
      y: "-100%",
      delay: 1,
      opacity: 1,
      duration: 0.3,
    });

    const barTL = gsap.timeline({ repeat: -1 });
    barTL.to(".loading_bar", {
      width: 150,
      opacity: 1,
      ease: "expo.inOut",
      duration: 0.25,
    });
    barTL.to(".loading_bar", {
      width: 0,
      opacity: 0.5,
      x: 150,
      ease: "expo.inOut",
      duration: 0.5,
    });
  }, []);
  const getLoadingName = (path: string): string => {
    if (path === "/") return "Loading Space";
    if (path === "/destination") return "Loading Destinations";
    if (path === "/crew") return "Loading Crew";
    if (path === "/technology") return "Loading Technology";
    return "";
  };

  return (
    <div className="preloader z-20 w-screen h-screen fixed top-0 bg-black flex flex-col justify-center gap-2 items-center opacity-1">
      <div className="font-barlow tracking-widest text-2xl text-center">
        {getLoadingName(pathname)}
      </div>
      <div className="w-[150px]  rounded-full">
        <div className="loading_bar h-1 w-0 opacity-0 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default PreLoader;
