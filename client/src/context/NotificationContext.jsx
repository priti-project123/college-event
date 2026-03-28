// src/context/NotificationContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import notificationService from '../services/notificationService';
import useAuth  from '../hooks/useAuth';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const data = await notificationService.getNotifications(user.token);
      setNotifications(data);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAllAsRead = async () => {
    try {
      await notificationService.markAllAsRead(user.token);
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    } catch (error) {
      console.error('Failed to mark notifications as read:', error);
    }
  };

  useEffect(() => {
    if (user?.token) {
      fetchNotifications();
    }
  }, [user]);

  return (
    <NotificationContext.Provider
      value={{ notifications, setNotifications, fetchNotifications, markAllAsRead, loading }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);
