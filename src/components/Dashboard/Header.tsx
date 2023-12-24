"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";

import Sidebar from "./Sidebar";
export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between h-20 w-full bg-primary-dashboard sticky top-0 z-10 lg:px-10">
      {/* Logo and search input */}
      <div className="hidden lg:flex items-center w-1/2">
        {/* Search */}
        <div className="w-full">
          <input
            type="text"
            placeholder="Search Orders"
            className="bg-input rounded-3xl border border-white border-opacity-25 outline-none py-3 px-5 w-2/3"
          />
        </div>
      </div>

      {/* Timer and profile */}
      <div className="flex justify-between items-center w-full lg:w-1/2 px-5 lg:px-0">
        <div className="hidden lg:block">
          <div className="bg-button-primary bg-opacity-20 rounded-3xl py-3 px-12">
            30 : 20 : 2
          </div>
        </div>

        {/* hamburger */}

        <div className="flex items-center lg:hidden z-20">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <div>{isOpen ? "Close" : "Menu"}</div>
        </div>

        {/* Profile */}

        <div
          className={`flex items-center gap-x-2 ${
            isOpen ? "hidden lg:block" : "block"
          }`}
        >
          <div className="h-[43px] w-[43px] bg-white rounded-full"></div>
          <div>
            <h3 className="text-sm md:text-xl font-bold">Somto Udekwu</h3>
            <p className="opacity-40 text-[.75rem] md:text-base">Merchant</p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="block lg:hidden absolute top-20 bg-primary-dashboard w-full min-h-[calc(100vh-80px)] z-20 px-5">
          <Sidebar setOpen={setOpen} />
        </div>
      )}
    </nav>
  );
}
