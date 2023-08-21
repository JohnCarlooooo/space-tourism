import React from "react";
import { AnimatePresence, Cycle, motion } from "framer-motion";
import close from "@public/shared/icon-close.svg";
import Image from "next/image";
import Link from "next/link";
import routes from "@/routes/routes";

interface props {
  sidebarOpen: boolean;
  sidebarCycleOpen: Cycle;
  setPreloader: (path: string) => void;
}

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1, transition: { duration: 2 } },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};
const Sidebar = ({ sidebarOpen, sidebarCycleOpen, setPreloader }: props) => {
  return (
    <AnimatePresence>
      {sidebarOpen && (
        <motion.aside
          className="z-10 fixed right-0 h-screen backdrop-blur-2xl"
          initial={{ width: 0 }}
          animate={{
            width: 250,

            transition: {
              type: "spring",
              stiffness: 150,
              damping: 15,
            },
          }}
          exit={{
            width: 0,
          }}
        >
          <motion.div
            className="px-6 pt-8"
            initial="closed"
            animate="open"
            variants={sideVariants}
          >
            <div className="flex flex-row justify-end items-center">
              <button onClick={() => sidebarCycleOpen()}>
                <Image className="h-[20px] w-[20px]" src={close} alt="logo" />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-16">
              {routes.map(({ name, to, id }, index) => (
                <Link
                  key={id}
                  href={to}
                  onClick={() => {
                    sidebarCycleOpen();
                    setPreloader(to);
                  }}
                >
                  <motion.p
                    className="font-barlowCondensed text-base tracking-[2.7px] flex flex-row gap-2"
                    variants={itemVariants}
                    whileHover={{ x: 15 }}
                  >
                    <span className="font-bold">{"0" + index}</span>
                    <span className="font-normal">{name}</span>
                  </motion.p>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
