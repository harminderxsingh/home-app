import React, { createContext, useState, useEffect, ReactNode } from 'react';
import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';
import { router } from "expo-router";
import { authService } from '@/services/AuthService';

interface AuthContextProps {
  userToken: string | null;
  user: any | null;
  login: (data: any) => Promise<void>;
  signup: (data: any) => Promise<void>;
  updateProfile: (data: any) => Promise<void>;
  updateNotification: (data: any) => Promise<void>;
  logout: () => Promise<void>;
}

interface DecodedToken {
  exp: number; // Expiration time as a Unix timestamp
}

export const AuthContext = createContext<AuthContextProps>({
  userToken: null,
  user: null,
  login: async () => { },
  signup: async () => { },
  updateProfile: async () => { },
  updateNotification: async () => { },
  logout: async () => { },
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);

  const login = async (data: any) => {
    const { token, user } = await authService.signIn(data)
    setUserToken(token);
    setUser(user || null)
    SecureStore.setItemAsync('userToken', token);
    SecureStore.setItemAsync('user', JSON.stringify(user));
  };

  const signup = async (data: any) => {
    const { token, user } = await authService.signUp(data)
    setUserToken(token);
    setUser(user || null)
    SecureStore.setItemAsync('userToken', token);
    SecureStore.setItemAsync('user', JSON.stringify(user));
  };

  const updateProfile = async (data: any) => {
    const { user } = await authService.updateProfile(data)
    setUser(user || null)
    SecureStore.setItemAsync('user', JSON.stringify(user));
  };

  const updateNotification = async (data: any) => {
    const { user } = await authService.updateNotification(data)
    setUser(user || null)
    SecureStore.setItemAsync('user', JSON.stringify(user));
  };

  const logout = async () => {
    setUserToken(null);
    setUser(null);
    router.push('login')
    SecureStore.deleteItemAsync('userToken');
    SecureStore.deleteItemAsync('user');
  };

  const checkToken = async () => {
    const token = await SecureStore.getItemAsync('userToken');
    if (token) {
      const decoded: DecodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp > currentTime) {
        setUserToken(token);
        router.push('dashboard')
        const user = await SecureStore.getItemAsync('user');
        if (user) {
          setUser(JSON.parse(user))
        }
      } else {
        await SecureStore.deleteItemAsync('userToken');
        await SecureStore.deleteItemAsync('user');
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <AuthContext.Provider value={{ userToken, user, login, signup, updateProfile, updateNotification, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
