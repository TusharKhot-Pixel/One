import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
// import router //
import { BrowserRouter as Router } from "react-router-dom";
// import motion //
import { motion } from "framer-motion";
import React, { useContext } from "react";

//import cursor context//

import { CursorContext } from "./context/CursorContext";

function App() {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>

      {/*Cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="top-0 left-0 pointer-events-none h-[30px] w-[30px] bg-black fixed rounded-full"
      ></motion.div>
    </>
  );
}

export default App;
