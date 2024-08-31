import { Metadata } from "next";
import Display from "./components/Display";

async function getCrews() {
  // const res = await fetch("http://localhost:3000/api/crews", {
  //   cache: "default",
  // });
  // if (!res.ok) {
  //   throw new Error("Failed to fetch data!!!!!!!!!!!!!");
  // }
  // return res.json();
  const data = await import("../../../public/data.json");

  return JSON.stringify(data.crew);
}

export const metadata: Metadata = {
  title: "Space Tourism | Crew",
  description:
    "Join a team of fellow adventurers for an unparalleled journey through outer space exploration.",
};

export default async function Destination() {
  const crews = JSON.parse(await getCrews());
  return (
    <article className="relative flex flex-col justify-center items-center pt-[112px] px-6 tablet:px-10 overflow-x-hidden tablet:overflow-y-clip">
      <p className="flex flex-row gap-4 items-center  tablet:w-full desktop:mt-[100px] desktop:ml-16">
        <span className="font-barlowCondensed text-base font-bold opacity-25 tablet:text-[20px] tablet:tracking-[3.375px]">
          02
        </span>
        <span className="font-barlowCondensed text-base font-normal tablet:text-[20px] tablet:tracking-[3.375px]">
          MEET YOUR CREW
        </span>
      </p>
      <Display crews={crews} />
    </article>
  );
}
