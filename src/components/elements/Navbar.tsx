import { useState } from "react";

interface Child {
  child: string;
}
interface NavItem {
  name: string;
  childs: Child[];
}
interface DashboardProps {
  navItem: NavItem[];
  sendDataToParent: (data: NavItem) => void;
}

const Navbar = ({ navItem, sendDataToParent }: DashboardProps) => {
  return (
      <div className="w-full bg-zinc-900 text-zinc-200 font-semibold flex flex-row justify-end py-3 pe-5">
        {navItem.map((item, index) => (
          <ul key={index} className="">
            <li
              className="text-lg cursor-pointer hover:bg-gray-700 hover:text-cyan-200 px-4 py-2 rounded-md"
              onClick={() => sendDataToParent(item)}
            >
              {item.name}
            </li>
          </ul>
        ))}
      </div>
  );
};
export default Navbar;
