import React from "react";
import { motion } from "framer-motion";
import { technology } from "@/app/api/technology/types";

const TechnologyDetail = ({
  technologyDetail,
}: {
  technologyDetail: technology;
}) => {
  return (
    <div className="flex flex-col justify-start">
      <motion.p
        className="font-barlowCondensed font-normal text-[14px] text-[#D0D6F9] text-center tracking-[2.362px] uppercase pb-2 tablet:pb-4 tablet:text-[16px] tablet:tracking-[2.7px] desktop:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
      >
        THE TERMINOLOGY...
      </motion.p>
      <motion.h1
        className="text-center font-bellefair text-[24px] font-normal text-white uppercase pb-4 tablet:w-[457px] tablet:text-[40px] desktop:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={technologyDetail.name}
      >
        {technologyDetail.name}
      </motion.h1>
      <motion.p
        className="font-barlow font-normal text-[15px] text-[#D0D6F9] leading-[25px] text-center tablet:w-[458px] tablet:text-[16px] tablet:leading-[28px] desktop:text-left px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={technologyDetail.description}
      >
        {technologyDetail.description}
      </motion.p>
    </div>
  );
};

export default TechnologyDetail;
