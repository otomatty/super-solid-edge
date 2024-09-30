import { Router, Route } from '@solidjs/router';
import HomePage from './pages/site/Home/HomePage';
import DashboardPage from './pages/app/Dashboard/DashboardPage';
import FeaturesPage from './pages/site/Features/FeaturesPage';
import DocumentationPage from './pages/site/Documentation/DocumentationPage';
import AuthPage from './pages/site/Auth/AuthPage';
import SetupPage from './pages/app/Setup/SetupPage';
import ProtectedRoute from './components/ProtectRoute';

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/features" component={FeaturesPage} />
      <Route path="/docs" component={DocumentationPage} />
      <Route path="/auth" component={AuthPage} />
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
