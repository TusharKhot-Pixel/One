import React, { useContext } from "react";
//import socials

import Socials from "./Socials";
import MobileNav from "./MobileNav";

//import Link

import { Link } from "react-router-dom";

//import cursor context//

import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/*logo */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="font-singature text-3xl font-bold max-w-[100px] hover:scale-150 hover:text-yellow-500 duration-500"
          to={"/"}
        >
          TK
        </Link>
        {/*nav -initally hidden show on desktop */}
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <Link
            to={"/"}
            className="text-black hover:text-yellow-500 text-lg duration-300 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-black hover:text-yellow-500 text-lg duration-300 hover:scale-105"
          >
            About
          </Link>
          <Link
            to={"/portfolio"}
            className="text-black hover:text-yellow-500 text-lg duration-300 hover:scale-105"
          >
            Portfolio
          </Link>
          <Link
            to={"/contact"}
            className="text-black hover:text-yellow-500 text-lg duration-300 hover:scale-105"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* social */}
      <Socials />
      {/* mobile Nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
