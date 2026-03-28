// src/hooks/useAuth.js

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { RoleContext } from '../context/RoleContext';

const useAuth = () => {
  const { user, setUser, token, setToken, logout } = useContext(AuthContext);
  const { role, setRole } = useContext(RoleContext);

  return {
    user,
    setUser,
    token,
    setToken,
    logout,
    role,
    setRole,
    isLoggedIn: !!token,
  };
};

export default useAuth;
