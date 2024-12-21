import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import { hasPermission } from "./utils/permissions";
import { useAuth } from "./providers/AuthProvider";
import Analytics from "./components/Analytics";

const AppRoutes = () => {
  const { user } = useAuth()
  const role = user?.role

  return (
    <Router>
      <Routes>
        <Route path="/" element={hasPermission(role, '/dashboard') ? <Dashboard /> : < Navigate to='/' />} />
        <Route path="/dashboard" element={hasPermission(role, '/dashboard') ? <Dashboard /> : < Navigate to='/' />} />
        <Route path="/analytics" element={hasPermission(role, '/analytics') ? <Analytics /> : < Navigate to='/' />} />
        <Route path="/settings" element={hasPermission(role, '/settings') ? <Settings /> : < Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
