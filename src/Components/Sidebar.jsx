import React from "react";
import { LuPencil } from "react-icons/lu";
import {
  MdExpandMore,
  MdInbox,
  MdOutlineDrafts,
  MdOutlineWatchLater,
} from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { TbSend2 } from "react-icons/tb";

const sideBarItems = [
  {
    id: 1,
    name: "Inbox",
    icon: <MdInbox size={"24px"} />,
  },
  {
    id: 2,
    name: "Starred",
    icon: <CiStar size={"24px"} />,
  },
  {
    id: 3,
    name: "Snoozed", 
    icon: <MdOutlineWatchLater size={"24px"} />,
  },
  {
    id: 4,
    name: "Sent",
    icon: <TbSend2 size={"24px"} />,
  },
  {
    id: 5,
    name: "Drafts",
    icon: <MdOutlineDrafts size={"24px"} />,
  },
  {
    id: 6,
    name: "More",
    icon: <MdExpandMore size={"24px"} />,
  },
];

function Sidebar() {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#c2e7ff]">
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-500">
        {sideBarItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 pl-6 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2"
          >
            {item.icon}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
