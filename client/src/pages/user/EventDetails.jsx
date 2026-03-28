// ✅ src/pages/user/EventDetails.jsx
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import eventService from '../../services/eventService';
// import registrationService from '../../services/registrationService';
// import useAuth  from '../../hooks/useAuth';
// import { toast } from 'react-hot-toast';

// const EventDetails = () => {
//   const { id } = useParams();
//   const { user } = useAuth();
//   const [event, setEvent] = useState(null);

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const data = await eventService.getEventById(id);
//         setEvent(data);
//       } catch (err) {
//         console.error('Error loading event', err);
//       }
//     };
//     fetch();
//   }, [id]);

//   const handleRegister = async () => {
//     try {
//       await registrationService.registerUserForEvent(user._id, id);
//       toast.success('Registered successfully!');
//     } catch (err) {
//       toast.error('Already registered or failed.');
//     }
//   };

//   if (!event) return <div className="p-6">Loading...</div>;

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
//       <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
//       <p className="text-gray-500 mb-2">
//         {new Date(event.date).toLocaleDateString()} at {event.location}
//       </p>
//       <img
//         src={event.image || '/default-poster.jpg'}
//         alt="Poster"
//         className="w-full h-64 object-cover rounded mb-4"
//       />
//       <p className="mb-4">{event.description}</p>
//       <button
//         onClick={handleRegister}
//         className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
//       >
//         Register
//       </button>
//     </div>
//   );
// };

// // export default EventDetails;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getEventById } from '../../services/eventService'; // ✅ FIXED
// import registrationService from '../../services/registrationService';
// import useAuth from '../../hooks/useAuth';
// import { toast } from 'react-hot-toast';

// const EventDetails = () => {
//   const { id } = useParams();
//   const { user } = useAuth();
//   const [event, setEvent] = useState(null);

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const data = await getEventById(id); // ✅ direct function call
//         setEvent(data);
//       } catch (err) {
//         console.error('Error loading event', err);
//       }
//     };
//     fetch();
//   }, [id]);

//   const handleRegister = async () => {
//     try {
//       await registrationService.registerUserForEvent(user._id, id);
//       toast.success('Registered successfully!');
//     } catch (err) {
//       toast.error('Already registered or failed.');
//     }
//   };

//   if (!event) return <div className="p-6">Loading...</div>;

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
//       <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
//       <p className="text-gray-500 mb-2">
//         {new Date(event.date).toLocaleDateString()} at {event.location}
//       </p>
//       <img
//         src={event.image || '/default-poster.jpg'}
//         alt="Poster"
//         className="w-full h-64 object-cover rounded mb-4"
//       />
//       <p className="mb-4">{event.description}</p>
//       <button
//         onClick={handleRegister}
//         className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
//       >
//         Register
//       </button>
//     </div>
//   );
// };

// export default EventDetails;



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getEventById } from '../../services/eventService'; // Make sure this service exists
// import { registerForEvent } from '../../services/registrationService'; // Service to register
// import { toast } from 'react-toastify'; // Optional: for notifications

// const EventDetails = () => {
//   const { id } = useParams(); // Event ID from URL
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const data = await getEventById(id);
//         setEvent(data);
//       } catch (error) {
//         console.error('Error fetching event:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvent();
//   }, [id]);

//   const handleRegister = async () => {
//     try {
//       const response = await registerForEvent(id);
//       toast.success('Registered successfully!');
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Registration failed');
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   if (!event) return <p>Event not found</p>;

//   return (
//     <div className="p-6 bg-white rounded shadow">
//       <h2 className="text-2xl font-bold text-indigo-700">{event.title}</h2>
//       <p className="text-sm text-gray-500 mt-1">{new Date(event.date).toLocaleDateString()} • {event.location}</p>
//       <p className="mt-4 text-gray-700">{event.description}</p>

//       <button
//         className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//         onClick={handleRegister}
//       >
//         Register
//       </button>
//     </div>
//   );
// };

// export default EventDetails;



// src/components/user/EventDetails.jsx

// import React, { useEffect, useState } from 'react';
// import { getEventById } from '../../services/eventService';
// import { registerForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const EventDetails = ({ eventId, onClose }) => {
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const data = await getEventById(eventId);
//         setEvent(data);
//       } catch (error) {
//         console.error('Error fetching event:', error);
//         toast.error('Failed to load event');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (eventId) fetchEvent();
//   }, [eventId]);

//   const handleRegister = async () => {
//     try {
//       await registerForEvent(eventId);
//       toast.success('Registered successfully!');
//       onClose(); // Close modal on success
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Registration failed');
//     }
//   };

//   if (!eventId || !event) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
//       <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-xl relative animate-fadeIn">
//         <button
//           className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl"
//           onClick={onClose}
//         >
//           &times;
//         </button>

//         {loading ? (
//           <p className="text-center text-gray-500">Loading...</p>
//         ) : (
//           <>
//             <h2 className="text-2xl font-bold text-indigo-700">{event.title}</h2>
//             <p className="text-sm text-gray-500 mt-1">
//               {new Date(event.date).toLocaleDateString()} &bull; {event.location}
//             </p>
//             <p className="mt-4 text-gray-700">{event.description}</p>

//             <button
//               onClick={handleRegister}
//               className="mt-6 px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//             >
//               Register
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventDetails;




// import React, { useEffect, useState } from 'react';
// import { getEventById } from '../../services/eventService';
// import { registerForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const EventDetails = ({ eventId, onClose }) => {
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const data = await getEventById(eventId);
//         setEvent(data);
//       } catch (error) {
//         toast.error('Failed to load event.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (eventId) fetchEvent();
//   }, [eventId]);

//   // const handleRegister = async () => {
//   //   try {
//   //     await registerForEvent(eventId);
//   //     toast.success('You have registered successfully!');
//   //     onClose(); // close the modal after success
//   //   } catch (err) {
//   //     toast.error(err.response?.data?.message || 'Registration failed.');
//   //   }
//   // };

//   const handleRegister = async () => {
//   try {
//     console.log("Trying to register for event:", eventId);
//     const result = await registerForEvent(eventId);
//     console.log("Registration response:", result);
//     toast.success('You have registered successfully!');
//     onClose();
//   } catch (err) {
//     console.error("Registration error:", err);
//     toast.error(err.response?.data?.message || 'Registration failed.');
//   }
// };

//   if (!event || loading) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
//         <button
//           className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <h2 className="text-2xl font-bold text-indigo-700">{event.title}</h2>
//         <p className="text-sm text-gray-500 mt-1">
//           {new Date(event.date).toLocaleDateString()} • {event.category}
//         </p>
//         <p className="mt-4 text-gray-700">{event.description}</p>
//         <button
//           onClick={handleRegister}
//           className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//         >
//           Register
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;



import React, { useEffect, useState } from 'react';
import { getEventById } from '../../services/eventService';
import { registerUserForEvent } from '../../services/registrationService';
import { toast } from 'react-toastify';

const EventDetails = ({ eventId, onClose }) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventById(eventId);
        setEvent(data);
      } catch (error) {
        toast.error('Failed to load event.');
      } finally {
        setLoading(false);
      }
    };
    if (eventId) fetchEvent();
  }, [eventId]);

  const handleRegister = async () => {
    try {
      console.log('Registering for event:', eventId);
      const response = await registerUserForEvent(eventId);
      console.log('Response:', response);
      toast.success('You have registered successfully!');
      onClose(); // Close modal
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || 'Registration failed.');
    }
  };

  if (!event || loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-indigo-700">{event.title}</h2>
        <p className="text-sm text-gray-500 mt-1">
          {new Date(event.date).toLocaleDateString()} • {event.category}
        </p>
        <p className="mt-4 text-gray-700">{event.description}</p>
        <button
          onClick={handleRegister}
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
