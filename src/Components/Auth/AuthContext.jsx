import React, { createContext, useState, useEffect, useContext } from 'react';
import { authService } from '../../services/appwrite';

// Create the authentication context
const AuthContext = createContext(null);

// Provider component that wraps the app and makes auth object available to any child component that calls useAuth().
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkUser = async () => {
      try {
        setLoading(true);
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
      } catch (err) {
        console.error('Auth context error:', err);
        setError(err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      setLoading(true);
      await authService.login(email, password);
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
      return currentUser;
    } catch (err) {
      console.error('Login error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (email, password, name) => {
    try {
      setLoading(true);
      const response = await authService.createAccount(email, password, name);
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
      return response;
    } catch (err) {
      console.error('Register error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setLoading(true);
      await authService.logout();
      setUser(null);
    } catch (err) {
      console.error('Logout error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Context value
  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}