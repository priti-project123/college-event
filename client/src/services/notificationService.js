// src/services/notificationService.js
import axiosInstance from './axiosInstance';

const getNotifications = async (token) => {
  const res = await axiosInstance.get('/notifications', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

const createNotification = async (notification, token) => {
  const res = await axiosInstance.post('/notifications', notification, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

const markAllAsRead = async (token) => {
  const res = await axiosInstance.put('/notifications/mark-all-read', {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export default {
  getNotifications,
  createNotification,
  markAllAsRead,
};
