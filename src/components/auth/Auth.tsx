import AppRoutes from "../../AppRoutes";
import { useAuth } from "../../providers/AuthProvider";
import Login from "./components/Login";

const Auth = () => {
  const { user } = useAuth();

  const handleLogin = () => {
    const userData = { id: 1, name: "John Doe" };
    // setUser(userData);
  };

  return(
    <div>{user ? <AppRoutes /> : <Login />}</div>
  );
};
export default Auth;
