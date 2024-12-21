import { useEffect, useState } from "react";
import Navbar from "../elements/Navbar";
import Sidebar from "../elements/Sidebar";
import { useAuth } from "../../providers/AuthProvider";
import supabase from "../../utils/supabase";
import { useDatabase } from "../../providers/DataProvider";
import { Outlet } from "react-router";

interface Child {
  child: string;
}
interface NavItem {
  name: string;
  childs: Child[];
}
interface DashboardProps {
  navItem: NavItem[];
}

const Dashboard = () => {

  const { user } = useAuth()

  const navItem = [
    {
      name: "Dashboard",
      childs: [
        { child: 'Overview' },
        { child: 'Analytics' },
        { child: 'Performance' }
      ]
    },
    {
      name: "Projects",
      childs: [
        { child: 'All Projects' },
        { child: 'New Project' },
        { child: 'Project Status' }
      ]
    },
    {
      name: "Tasks",
      childs: [
        { child: 'All Tasks' },
        { child: 'New Task' },
        { child: 'Task Status' }
      ]
    },
    {
      name: "Reports",
      childs: [
        { child: 'Monthly Reports' },
        { child: 'Quarterly Reports' },
        { child: 'Annual Reports' }
      ]
    }
  ];

  const [sidebarItem, setSidebarItem] = useState(navItem[0]);
  const getSidebarItem = (item: NavItem) => {
    setSidebarItem(item);
  };

  const { index, screens, menuList } = useDatabase()

  useEffect(() => {
    // console.log('Screens Avaiable',screens);

  })


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
