"use client";
import React from "react";
import { destination } from "@/app/api/destinations/types";
import { AnimatePresence, motion } from "framer-motion";

const DestinationDetails = ({
  destinationDetail,
}: {
  destinationDetail: destination;
}) => {
  return (
    <AnimatePresence key={destinationDetail.name}>
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-center font-bellefair text-[56px] font-normal text-white uppercase tablet:text-[80px] desktop:text-[100px]"
      >
        {destinationDetail.name}
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="font-barlow font-normal text-[15px] text-[#D0D6F9] leading-[25px] text-center tablet:w-[573px] tablet:leading-[28px] tablet:text-[16px] desktop:text-left desktop:w-[444px] desktop:text-[18px] desktop:leading-[32px]"
      >
        {destinationDetail.description}
      </motion.p>
      <div className="h-[1px] w-full px-6 bg-[#383B4B] my-8 tablet:my-12 desktop:my-7"></div>
      <div className="flex flex-col justify-center items-center gap-8 tablet:flex-row tablet:gap-3 desktop:gap-20">
        <p className="flex flex-col justify-center items-center desktop:items-start gap-2">
          <span className="text-[#D0d6f9] font-barlowCondensed text-sm font-normal tracking-[2.362px] text-center tablet:w-[216px] desktop:text-left desktop:w-auto">
            AVG. DISTANCE
          </span>
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-bellefair text-[28px] uppercase text-center tablet:w-[216px] desktop:text-left desktop:w-auto"
          >
            {destinationDetail.distance}
          </motion.span>
        </p>
        <p className="flex flex-col justify-center items-center desktop:items-start gap-2">
          <span className="text-[#D0d6f9] font-barlowCondensed text-sm font-normal tracking-[2.362px] text-center tablet:w-[216px] desktop:text-left desktop:w-auto">
            EST. TRAVEL TIME
          </span>

          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-bellefair text-[28px] uppercase text-center tablet:w-[216px] desktop:text-left desktop:w-auto"
          >
            {destinationDetail.travel}
          </motion.span>
        </p>
      </div>
    </AnimatePresence>
  );
};

export default DestinationDetails;
