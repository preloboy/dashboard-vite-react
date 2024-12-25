import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Analytics from "./pages/dashboard/Analytics";
import Overview from "./pages/dashboard/Overview";
import Performance from "./pages/dashboard/Performance";
import Settings from "./pages/Settings";
import ProjectList from "./pages/dashboard/ProjectsList";
import { hasPermission } from "./components/permissions";
import { useAuth } from "./contexts/AuthContext";
import { Layout } from "./components/Layout";

const AppRoutes = () => {
  const { user } = useAuth()
  const role = user?.role

  // console.log(`Role: ${role}`);
  // console.log(`Has permission for /projects: ${hasPermission(role, '/projects')}`);


  return (
    <Router>
      <Routes>
        <Route path="/" element={hasPermission(role, '/dashboard') ? <Layout /> : <Navigate to="/" />} />
        <Route path="dashboard" element={<Layout />}>
          <Route index element={hasPermission(role, '/dashboard') ? <Overview /> : <Navigate to="/" />} />
          <Route path="analytics" element={hasPermission(role, '/dashboard/analytics') ? <Analytics /> : <Navigate to="/" />} />
          <Route path="performance" element={hasPermission(role, '/dashboard/performance') ? <Performance /> : <Navigate to="/" />} />
        </Route>
        <Route path="projects" element={<Layout />} >
          <Route index element={hasPermission(role, '/projects') ? <ProjectList /> : <Navigate to="/" />} />
        </Route>
        <Route path="settings" element={hasPermission(role, '/settings') ? <Settings /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
