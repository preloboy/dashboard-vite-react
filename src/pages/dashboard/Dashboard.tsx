import { Outlet } from "react-router";
import Navbar from "../../components/elements/Navbar";
import Sidebar from "../../components/elements/Sidebar";


const Dashboard = () => {

  return (
    <div className="flex">
      <div className="Sidebar h-screen">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="px-5 pt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
