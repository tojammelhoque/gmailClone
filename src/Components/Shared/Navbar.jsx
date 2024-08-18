import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { MdOutlineSettings } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";

function Navbar() {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <GiHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-8 "
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt=""
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search mail"
            className="bg-transparent outline-none w-full px-1"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex item-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <GoQuestion size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineSettings size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={"20px"} />
          </div>
          <div className="cursor-pointer">
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7j9IDpZsbq4HghrNPneZustxYupRgrt0oQ&s"
              size="40"
              round={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
