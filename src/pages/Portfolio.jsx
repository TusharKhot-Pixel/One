import React, { useContext } from "react";

//import images//

import portImg1 from "../img/portfolio/1.jpg";
import portImg2 from "../img/portfolio/2.jpg";
import portImg3 from "../img/portfolio/3.jpg";
import portImg4 from "../img/portfolio/4.jpg";

//import Link//

import { Link } from "react-router-dom";

//motion//

import { motion } from "framer-motion";
import { transition1 } from "../transitions";

//import cursor context//

import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={transition1}
      className="section"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative"
      >
        {/*text n images wrapper*/}
        <div
          className="flex flex-col lg:flex-row h-full items-center 
        justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8"
        >
          {/*text*/}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              commodi ipsam nobis quaerat eum impedit doloribus obcaecati
              suscipit quia,
              <br />
              <br />
              facilis ipsa eligendi consequatur aliquid iste architecto ad
              nulla, ut aut?
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire Me
            </Link>
          </motion.div>
          {/*images grid*/}
          <motion.div
            initial={{ opacity: 0, y: "-180%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: "-180%" }}
            transition={transition1}
            className="grid grid-cols-2 lg:gap-3"
          >
            {/*image*/}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={portImg1}
                alt="1"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={portImg2}
                alt="1"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={portImg3}
                alt="1"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={portImg4}
                alt="1"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
