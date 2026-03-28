// // src/services/registrationService.js
// import axiosInstance from './axiosInstance';
// import axios from 'axios';


// // Register a user for an event
// export const registerUserForEvent = async (userId, eventId) => {
//   const response = await axiosInstance.post(`http://localhost:5000/api/registrations`, {
//     userId,
//     eventId,
//   });
//   return response.data;
// };

// // Get all registrations for a specific event
// export const getRegistrationsForEvent = async (eventId) => {
//   const response = await axiosInstance.get(`http://localhost:5000/api/registrations/event/${eventId}`);
//   return response.data;
// };

// // Get all events a user has registered for
//  const getUserRegistrations = async (userId) => {
//   const response = await axiosInstance.get(`http://localhost:5000/api/registrations/user/${userId}`);
//   return response.data;
// };

// export const  registerForEvent = async (eventId) => {
//   const response = await axios.post('http://localhost:5000/api/registrations', {
//     eventId,
//   });
//   return response.data;
// };

// export default {
 
  
//   getUserRegistrations,
 
// };




// // src/services/registrationService.js
// import axiosInstance from './axiosInstance';
// import axios from 'axios'; // Optional: Only if you're using axios directly (you can remove if unused)

// // Register a user for an event (using axiosInstance for auth headers)
// // export const registerUserForEvent = async (userId, eventId) => {
// //   const response = await axiosInstance.post('/registrations', {
// //     userId,
// //     eventId,
// //   });
// //   return response.data;
// // };


// export const registerUserForEvent = async (userId, eventId) => {
//   try {
//     const response = await axiosInstance.post(`/registrations`, {
//       userId,
//       eventId,
//     });
//     toast.success("✅ Registered successfully!");
//     return response.data;
//   } catch (error) {
//     toast.error("❌ Registration failed.");
//     throw error;
//   }
// };

// // Get all registrations for a specific event
// export const getRegistrationsForEvent = async (eventId) => {
//   const response = await axiosInstance.get(`/registrations/event/${eventId}`);
//   return response.data;
// };

// // Get all events a user has registered for
// export const getUserRegistrations = async (userId) => {
//   const response = await axiosInstance.get(`/registrations/user/${userId}`);
//   return response.data;
// };

// // Register current user (based on token in axiosInstance) for an event
// export const registerForEvent = async (eventId) => {
//   const response = await axiosInstance.post('/registrations', {
//     eventId,
//   });
//   return response.data;
// };

// // Export all functions as named exports (no need for a default export object)




// // src/services/registrationService.js
// import axiosInstance from './axiosInstance';
// import axios from 'axios';



// // ============================================================================================
// // const API_URL = '';

// export const registerUserForEvent = async (eventId, token) => {
//   const response = await axios.post(
//     'http://localhost:5000/api/registrations',
//     { eventId },
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   return response.data;
// };



// // Get all registrations for a specific event
// export const getRegistrationsForEvent = async (eventId) => {
//   const response = await axiosInstance.get(`/registrations/event/${eventId}`);
//   return response.data;
// };

// // // Get all events a user has registered for
// // export const getUserRegistrations = async (userId) => {
// //   const response = await axiosInstance.get(`/registrations/user/${userId}`);
// //   return response.data;
// // };


// // export const cancelUserRegistration = async (registrationId, token) => {
// //   const response = await axios.delete(
// //     `http://localhost:5000/api/registrations/${registrationId}`,
// //     {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     }
// //   );
// //   return response.data;
// // };


// // // get all events reg by  user
// // export const getMyRegistrations = async (token) => {
// //   const res = await axios.get('/api/registrations/my-registrations', {
// //     headers: {
// //       Authorization: `Bearer ${token}`,
// //     },
// //   });
// //   return res.data;
// // };



// export const getUserRegistrations = async (token) => {
//   const res = await axios.get('/api/registrations/my-registrations', {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// };

// // export const cancelRegistration = async (registrationId, token) => {
// //   const res = await axios.delete(`/api/registrations/${registrationId}`, {
// //     headers: {
// //       Authorization: `Bearer ${token}`,
// //     },
// //   });
// //   return res.data;
// // };



// ================================================================================================
// import axiosInstance from './axiosInstance';
// import axios from 'axios';

// const API_URL = '/api/registrations';

// // ============================
// // Register user for an event
// // ============================
// export const registerUserForEvent = async (eventId, token) => {
//   const res = await axios.post(
//     API_URL,
//     { eventId },
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   return res.data;
// };

// // ============================
// // Get "My Events" (events registered by logged-in student)
// // ============================
// export const getMyRegistrations = async (token) => {
//   const res = await axios.get(`${API_URL}/my`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// };

// // ============================
// // Get all registrations (Admin only)
// // ============================
// export const getAllRegistrations = async (token) => {
//   const res = await axios.get(API_URL, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// };

// // ============================
// // Get registrations for an Organizer's events
// // ============================
// export const getOrganizerRegistrations = async (token) => {
//   const res = await axios.get(`${API_URL}/organizer`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// };

// // ============================
// // Get all users registered for a specific event
// // ============================
// export const getUsersForEvent = async (eventId, token) => {
//   const res = await axios.get(`${API_URL}/event/${eventId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// };

// // ============================
// // Cancel a registration (Student only)
// // ============================
// export const cancelRegistration = async (registrationId, token) => {
//   const res = await axios.delete(`${API_URL}/${registrationId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// };
// ====================================================================================================



// import axios from 'axios';

// const API = axios.create({
//   baseURL: process.env.VITE_API_BASE_URL || '' // empty uses same origin
// });

// const getAuthHeader = () => {
//   const token = localStorage.getItem('token');
//   return { Authorization: `Bearer ${token}` };
// };

// export const registerUserForEvent = async (eventId) => {
//   const res = await API.post('/api/registrations', { eventId }, { headers: getAuthHeader() });
//   return res.data;
// };

// export const getMyRegistrations = async () => {
//   const res = await API.get('/api/registrations/mine', { headers: getAuthHeader() });
//   return res.data;
// };


// =============================================== working ========================================================
// import axios from 'axios';
// import axiosInstance from './axiosInstance';
// import Registration from '../../../server/models/Registration';
// // 🔹 Directly set your backend's main URI here
// const API = axios.create({
//   baseURL: 'http://localhost:5000' // or 'https://your-domain.com'
// });

// const getAuthHeader = () => {
//   const token = localStorage.getItem('token');
//   return { Authorization: `Bearer ${token}` };
// };

// export const registerUserForEvent = async (eventId) => {
//   const res = await API.post(
//     '/api/registrations',
//     { eventId },
//     { headers: getAuthHeader() }
//   );
//   return res.data;
// };

// export const getMyRegistrations = async () => {
//   const res = await API.get(
//     '/api/registrations/mine',
//     { headers: getAuthHeader() }
//   );
//   return res.data;
// };


// // export const cancelRegistration = async (registrationId) => {
// //   return axiosInstance.delete(`/registrations/${registrationId}`);
// // };


// export const cancelRegistration = async (registrationId) => {
//   const res = await API.delete(
//     `/api/registrations/${registrationId}`,
//     { headers: getAuthHeader() }
//   );
//   return res.data;
// };

// // get partcipation by organizer id (craeted event)
// export const getParticipantsForOrganizer = async (organizerId) => {
//   const events = await Event.find({ organizer: organizerId }).select('_id');
//   const eventIds = events.map(event => event._id);

//   if (eventIds.length === 0) {
//     return [];
//   }

//   const participants = await Registration.find({ event: { $in: eventIds } })
//     .populate('user', 'name email')
//     .populate('event', 'title');

//   return participants;
// };
// ==========================================================================================================




import axios from 'axios';

// 🔹 Directly set your backend's main URI here
const API = axios.create({
  baseURL: 'http://localhost:5000' // or 'https://your-domain.com'
});

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

// Register for event
export const registerUserForEvent = async (eventId) => {
  const res = await API.post(
    '/api/registrations',
    { eventId },
    { headers: getAuthHeader() }
  );
  return res.data;
};

// Get my registrations
export const getMyRegistrations = async () => {
  const res = await API.get('/api/registrations/mine', {
    headers: getAuthHeader()
  });
  return res.data;
};

// Cancel registration
export const cancelRegistration = async (registrationId) => {
  const res = await API.delete(`/api/registrations/${registrationId}`, {
    headers: getAuthHeader()
  });
  return res.data;
};




