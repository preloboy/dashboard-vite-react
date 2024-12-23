import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import supabase from "../../utils/supabase";
import { useDatabase } from "../../providers/DataProvider";
import { Outlet } from "react-router";
import Navbar from "../elements/Navbar";
import Sidebar from "../elements/Sidebar";


const Dashboard = () => {

  const { index, fetchMenu, fetchScreens, menuList } = useDatabase()


  return (
    <div className="flex">
      <div className="Sidebar h-screen">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar menuList={menuList} />
        <div className="px-5 pt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
