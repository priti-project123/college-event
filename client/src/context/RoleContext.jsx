import React, { createContext, useContext } from 'react';
import { useAuthContext } from './AuthContext';

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  // ✅ Use inside the component body
  const { user } = useAuthContext();

  const isAdmin = user?.role === 'admin';
  const isOrganizer = user?.role === 'organizer';
  const isUser = user?.role === 'user' || user?.role === 'student';

  return (
    <RoleContext.Provider value={{ isAdmin, isOrganizer, isUser }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRoleContext = () => useContext(RoleContext);
