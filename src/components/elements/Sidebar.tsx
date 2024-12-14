import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import supabase from "../../utils/supabase";

interface SidebarProps {
  sidebarItem: {
    name: string;
    childs: {
      child: string;
    }[];
  };
}
const Sidebar = ({ sidebarItem }: SidebarProps) => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/settings");
  };
    const {user, setUser, setSession} = useAuth()

    const logout = async() =>{
      await supabase.auth.signOut()
      .then(value=>{
        console.log(value.error?.message);
        setUser(null)
        setSession(null)
      })


    }
  
  return (
    <div className="h-screen min-w-48 bg-gray-100">
      <h1 className="text-lg tracking-wide font-semibold cursor-pointer hover:bg-gray-700 hover:text-cyan-200 px-5 py-5">
        {sidebarItem.name.toUpperCase()}
        <p>{user.email}</p>
      </h1>
      <div className=" flex flex-col">
        <div className="">
          {sidebarItem.childs.map((item, index) => (
            <ul key={index}>
              <li className="cursor-pointer pl-5 py-2 hover:bg-gray-700 hover:text-cyan-200">
                {item.child}
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
              onClick={()=>goTo()}
              className="cursor-pointer pl-5 py-2 hover:bg-gray-700 hover:text-cyan-200"
            >
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
