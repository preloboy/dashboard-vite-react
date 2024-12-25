import { Session } from "@supabase/supabase-js";
import AppRoutes from "../AppRoutes";
import Login from "../pages/auth/Login";
import supabase from "../utils/supabase";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useDatabase } from "../contexts/DataContext";

const Auth = () => {
  const { user, setUser } = useAuth();
  const { fetchMenu, fetchScreens } = useDatabase();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);
        fetchScreens();
        fetchMenu();
      } else {
        setUser(null);
      }
    })
    return () => { authListener.subscription.unsubscribe; };
  }, [setUser])

  useEffect(() => {
  
  }, [])

  return (
    <div>{user ? <AppRoutes /> : <Login />}</div>
  );
};
export default Auth;
