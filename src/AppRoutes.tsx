import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { hasPermission } from "./utils/permissions";
import { useAuth } from "./providers/AuthProvider";
import Dashboard from "./components/pages/Dashboard";
import Analytics from "./components/pages/Analytics";
import Settings from "./components/pages/Settings";
import Overview from "./components/pages/Overview";
import Performance from "./components/pages/Performance";

const AppRoutes = () => {
  const { user } = useAuth()
  const role = user?.role

  return (
    <Router>
      <Routes>
        <Route path="/" element={hasPermission(role, '/dashboard') ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="dashboard" element={hasPermission(role, '/dashboard') ? <Dashboard /> : <Navigate to="/" />}>
          <Route index element={hasPermission(role, '/dashboard') ? <Overview /> : <Navigate to="/" />}/>
          <Route path="analytics" element={hasPermission(role, '/dashboard/analytics') ? <Analytics /> : <Navigate to="/" />} />
          <Route path="performance" element={hasPermission(role, '/dashboard/performance') ? <Performance /> : <Navigate to="/" />} />
        </Route>
        <Route path="settings" element={hasPermission(role, '/settings') ? <Settings /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
