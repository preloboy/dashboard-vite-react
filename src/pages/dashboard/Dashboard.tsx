import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import { Outlet } from "react-router";
import Navbar from "../../components/elements/Navbar";
import Sidebar from "../../components/elements/Sidebar";
import { useDatabase } from "../../contexts/DataContext";


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
