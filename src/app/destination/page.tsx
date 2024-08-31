import { Metadata } from "next";
import Display from "./components/Display";

async function getDestinations() {
  // const res = await fetch("http://localhost:3000/api/destinations", {
  //   cache: "default",
  // });
  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }
  // return res.json();
  const data = await import("../../../public/data.json");

  return JSON.stringify(data.destinations);
}

export const metadata: Metadata = {
  title: "Space Tourism | Destinations",
  description:
    "Prepare for an extraordinary space exploration as you embark on a voyage to explore these captivating planets and moons.",
};

export default async function Destination() {
  const destinations = JSON.parse(await getDestinations());
  return (
    <article className="relative flex flex-col justify-center items-center pt-[112px] px-6 tablet:px-10 overflow-x-hidden tablet:overflow-y-clip">
      <p className="flex flex-row gap-4 items-center  tablet:w-full desktop:mt-[100px] desktop:ml-16">
        <span className="font-barlowCondensed text-base font-bold opacity-25 tablet:text-[20px] tablet:tracking-[3.375px]">
          01
        </span>
        <span className="font-barlowCondensed text-base font-normal tablet:text-[20px] tablet:tracking-[3.375px]">
          PICK YOUR DESTINATION
        </span>
      </p>
      <Display destinations={destinations} />
    </article>
  );
}
