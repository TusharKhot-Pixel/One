import React, { useContext } from "react";

//import image

import contactImg from "../img/contact/tushrr.png";

//motion
import { motion } from "framer-motion";

//transition//

import { transition1 } from "../transitions";

//import cursor context//

import { CursorContext } from "../context/CursorContext";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-4 pt-36 text-center lg:text-left">
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex absolute bottom-0 left-0 right-0 top-72 -z-10 bg-[#eef7f9]"
          ></motion.div>
          {/* text & form */}
          <div className="lg:flex-1 lg:pt-32 px-4">
            <h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h1"
            >
              Contact
            </h1>
            <p className="font-semibold mb-12">
              I would love to get suggestions from you.
            </p>
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent 
                  w-full font-primary pl-3 placeholder:text-[#757978]"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent 
                  w-full font-primary pl-3 placeholder:text-[#757978]"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent 
                  w-full font-primary pl-3 placeholder:text-[#757978]"
                type="textarea"
                placeholder="Your Message"
              />
              <button className="btn mx-auto mb-[30px] lg:mx-0 self-start">
                Send It
              </button>
            </form>
          </div>
          {/* image */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lg:flex-1"
          >
            <img src={contactImg} alt="contImg" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
