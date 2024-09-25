import { Router, Route } from "@solidjs/router";
import HomePage from "./pages/site/Home/HomePage";
import RegisterPage from "./pages/site/Register/RegisterPage";
import LoginPage from "./pages/site/Login/LoginPage";
import DashboardPage from "./pages/app/Dashboard/DashboardPage";
import SetupPage from "./pages/app/Setup/SetupPage";
import ProtectedRoute from "./components/ProtectRoute";

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route
        path="/dashboard"
        component={() => (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        )}
      />
      <Route
        path="/setup"
        component={() => (
          <ProtectedRoute>
            <SetupPage />
          </ProtectedRoute>
        )}
      />
    </Router>
  );
}

export default App;
