import React, { useState } from "react";

//import icons

import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

//import Link//

import { Link } from "react-router-dom";

//import Motion

import { motion } from "framer-motion";

//Menu variants

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.06, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="xl:hidden">
      {/* nav open button */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer hover:scale-150 hover:text-yellow-500 duration-500"
      >
        <CgMenuRight />
      </div>
      {/**Menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 h-screen z-20"
      >
        {/* icons */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 cursor-pointer hover:scale-150 hover:text-yellow-500 duration-500"
        >
          <IoMdClose />
        </div>
        {/**Menu Lis */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-9 font-bold text-3xl ">
          <li
            onClick={() => setOpenMenu(false)}
            className="hover:scale-105 hover:text-yellow-500 duration-300"
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            onClick={() => setOpenMenu(false)}
            className="hover:scale-105 hover:text-yellow-500 duration-300"
          >
            <Link to={"/about"}>About</Link>
          </li>
          <li
            onClick={() => setOpenMenu(false)}
            className="hover:scale-105 hover:text-yellow-500 duration-300"
          >
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li
            onClick={() => setOpenMenu(false)}
            className="hover:scale-105 hover:text-yellow-500 duration-300"
          >
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
