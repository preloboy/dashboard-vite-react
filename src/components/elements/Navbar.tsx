import { useState } from "react";
import { Menu_List, Screen } from "../../types/DataInterface";
import { useNavigate } from "react-router";
import { useDatabase } from "../../contexts/DataContext";

interface DashboardProps {
  menuList: Menu_List[];
}

const Navbar = ({ menuList }: DashboardProps) => {

  const navigate = useNavigate()
  const { setIndex, fetchScreens, getTitle } = useDatabase()

  const hitIndex = (item: Menu_List) => {
    const index = item.id.toString()
    console.log(item.path);
    setIndex(index)
    getTitle(index)
    navigate(item.path)
    fetchScreens(index)
  }

  return (
    <div className="w-full bg-zinc-900 text-zinc-200 flex flex-row justify-end py-4 pe-5">
      {menuList.map((item) => (
        <ul key={item.id} className="">
          <li
            className="text-lg font-light cursor-pointer hover:bg-gray-700 hover:text-cyan-200 px-4 py-1 rounded-md"
            onClick={() => hitIndex(item)}
          >
            {item.menu_name}
          </li>
        </ul>
      ))}
    </div>
  );
};
export default Navbar;