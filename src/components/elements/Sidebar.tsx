import { useNavigate } from "react-router-dom";
import supabase from "../../utils/supabase";
import { Menu_List, Screen } from "../../types/DataInterface";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useDatabase } from "../../contexts/DataContext";


const Sidebar = () => {

  const navigate = useNavigate();

  const { loading, setLoading, user, setUser, setSession } = useAuth()
  const { fetchScreens, index, title, screens } = useDatabase()

  const items = screens.filter(item=> item.menu_id.toString()===index)
  

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

  useEffect(() => {
    // console.log('Sidebar Screens', screens);
    setTimeout(() => {
      // setLoading(false)
    }, 3000);
  }, [])

  return (
    <div className="h-full flex flex-col bg-slate-900 min-w-48 text-white rounded-lg">
      <h1 className="text-lg tracking-wide font-semibold cursor-pointer hover:[text-shadow:_0_2px_5px_rgb(37_255_250_/_0.5)] hover:text-yellow-300 px-5 py-5 hover:font-normal">
        {title}
        <p>{user.email}</p>
        <p>{index}</p>
      </h1>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow">
          {items.map((item) => (
            <ul key={item.id}>
              <li
                onClick={() => goTo(item)}
                className="cursor-pointer mx-3 rounded-md px-3 py-2 hover:bg-gray-700 hover:text-cyan-200">
                {item.screen_name}
              </li>
            </ul>
          ))}
        </div>
        <div className="">
          <ul className="mb-3">
            <li
              className="cursor-pointer mx-3 rounded-md pl-3 py-2 hover:bg-gray-700 hover:text-cyan-200"
            >
              Settings
            </li>
            <li
              onClick={logout}
              className="cursor-pointer mx-3 rounded-md pl-3 py-2 hover:bg-gray-700 hover:text-cyan-200"
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default Sidebar;
