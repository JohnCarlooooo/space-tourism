"use client";
import { useCycle } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import PreLoader from "../ui/PreLoader";

const backgrounds: any = {
  "/": {
    mobile: "bg-home-mobile",
    tablet: "bg-home-tablet",
    desktop: "bg-home-desktop",
  },
  "/destination": {
    mobile: "bg-destination-mobile",
    tablet: "bg-destination-tablet",
    desktop: "bg-destination-desktop",
  },
  "/crew": {
    mobile: "bg-crew-mobile",
    tablet: "bg-crew-tablet",
    desktop: "bg-crew-desktop",
  },
  "/technology": {
    mobile: "bg-technology-mobile",
    tablet: "bg-technology-tablet",
    desktop: "bg-technology-desktop",
  },
};
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, sidebarCycleOpen] = useCycle<boolean>(false, true);
  const [preloaders, setPreloaders] = useState<string[]>([]);
  const pathname = usePathname();
  const dynamicBackground = `${backgrounds[pathname]["mobile"]} tablet:${backgrounds[pathname]["tablet"]} desktop:${backgrounds[pathname]["desktop"]}`;

  useEffect(() => {
    if (preloaders.length === 0)
      setPreloaders((prevState) => [...prevState, pathname]);
  }, [pathname]);

  const setPreloader = (path: string): void => {
    if (!preloaders.includes(path))
      setPreloaders((prevState) => [...prevState, path]);
  };
  return (
    <>
      {preloaders.length !== 0 && (
        <>
          <Header
            sidebarCycleOpen={sidebarCycleOpen}
            setPreloader={setPreloader}
          />
          <Sidebar
            sidebarOpen={sidebarOpen}
            sidebarCycleOpen={sidebarCycleOpen}
            setPreloader={setPreloader}
          />
          <div
            key={pathname}
            className={`${dynamicBackground} bg-cover bg-no-repeat bg-center h-screen w-screen right-20 overflow-y-auto`}
          >
            {children}
          </div>
        </>
      )}
      {preloaders.map((p) => (
        <PreLoader key={p} pathname={p} preloaders={preloaders} />
      ))}
    </>
  );
};

export default PageWrapper;
