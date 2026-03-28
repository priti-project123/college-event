// // src/services/authService.js
// import axiosInstance from './axiosInstance';

// export const loginUser = async (credentials) => {
//   const res = await axiosInstance.post('/auth/login', credentials);
//   return res.data;
// };

// export const registerUser = async (userData) => {
//   const res = await axiosInstance.post('/auth/register', userData);
//   return res.data;
// };

// export const logoutUser = () => {
//   localStorage.removeItem('token');
//   localStorage.removeItem('user');
// };


import axiosInstance from './axiosInstance';

export const loginUser = async (credentials) => {
  const res = await axiosInstance.post('/auth/login', credentials);
  return res.data;
};

export const registerUser = async (userData) => {
  const res = await axiosInstance.post('/auth/register', userData);
  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// ✅ Add this to fix the error
export const getToken = () => {
  return localStorage.getItem('token');
};
