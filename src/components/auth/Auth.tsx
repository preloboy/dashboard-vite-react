import { Session } from "@supabase/supabase-js";
import AppRoutes from "../../AppRoutes";
import { useAuth } from "../../providers/AuthProvider";
import Login from "./components/Login";
import supabase from "../../utils/supabase";
import { useEffect } from "react";

const Auth = () => {
  const { user, setUser } = useAuth();

  useEffect(() => {
    // const session = supabase.auth.getSession()
    //   .then((value) => {
    //     setUser(value.data.session?.user)
    //     console.log("Session", value.data.session);
    //   })
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);
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
