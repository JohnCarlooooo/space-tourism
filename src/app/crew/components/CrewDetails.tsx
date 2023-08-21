"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { crew } from "@/app/api/crews/types";

interface props {
  crews: crew[];
  selectedIndex: number;
}

const CrewDetails = ({ crews: list, selectedIndex }: props) => {
  return (
    <AnimatePresence>
      <motion.p
        className="font-bellefair font-normal text-[16px] text-[#fff] text-center opacity-50 uppercase pb-2 tablet:mt-[60px] tablet:text-[24px] desktop:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        key={list[selectedIndex].role}
      >
        {list[selectedIndex].role}
      </motion.p>
      <motion.h1
        className="text-center font-bellefair text-[24px] font-normal text-white uppercase pb-4 tablet:text-[40px] desktop:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={list[selectedIndex].name}
      >
        {list[selectedIndex].name}
      </motion.h1>
      <motion.p
        className="px-6 font-barlow font-normal text-[15px] text-[#D0D6F9] leading-[25px] text-center tablet:text-[16px] tablet:leading-[28px] tablet:w-[458px] tablet:pb-10 desktop:text-left desktop:px-0 desktop:pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={list[selectedIndex].bio}
      >
        {list[selectedIndex].bio}
      </motion.p>
    </AnimatePresence>
  );
};

export default CrewDetails;
