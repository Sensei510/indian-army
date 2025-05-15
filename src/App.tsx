import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ExamPrepPage from './pages/ExamPrepPage';
import QuizPage from './pages/QuizPage';
import UserDashboardPage from './pages/UserDashboardPage';
import CareersPage from './pages/CareersPage';
import AboutPage from './pages/AboutPage';
import MaterialsPage from './pages/MaterialsPage';
import MockTestsPage from './pages/MockTestsPage';
import DiscussionPage from './pages/DiscussionPage';

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="careers" element={<CareersPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="exam-prep" element={<ExamPrepPage />} />
            <Route path="exam-prep/quiz" element={<QuizPage />} />
            <Route path="materials" element={<MaterialsPage />} />
            <Route path="mock-tests" element={<MockTestsPage />} />
            <Route path="mock-tests/:id" element={<QuizPage />} />
            <Route path="discussion" element={<DiscussionPage />} />
            <Route path="discussion/:id" element={<DiscussionPage />} />
            <Route 
              path="dashboard" 
              element={<ProtectedRoute element={<UserDashboardPage />} />} 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;