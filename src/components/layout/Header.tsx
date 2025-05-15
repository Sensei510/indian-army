import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, User, LogOut, Bell } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import ThemeToggle from '../theme/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Exam Prep', path: '/exam-prep' },
    { title: 'Mock Tests', path: '/mock-tests' },
    { title: 'Study Materials', path: '/materials' },
    { title: 'Discussion', path: '/discussion' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled 
          ? 'bg-white dark:bg-navy-900 shadow-md' 
          : 'bg-transparent'}`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-army-600" />
            <span className="text-xl font-bold text-navy-900 dark:text-white">
              ExamPrep
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors
                  ${location.pathname === item.path
                    ? 'text-army-600 dark:text-army-400'
                    : 'text-navy-600 dark:text-gray-300 hover:text-army-500 dark:hover:text-army-400'
                  }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <button className="relative">
                  <Bell className="w-5 h-5 text-navy-600 dark:text-gray-300" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                </button>
                
                <Link
                  to="/dashboard"
                  className="flex items-center text-sm font-medium text-navy-600 dark:text-gray-300 hover:text-army-500 dark:hover:text-army-400"
                >
                  <User className="w-4 h-4 mr-1" />
                  {user?.firstName}
                </Link>
                
                <button
                  onClick={logout}
                  className="flex items-center text-sm font-medium text-navy-600 dark:text-gray-300 hover:text-army-500 dark:hover:text-army-400"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-sm font-medium text-navy-600 dark:text-gray-300 hover:text-army-500 dark:hover:text-army-400"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-army-600 rounded-md hover:bg-army-700 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-navy-600 dark:text-gray-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white dark:bg-navy-800 border-t border-gray-200 dark:border-navy-700"
          >
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium py-2
                      ${location.pathname === item.path
                        ? 'text-army-600 dark:text-army-400'
                        : 'text-navy-600 dark:text-gray-300'
                      }`}
                  >
                    {item.title}
                  </Link>
                ))}
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="flex items-center text-sm font-medium text-navy-600 dark:text-gray-300 py-2"
                    >
                      <User className="w-4 h-4 mr-1" />
                      Dashboard
                    </Link>
                    <button
                      onClick={logout}
                      className="flex items-center text-sm font-medium text-navy-600 dark:text-gray-300 py-2"
                    >
                      <LogOut className="w-4 h-4 mr-1" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-sm font-medium text-navy-600 dark:text-gray-300 py-2"
                    >
                      Log In
                    </Link>
                    <Link
                      to="/register"
                      className="text-sm font-medium text-white bg-army-600 rounded-md py-2 px-4 text-center"
                    >
                      Register
                    </Link>
                  </>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;