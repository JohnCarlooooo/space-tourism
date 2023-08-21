"use client";
import { destination } from "@/app/api/destinations/types";
import { Power1, gsap } from "gsap";
import { MotionPathPlugin } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import DestinationDetails from "./DestinationDetails";
import PlanetSelection from "./PlanetSelection";
import Planets from "./Planets";

gsap.registerPlugin(MotionPathPlugin);

interface props {
  destinations: destination[];
}

const Display = ({ destinations: list }: props) => {
  const planets = useRef<[HTMLDivElement | null]>([null]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    gsap.defaults({ ease: "Power1.easeOut" });
    if (planets.current.length > 0) {
      planets.current.forEach((planet, index) => {
        if (index !== 1 && index !== 0) {
          gsap.to(planet, {
            y: "100vh",
            x: "-100vh",
            opacity: 0,
          });
        } else if (index === 1) {
          gsap.to(planet, {
            opacity: 1,
          });
        }
      });
    }
  }, [list]);

  const changePlanetHandler = (index: number) => {
    if (index === selectedIndex) return;
    const r = 150;
    gsap.to(planets.current[selectedIndex + 1], {
      motionPath: {
        path: `M ${-r * 2}, ${-r * 2}
               a ${r},${r} 0 1,0 ${r * 4},0
               a ${r},${r} 0 1,0 -${r * 4},0z`,
        start: 0.25,
        end: 0.5,
      },
      duration: 0.5,
      ease: Power1.easeInOut,
      scale: 0,
      opacity: 0,
      // duration: 1,
    });

    setSelectedIndex(index);
    gsap.to(planets.current[index + 1], {
      motionPath: {
        path: `M ${-r * 2}, ${-r * 2}
               a ${r},${r} 0 1,0 ${r * 4},0
               a ${r},${r} 0 1,0 -${r * 4},0z`,
        start: 0,
        end: 0.25,
      },
      duration: 0.5,
      ease: Power1.easeInOut,
      scale: 1,
      opacity: 1,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center desktop:flex-row desktop:gap-40">
      <Planets destinations={list} planets={planets} />
      <div className="flex flex-col justify-center items-center desktop:items-start">
        <PlanetSelection
          destinations={list}
          changePlanetHandler={changePlanetHandler}
          selectedIndex={selectedIndex}
        />
        <DestinationDetails
          destinationDetail={list[selectedIndex]}
          key={selectedIndex}
        />
      </div>
    </div>
  );
};

export default Display;
