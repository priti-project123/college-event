// // src/services/axiosInstance.js
// import axios from 'axios';

// // Set your API base URL (from .env or default)
// const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// // Create reusable axios instance
// const axiosInstance = axios.create({
//   baseURL: API,
// });

// // ✅ Interceptor: Attach JWT token from localStorage (safely)
// axiosInstance.interceptors.request.use((config) => {
//   const user = localStorage.getItem('user');
//   if (user) {
//     try {
//       const parsedUser = JSON.parse(user);
//       if (parsedUser?.token) {
//         config.headers.Authorization = `Bearer ${parsedUser.token}`;
//       }
//     } catch (err) {
//       console.warn('Invalid user object in localStorage', err);
//     }
//   }
//   return config;
// });

// export default axiosInstance;


// src/services/axiosInstance.js
import axios from 'axios';

// Set your API base URL (from .env or default)
const API = import.meta.env.VITE_BACKEND_URL
  ? `${import.meta.env.VITE_BACKEND_URL}/api`
  : 'http://localhost:5000/api';

// Create reusable axios instance
const axiosInstance = axios.create({
  baseURL: API,
});

// ✅ Interceptor: Attach JWT token from localStorage
axiosInstance.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (err) {
    console.warn('Error reading token from localStorage:', err);
  }

  return config;
});

export default axiosInstance;
