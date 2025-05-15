import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demonstration
const mockUser: User = {
  id: '1',
  email: 'john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  role: UserRole.USER,
  createdAt: new Date(),
  updatedAt: new Date()
};

const mockAdmin: User = {
  id: '2',
  email: 'admin@example.com',
  firstName: 'Admin',
  lastName: 'User',
  role: UserRole.ADMIN,
  createdAt: new Date(),
  updatedAt: new Date()
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // In a real application, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock login logic
      let loggedInUser = null;
      if (email === 'john.doe@example.com' && password === 'password') {
        loggedInUser = mockUser;
      } else if (email === 'admin@example.com' && password === 'admin') {
        loggedInUser = mockAdmin;
      } else {
        throw new Error('Invalid credentials');
      }
      
      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, firstName: string, lastName: string) => {
    setLoading(true);
    try {
      // In a real application, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock registration logic
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        firstName,
        lastName,
        role: UserRole.USER,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === UserRole.ADMIN
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};