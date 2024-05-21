import React, { useState } from "react";
import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import Dashboard from "../components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Catalog from "../components/Catalog";
import Users from "../components/Users";
import SIPs from "../components/SIPs";
import Communication from "../components/Communication";
import Transaction from "../components/Transaction";
import TermConditions from "../components/TermConditions";
import Settings from "../components/Settings";

const DashboardPage = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  if (showSideBar) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="h-screen">
      <div className="flex flex-wrap h-full">
        <div
          className={` w-full md:w-3/12 xl:w-2/12 max-md:fixed left-0 duration-300  ${
            showSideBar ? "top-0" : "-top-full"
          }`}
        >
          <div className="h-full bg-[#3D464D] z-10 relative">
            <SideBar />
          </div>
        </div>
        <div className="w-full md:w-9/12 xl:w-10/12">
          <div className="top-0 sticky bg-white">
            <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
          </div>
          <div className=" overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/catalogs" element={<Catalog />} />
              <Route path="/users" element={<Users />} />
              <Route path="/spis" element={<SIPs />} />
              <Route path="/communications" element={<Communication />} />
              <Route path="/transactions" element={<Transaction />} />
              <Route path="/term-conditions" element={<TermConditions />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
