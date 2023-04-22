import React, { useState, useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";
import Link from "next/link";
import { Drawer } from "flowbite-react";
import Sidebar from "./Sidebar";

function SubTopbar({ title }) {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleSidebar = () => {
    setShowOverlay(!showOverlay);
    console.log(showOverlay);
  };

  return (
    <div>
      <div className="w-full bg-secondary-color font-semibold text-white  py-3 px-6 flex items-center justify-between">
        <div>{title}</div>
        <div className=" md:hidden" onClick={toggleSidebar}>
          <FiAlignJustify className="w-5 h-5 text-white cursor-pointer" />
        </div>
      </div>

      {showOverlay && (
        <div className="fixed inset-0  z-50 flex  items-center justify-start transition-transform transform ease-in-out duration-300">
          <div
            className="fixed inset-0 transition-opacity"
            onClick={toggleSidebar}
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="relative z-50 max-w-md h-screen bg-white ">
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
}

export default SubTopbar;
