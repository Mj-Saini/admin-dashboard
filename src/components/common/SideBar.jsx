import React from "react";
import logo from "../../assets/image/svg/dashboard-logo.svg";
import { sideBarData } from "./Helper";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div id="sidebar" className=" top-0 sticky ">
      <div className="bg-[#FFAE00] py-2.5 flex justify-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col bg-[#3D464D] h-full">
        {sideBarData.map((items, index) => (
          <Link
            to={items.path}
            key={index}
            className="flex items-center px-5 py-3 gap-2.5 hover:bg-[#26313A] hover:rounded-l-[20px] group-hover w-full duration-300 icon"
          >
            {items.icon}
            <h2 className="font-normal text-sm text-white"> {items.tabs}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
