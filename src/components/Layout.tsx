import { Outlet } from "react-router";
import Navbar from "./elements/Navbar";
import Sidebar from "./elements/Sidebar";
import { useEffect } from "react";
import { useDatabase } from "../contexts/DataContext";
import { Loading } from "./Loading";
import { useAuth } from "../contexts/AuthContext";

export const Layout = () => {

    const { index, fetchScreens} = useDatabase()

    const { loading } = useAuth()

    if (loading){
        return(<Loading />)
    }
    

    return (
        <div className="h-screen flex flex-row bg-gray-950 text-white">
            <div className="Sidebar h-screen px-2 py-2 sm:block hidden">
                <Sidebar />
            </div>
            <div className="w-full flex-grow flex flex-col py-2 pr-2 bg-slate-900 my-2 mr-2 rounded-lg">
                <div>
                    <Navbar />
                </div>
                <div className="bg-slate-950 mx-5 my-3 px-5 py-3 rounded-xl flex-grow">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
