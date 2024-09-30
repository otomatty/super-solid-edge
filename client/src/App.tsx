import { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/site/Home/HomePage';
import AuthPage from './pages/site/Auth/AuthPage';
import FeaturesPage from './pages/site/Features/FeaturesPage';
import DocumentationPage from './pages/site/Documentation/DocumentationPage';
import DashboardPage from './pages/app/Dashboard/DashboardPage';
import SetupPage from './pages/app/Setup/SetupPage';
import ProtectedRoute from './components/ProtectRoute';

const App: Component = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default App;
