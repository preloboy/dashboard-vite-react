import { Session } from "@supabase/supabase-js";
import AppRoutes from "../AppRoutes";
import Login from "../pages/auth/Login";
import supabase from "../utils/supabase";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useDatabase } from "../contexts/DataContext";

const Auth = () => {
  const { user, setUser } = useAuth();
  const { index, fetchScreens, fetchMenu } = useDatabase();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);
        fetchMenu();
        fetchScreens(index);
      } else {
        setUser(null);
      }
    })
    return () => { authListener.subscription.unsubscribe; };
  }, [setUser])

  useEffect(() => {
    console.log('Auth Entry', index);
    
  }, [])

  return (
    <div>{user ? <AppRoutes /> : <Login />}</div>
  );
};
export default Auth;
