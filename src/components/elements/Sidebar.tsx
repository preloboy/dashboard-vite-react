import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import supabase from "../../utils/supabase";
import { Menu_List, Screen } from "../../Models/DataInterface";
import { useEffect, useState } from "react";
import { useDatabase } from "../../providers/DataProvider";


const Sidebar = () => {

  const navigate = useNavigate();

  const { user, setUser, setSession } = useAuth()
  const { index, title, setIndex, screens } = useDatabase()

  const logout = async () => {
    await supabase.auth.signOut()
      .then(() => {
        setUser(null)
        setSession(null)
      })
  }

  const goTo = (item: Screen) => {
    navigate(item.path)
    console.log("goTo() Test", item.path, item.menu_id);
  }

  return (
    <div className="h-screen min-w-48 bg-gray-100">
      <h1 className="text-lg tracking-wide font-semibold cursor-pointer hover:bg-gray-700 hover:text-cyan-200 px-5 py-5">
        {title}
        <p>{user.email}</p>
        <p>{index}</p>
      </h1>
      <div className=" flex flex-col">
        <div className="">

          {screens.map((item) => (
            <ul key={item.id}>
              <li
                onClick={() => goTo(item)}
                className="cursor-pointer pl-5 py-2 hover:bg-gray-700 hover:text-cyan-200">
                {item.screen_name}
              </li>
            </ul>
          ))}
        </div>
        <div className="mt-96">
          <ul>
            <li
              onClick={logout}
              className="cursor-pointer pl-5 py-2 hover:bg-gray-700 hover:text-cyan-200"
            >
              Logout
            </li>
            <li
              className="cursor-pointer pl-5 py-2 hover:bg-gray-700 hover:text-cyan-200"
            >
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default Sidebar;
