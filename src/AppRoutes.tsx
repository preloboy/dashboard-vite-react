import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import { useDatabase } from "./providers/DataProvider";

const AppRoutes = () => {
  const {screens} = useDatabase()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
