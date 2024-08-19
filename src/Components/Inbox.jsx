import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdCropSquare, MdExpandMore, MdInbox } from "react-icons/md";
import Messages from "./Messages";

const mailTypes = [
  {
    id: 1,
    name: "Primary",
    icon: <MdInbox size={"20px"} />,
  },
  {
    id: 2,
    name: "Promotion",
    icon: <GoTag size={"20px"} />,
  },
  {
    id: 3,
    name: "Social",
    icon: <FaUserFriends size={"20px"} />,
  },
];

function Inbox() {
  const [mailTypesSelected, setMailTypesSelected] = useState(0);
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex item-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <MdExpandMore size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailTypes.map((type, index) => {
            return (
              <button
                className={`${
                  mailTypesSelected === index
                    ? "border-b-4 border-blue-600 text-blue-600"
                    : ""
                } flex items-center gap-5 p-4 w-52 hover:bg-gray-100`}
                key={index}
                onClick={() => setMailTypesSelected(index)}
              >
                {type.icon}
                <span>{type.name}</span>
              </button>
            );
          })}
        </div>
        <Messages />
      </div>
    </div>
  );
}

export default Inbox;
