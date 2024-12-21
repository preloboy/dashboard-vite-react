import { Session } from "@supabase/supabase-js";
import AppRoutes from "../../AppRoutes";
import { useAuth } from "../../providers/AuthProvider";
import Login from "./components/Login";
import supabase from "../../utils/supabase";
import { useEffect } from "react";
import { useDatabase } from "../../providers/DataProvider";

const Auth = () => {
  const { user, setUser } = useAuth();
  const { fetchScreens, fetchMenu } = useDatabase();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);
        fetchMenu();
        fetchScreens('1');
      } else {
        setUser(null);
      }
    })
    return () => { authListener.subscription.unsubscribe; };
  }, [setUser])

  return (
    <div>{user ? <AppRoutes /> : <Login />}</div>
  );
};
export default Auth;
