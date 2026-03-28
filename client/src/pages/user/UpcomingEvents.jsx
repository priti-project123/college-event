// // src/pages/user/UpcomingEvents.jsx
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import eventService from '../../services/eventService';

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [search, setSearch] = useState('');
//   const [filteredEvents, setFilteredEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const data = await eventService.getAllEvents();
//         setEvents(data);
//         setFilteredEvents(data);
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//       }
//     };
//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     const results = events.filter((event) =>
//       event.title.toLowerCase().includes(search.toLowerCase())
//     );
//     setFilteredEvents(results);
//   }, [search, events]);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>

//       <input
//         type="text"
//         placeholder="Search events..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mb-6 p-2 border border-gray-300 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       />

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event) => (
//             <Link
//               to={`/user/home/event-details/${event._id}`}
//               key={event._id}
//               className="p-4 border rounded-lg shadow hover:shadow-md bg-white transition duration-200"
//             >
//               <h2 className="text-xl font-semibold text-indigo-700">{event.title}</h2>
//               <p className="text-gray-500 text-sm">
//                 {new Date(event.date).toLocaleDateString()} at {event.location}
//               </p>
//               <p className="mt-2 text-gray-700 line-clamp-3">{event.description}</p>
//               <div className="mt-4 text-right text-indigo-600 hover:underline text-sm">
//                 View Details →
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="text-gray-500">No events found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import eventService from '../../services/eventService';

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);

//   const [search, setSearch] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');

//   const uniqueCategories = [...new Set(events.map((e) => e.category))];

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const data = await eventService.getAllEvents();
//         setEvents(data);
//         setFilteredEvents(data);
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//       }
//     };
//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     let filtered = events;

//     // Search by title
//     if (search) {
//       filtered = filtered.filter((event) =>
//         event.title.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     // Filter by category
//     if (selectedCategory) {
//       filtered = filtered.filter((event) => event.category === selectedCategory);
//     }

//     // Filter by date
//     if (selectedDate) {
//       filtered = filtered.filter(
//         (event) => new Date(event.date).toDateString() === new Date(selectedDate).toDateString()
//       );
//     }

//     setFilteredEvents(filtered);
//   }, [search, selectedCategory, selectedDate, events]);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>

//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/3"
//         />

//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/4"
//         >
//           <option value="">All Categories</option>
//           {uniqueCategories.map((cat, index) => (
//             <option key={index} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/4"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event) => (
//             <Link
//               to={`/user/home/event-details/${event._id}`}
//               key={event._id}
//               className="p-4 border rounded-lg shadow hover:shadow-md bg-white transition duration-200"
//             >
//               <h2 className="text-xl font-semibold text-indigo-700">{event.title}</h2>
//               <p className="text-gray-500 text-sm">
//                 {new Date(event.date).toLocaleDateString()} &middot; {event.location}
//               </p>
//               <p className="text-sm text-gray-600 mt-1">Category: {event.category}</p>
//               <p className="mt-2 text-gray-700 line-clamp-3">{event.description}</p>
//               <div className="mt-4 text-right text-indigo-600 hover:underline text-sm">
//                 View Details →
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="text-gray-500">No events found with current filters.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllEvents } from '../../services/eventService'; // ✅ updated

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);

//   const [search, setSearch] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');

//   const uniqueCategories = [...new Set(events.map((e) => e.category))];

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const data = await getAllEvents(); // ✅ updated
//         setEvents(data);
//         setFilteredEvents(data);
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//       }
//     };
//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     let filtered = events;

//     if (search) {
//       filtered = filtered.filter((event) =>
//         event.title.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (selectedCategory) {
//       filtered = filtered.filter((event) => event.category === selectedCategory);
//     }

//     if (selectedDate) {
//       filtered = filtered.filter(
//         (event) =>
//           new Date(event.date).toDateString() === new Date(selectedDate).toDateString()
//       );
//     }

//     setFilteredEvents(filtered);
//   }, [search, selectedCategory, selectedDate, events]);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>

//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/3"
//         />

//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/4"
//         >
//           <option value="">All Categories</option>
//           {uniqueCategories.map((cat, index) => (
//             <option key={index} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/4"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event) => (
//             <Link
//               to={`/user/home/event-details/${event._id}`}
//               key={event._id}
//               className="p-4 border rounded-lg shadow hover:shadow-md bg-white transition duration-200"
//             >
//               <h2 className="text-xl font-semibold text-indigo-700">{event.title}</h2>
//               <p className="text-gray-500 text-sm">
//                 {new Date(event.date).toLocaleDateString()} &middot; {event.location}
//               </p>
//               <p className="text-sm text-gray-600 mt-1">Category: {event.category}</p>
//               <p className="mt-2 text-gray-700 line-clamp-3">{event.description}</p>
//               <div className="mt-4 text-right text-indigo-600 hover:underline text-sm">
//                 View Details →
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="text-gray-500">No events found with current filters.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllEvents } from '../../services/eventService';

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);

//   const [search, setSearch] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');

//   const uniqueCategories = [...new Set(events.map((e) => e.category))];

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const data = await getAllEvents();
//         setEvents(data);
//         setFilteredEvents(data);
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//       }
//     };
//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     let filtered = events;

//     if (search) {
//       filtered = filtered.filter((event) =>
//         event.title.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (selectedCategory) {
//       filtered = filtered.filter((event) => event.category === selectedCategory);
//     }

//     if (selectedDate) {
//       filtered = filtered.filter(
//         (event) =>
//           new Date(event.date).toDateString() === new Date(selectedDate).toDateString()
//       );
//     }

//     setFilteredEvents(filtered);
//   }, [search, selectedCategory, selectedDate, events]);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>

//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/3"
//         />

//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/4"
//         >
//           <option value="">All Categories</option>
//           {uniqueCategories.map((cat, index) => (
//             <option key={index} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/4"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event) => (
//             <div
//               key={event._id}
//               className="p-4 border rounded-lg shadow hover:shadow-md bg-white transition duration-200"
//             >
//               <h2 className="text-xl font-semibold text-indigo-700">{event.title}</h2>
//               <p className="text-gray-500 text-sm">
//                 {new Date(event.date).toLocaleDateString()} &middot; {event.location}
//               </p>
//               <p className="text-sm text-gray-600 mt-1">Category: {event.category}</p>
//               <p className="mt-2 text-gray-700 line-clamp-3">{event.description}</p>

//               {/* ✅ View Details button */}
//               <div className="mt-4 text-right">
//                 <Link
//                   to={`/user/home/event-details/${event._id}`}
//                   className="text-indigo-600 hover:underline text-sm"
//                 >
//                   View Details →
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No events found with current filters.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;


// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import EventDetails from './EventDetails'; // 👈 Import the modal

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [search, setSearch] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedEventId, setSelectedEventId] = useState(null); // 👈 For modal control

//   const uniqueCategories = [...new Set(events.map((e) => e.category))];

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const data = await getAllEvents();
//         setEvents(data);
//         setFilteredEvents(data);
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//       }
//     };
//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     let filtered = events;

//     if (search) {
//       filtered = filtered.filter((event) =>
//         event.title.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (selectedCategory) {
//       filtered = filtered.filter((event) => event.category === selectedCategory);
//     }

//     if (selectedDate) {
//       filtered = filtered.filter(
//         (event) =>
//           new Date(event.date).toDateString() === new Date(selectedDate).toDateString()
//       );
//     }

//     setFilteredEvents(filtered);
//   }, [search, selectedCategory, selectedDate, events]);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>

//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/3"
//         />

//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/4"
//         >
//           <option value="">All Categories</option>
//           {uniqueCategories.map((cat, index) => (
//             <option key={index} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/4"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event) => (
//             <div
//               key={event._id}
//               className="p-4 border rounded-lg shadow hover:shadow-md bg-white transition duration-200"
//             >
//               <h2 className="text-xl font-semibold text-indigo-700">{event.title}</h2>
//               <p className="text-gray-500 text-sm">
//                 {new Date(event.date).toLocaleDateString()} &middot; {event.location}
//               </p>
//               <p className="text-sm text-gray-600 mt-1">Category: {event.category}</p>
//               <p className="mt-2 text-gray-700 line-clamp-3">{event.description}</p>

//               {/* ✅ View Details button opens modal */}
//               <div className="mt-4 text-right">
//                 <button
//                   onClick={() => setSelectedEventId(event._id)}
//                   className="text-indigo-600 hover:underline text-sm"
//                 >
//                   View Details →
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No events found with current filters.</p>
//         )}
//       </div>

//       {/* ✅ Modal for selected event */}
//       {selectedEventId && (
//         <EventDetails
//           eventId={selectedEventId}
//           onClose={() => setSelectedEventId(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default UpcomingEvents;




// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [search, setSearch] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [registeredEventIds, setRegisteredEventIds] = useState([]);

//   const uniqueCategories = [...new Set(events.map((e) => e.category))];

//   // 🟢 Replace this with actual userId retrieval logic (e.g., from auth context or localStorage)
//   const userId = localStorage.getItem('userId');

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const data = await getAllEvents();
//         setEvents(data);
//         setFilteredEvents(data);
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//       }
//     };
//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     let filtered = events;

//     if (search) {
//       filtered = filtered.filter((event) =>
//         event.title.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (selectedCategory) {
//       filtered = filtered.filter((event) => event.category === selectedCategory);
//     }

//     if (selectedDate) {
//       filtered = filtered.filter(
//         (event) =>
//           new Date(event.date).toDateString() === new Date(selectedDate).toDateString()
//       );
//     }

//     setFilteredEvents(filtered);
//   }, [search, selectedCategory, selectedDate, events]);

//   // const handleRegister = async (eventId) => {
//   //   try {
//   //     await registerUserForEvent(userId, eventId);
//   //     toast.success('Registered successfully!');
//   //     setRegisteredEventIds((prev) => [...prev, eventId]);
//   //   } catch (err) {
//   //     console.error(err);
//   //     toast.error(err?.response?.data?.message || 'Registration failed.');
//   //   }
//   // };

// //   const handleRegister = async (eventId) => {
// //   try {
// //     await registerUserForEvent(userId, eventId);

// //     toast.success('You have successfully registered for the event!');
// //     setRegisteredEventIds((prev) => [...prev, eventId]);
// //   } catch (err) {
// //     const errorMessage =
// //       err?.response?.data?.message || 'Registration failed. Please try again.';
// //     toast.error(errorMessage);
// //   }
// // };



// const handleRegister = async (eventId) => {
//   try {
//     const userId = localStorage.getItem('userId');
//     if (!userId) {
//       toast.error('You must be logged in to register.');
//       return;
//     }

//     await registerUserForEvent(userId, eventId);
//     toast.success('Registered successfully!');
//     setRegisteredEventIds((prev) => [...prev, eventId]);
//   } catch (err) {
//     console.error(err);
//     toast.error(err?.response?.data?.message || 'Registration failed.');
//   }
// };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>

//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/3"
//         />

//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/4"
//         >
//           <option value="">All Categories</option>
//           {uniqueCategories.map((cat, index) => (
//             <option key={index} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/4"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event) => (
//             <div
//               key={event._id}
//               className="p-4 border rounded-lg shadow hover:shadow-md bg-white transition duration-200"
//             >
//               <h2 className="text-xl font-semibold text-indigo-700">{event.title}</h2>
//               <p className="text-gray-500 text-sm">
//                 {new Date(event.date).toLocaleDateString()} &middot; {event.location}
//               </p>
//               <p className="text-sm text-gray-600 mt-1">Category: {event.category}</p>
//               <p className="mt-2 text-gray-700 line-clamp-3">{event.description}</p>

//               <div className="mt-4 text-right">
//                 <button
//                   onClick={() => handleRegister(event._id)}
//                   disabled={registeredEventIds.includes(event._id)}
//                   className={`px-4 py-2 rounded text-white ${
//                     registeredEventIds.includes(event._id)
//                       ? 'bg-gray-400 cursor-not-allowed'
//                       : 'bg-indigo-600 hover:bg-indigo-700'
//                   }`}
//                 >
//                   {registeredEventIds.includes(event._id) ? 'Registered' : 'Register'}
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No events found with current filters.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;



// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [search, setSearch] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [registeredEventIds, setRegisteredEventIds] = useState([]);

//   const uniqueCategories = [...new Set(events.map((e) => e.category))];

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const data = await getAllEvents();
//         setEvents(data);
//         setFilteredEvents(data);
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//         toast.error('Failed to load events.');
//       }
//     };
//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     let filtered = events;

//     if (search) {
//       filtered = filtered.filter((event) =>
//         event.title.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (selectedCategory) {
//       filtered = filtered.filter((event) => event.category === selectedCategory);
//     }

//     if (selectedDate) {
//       filtered = filtered.filter(
//         (event) =>
//           new Date(event.date).toDateString() === new Date(selectedDate).toDateString()
//       );
//     }

//     setFilteredEvents(filtered);
//   }, [search, selectedCategory, selectedDate, events]);

//   const handleRegister = async (eventId) => {
//     const token = localStorage.getItem('token'); // JWT from login

//     if (!token) {
//       toast.error('You must be logged in to register.');
//       return;
//     }

//     try {
//       await axios.post(
//         `http://localhost:5000/api/registrations`,
//         { eventId },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       toast.success('Registered successfully!');
//       setRegisteredEventIds((prev) => [...prev, eventId]);
//     } catch (err) {
//       console.error(err);
//       const message =
//         err?.response?.data?.message || 'Registration failed. Please try again.';
//       toast.error(message);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>

//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/3"
//         />

//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/4"
//         >
//           <option value="">All Categories</option>
//           {uniqueCategories.map((cat, index) => (
//             <option key={index} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full md:w-1/4"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event) => (
//             <div
//               key={event._id}
//               className="p-4 border rounded-lg shadow hover:shadow-md bg-white transition duration-200"
//             >
//               <h2 className="text-xl font-semibold text-indigo-700">{event.title}</h2>
//               <p className="text-gray-500 text-sm">
//                 {new Date(event.date).toLocaleDateString()} &middot; {event.location}
//               </p>
//               <p className="text-sm text-gray-600 mt-1">Category: {event.category}</p>
//               <p className="mt-2 text-gray-700 line-clamp-3">{event.description}</p>

//               <div className="mt-4 text-right">
//                 <button
//                   onClick={() => handleRegister(event._id)}
//                   disabled={registeredEventIds.includes(event._id)}
//                   className={`px-4 py-2 rounded text-white ${
//                     registeredEventIds.includes(event._id)
//                       ? 'bg-gray-400 cursor-not-allowed'
//                       : 'bg-indigo-600 hover:bg-indigo-700'
//                   }`}
//                 >
//                   {registeredEventIds.includes(event._id) ? 'Registered' : 'Register'}
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No events found with current filters.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;


// import React, { useEffect, useState } from 'react';
// import axiosInstance from '../../services/axiosInstance';
// import { registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axiosInstance.get('/events');
//         setEvents(response.data);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleRegister = async (eventId) => {
//     const userId = localStorage.getItem('userId');
//     const token = localStorage.getItem('token');

//     if (!userId || !token) {
//       toast.error('You must be logged in to register.');
//       return;
//     }

//     try {
//       await registerUserForEvent(userId, eventId, token);
//       toast.success('✅ Registered successfully!');
//     } catch (error) {
//       console.error('Registration failed:', error);
//       toast.error('❌ Registration failed.');
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {events.map((event) => (
//           <div key={event._id} className="border rounded-lg p-4 shadow-md">
//             <h2 className="text-xl font-semibold">{event.title}</h2>
//             <p>{event.description}</p>
//             <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
//             <button
//               onClick={() => handleRegister(event._id)}
//               className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Register
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;









// import React, { useEffect, useState } from 'react';
// import axiosInstance from '../../services/axiosInstance';
// import { registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UpcomingEvents = () => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axiosInstance.get('/events');
//         const currentDate = new Date();

//         const upcoming = [];
//         const past = [];

//         response.data.forEach((event) => {
//           const eventDate = new Date(event.date);
//           if (eventDate >= currentDate) {
//             upcoming.push(event);
//           } else {
//             past.push(event);
//           }
//         });

//         setUpcomingEvents(upcoming);
//         setPastEvents(past);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         toast.error('Failed to fetch events');
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleRegister = async (eventId) => {
//     const userId = localStorage.getItem('userId');
//     const token = localStorage.getItem('token');

//     if (!userId || !token) {
//       toast.error('You must be logged in to register.');
//       return;
//     }

//     try {
//       await registerUserForEvent(userId, eventId, token);
//       toast.success('✅ Registered successfully!');
//     } catch (error) {
//       console.error('Registration failed:', error);
//       toast.error('❌ Registration failed.');
//     }
//   };

//   const renderEventCard = (event, isPast = false) => {
//     const eventDate = new Date(event.date);
//     const formattedDate = eventDate.toLocaleDateString();
//     const formattedTime = eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//     return (
//       <div
//         key={event._id}
//         className={`border rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 ${
//           isPast ? 'bg-gray-100' : 'bg-white'
//         }`}
//       >
//         <h2 className="text-2xl font-bold text-blue-700 mb-2">{event.title}</h2>
//         <p className="text-gray-700 font-medium mb-1">
//           <strong>Organizer:</strong> {event.organizerName || 'Unknown'}
//         </p>
//         <p className="text-gray-700 mb-1">
//           <strong>Date:</strong> {formattedDate}
//         </p>
//         <p className="text-gray-700 mb-1">
//           <strong>Time:</strong> {formattedTime}
//         </p>
//         <p className="text-gray-700 mb-1">
//           <strong>Venue:</strong> {event.venue || 'Not specified'}
//         </p>
//         <p className="text-gray-600 italic mb-4">{event.description}</p>
//         {!isPast && (
//           <button
//             onClick={() => handleRegister(event._id)}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Register
//           </button>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Upcoming Events</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//         {upcomingEvents.length > 0 ? (
//           upcomingEvents.map((event) => renderEventCard(event))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">No upcoming events.</p>
//         )}
//       </div>

//       {pastEvents.length > 0 && (
//         <>
//           <h2 className="text-2xl font-semibold mb-4 text-gray-700 border-t pt-6">Past Events</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {pastEvents.map((event) => renderEventCard(event, true))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default UpcomingEvents;



// import React, { useEffect, useState } from 'react';
// import axiosInstance from '../../services/axiosInstance';
// import { registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UpcomingEvents = () => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axiosInstance.get('/events');
//         const currentDate = new Date();

//         const sorted = response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
//         const upcoming = sorted.filter(event => new Date(event.date) >= currentDate);
//         const past = sorted.filter(event => new Date(event.date) < currentDate);

//         setUpcomingEvents(upcoming);
//         setPastEvents(past);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleRegister = async (eventId) => {
//     const userId = localStorage.getItem('userId');
//     const token = localStorage.getItem('token');

//     if (!userId || !token) {
//       toast.error('You must be logged in to register.');
//       return;
//     }

//     try {
//       await registerUserForEvent(userId, eventId, token);
//       toast.success('✅ Registered successfully!');
//     } catch (error) {
//       console.error('Registration failed:', error);
//       toast.error('❌ Registration failed.');
//     }
//   };

//   const renderEventCard = (event) => (
//     <div key={event._id} className="bg-white shadow-md rounded-lg overflow-hidden">
//       {event.image && (
//         <img
//           src={event.image}
//           alt={event.title}
//           className="w-full h-48 object-cover"
//         />
//       )}
//       <div className="p-4">
//         <h2 className="text-xl font-bold text-blue-700">{event.title}</h2>
//         <p className="text-sm text-gray-500 mb-2">
//           <strong>Date:</strong> {new Date(event.date).toLocaleDateString()} &nbsp;
//           <strong>Time:</strong> {event.time}
//         </p>
//         <p className="text-sm text-gray-500 mb-1"><strong>Venue:</strong> {event.location}</p>
//         <p className="text-sm text-gray-500 mb-1"><strong>Category:</strong> {event.category}</p>
//         <p className="text-sm text-gray-500 mb-2">
//           <strong>Organizer:</strong> {event.createdBy?.name || 'Unknown'}
//         </p>
//         <p className="text-gray-700 mb-4">{event.description}</p>

//         <button
//           onClick={() => handleRegister(event._id)}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//         >
//           Register
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Upcoming Events</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//         {upcomingEvents.length > 0 ? upcomingEvents.map(renderEventCard) : (
//           <p className="text-center col-span-full text-gray-500">No upcoming events.</p>
//         )}
//       </div>

//       {pastEvents.length > 0 && (
//         <>
//           <h2 className="text-2xl font-semibold mb-4 text-gray-700">Past Events</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pastEvents.map(renderEventCard)}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default UpcomingEvents;


// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await getAllEvents();
//         setEvents(response);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         toast.error('Failed to load events.');
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleRegister = async (eventId) => {
//     const userId = localStorage.getItem('userId');
//     const token = localStorage.getItem('token');

//     try {
//       await registerUserForEvent(userId, eventId, token);
//       toast.success('Successfully registered for the event!');
//     } catch (error) {
//       console.error('Registration failed:', error);
//       const message = error?.response?.data?.message || 'Registration failed!';
//       toast.error(message);
//     }
//   };

//   const isEventPast = (eventDate) => {
//     return new Date(eventDate) < new Date();
//   };

//   const renderEventCard = (event, isPast = false) => (
//     <div key={event._id} className="bg-white shadow-md rounded-lg overflow-hidden">
//       {event.image && (
//         <img
//           src={event.image}
//           alt={event.title}
//           className="w-full h-48 object-cover"
//         />
//       )}
//       <div className="p-4">
//         <h2 className="text-xl font-bold text-blue-700">{event.title}</h2>
//         <p className="text-sm text-gray-500 mb-2">
//           <strong>Date:</strong> {new Date(event.date).toLocaleDateString()} &nbsp;
//           <strong>Time:</strong> {event.time}
//         </p>
//         <p className="text-sm text-gray-500 mb-1"><strong>Venue:</strong> {event.location}</p>
//         <p className="text-sm text-gray-500 mb-1"><strong>Category:</strong> {event.category}</p>
//         <p className="text-sm text-gray-500 mb-2">
//           <strong>Organizer:</strong> {event.createdBy?.name || 'Unknown'}
//         </p>
//         <p className="text-gray-700 mb-4">{event.description}</p>

//         {!isPast && (
//           <button
//             onClick={() => handleRegister(event._id)}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   const upcomingEvents = events.filter(event => !isEventPast(event.date));
//   const pastEvents = events.filter(event => isEventPast(event.date));

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">All Events</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Upcoming Events */}
//         {upcomingEvents.length > 0 ? (
//           upcomingEvents.map(event => renderEventCard(event, false))
//         ) : (
//           <p className="text-center col-span-full text-gray-500">No upcoming events.</p>
//         )}
//       </div>

//       <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">Past Events</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {pastEvents.length > 0 ? (
//           pastEvents.map(event => renderEventCard(event, true))
//         ) : (
//           <p className="text-center col-span-full text-gray-500">No past events found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;



// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await getAllEvents();
//         setEvents(response);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         toast.error('Failed to load events.');
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleRegister = async (eventId) => {
//     try {
//       await registerUserForEvent(eventId);
//       toast.success('Successfully registered for the event!');
//     } catch (error) {
//       console.error('Registration failed:', error);
//       const message = error?.response?.data?.message || 'Registration failed!';
//       toast.error(message);
//     }
//   };

//   const isEventPast = (eventDate) => {
//     return new Date(eventDate) < new Date();
//   };

//   const renderEventCard = (event, isPast = false) => (
//     <div key={event._id} className="bg-white shadow-md rounded-lg overflow-hidden">
//       {event.image && (
//         <img
//           src={event.image}
//           alt={event.title}
//           className="w-full h-48 object-cover"
//         />
//       )}
//       <div className="p-4">
//         <h2 className="text-xl font-bold text-blue-700">{event.title}</h2>
//         <p className="text-sm text-gray-500 mb-2">
//           <strong>Date:</strong> {new Date(event.date).toLocaleDateString()} &nbsp;
//           <strong>Time:</strong> {event.time}
//         </p>
//         <p className="text-sm text-gray-500 mb-1"><strong>Venue:</strong> {event.location}</p>
//         <p className="text-sm text-gray-500 mb-1"><strong>Category:</strong> {event.category}</p>
//         <p className="text-sm text-gray-500 mb-2">
//           <strong>Organizer:</strong> {event.createdBy?.name || 'Unknown'}
//         </p>
//         <p className="text-gray-700 mb-4">{event.description}</p>

//         {!isPast && (
//           <button
//             onClick={() => handleRegister(event._id)}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   const upcomingEvents = events.filter(event => !isEventPast(event.date));
//   const pastEvents = events.filter(event => isEventPast(event.date));

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">All Events</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {upcomingEvents.length > 0 ? (
//           upcomingEvents.map(event => renderEventCard(event, false))
//         ) : (
//           <p className="text-center col-span-full text-gray-500">No upcoming events.</p>
//         )}
//       </div>

//       <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">Past Events</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {pastEvents.length > 0 ? (
//           pastEvents.map(event => renderEventCard(event, true))
//         ) : (
//           <p className="text-center col-span-full text-gray-500">No past events found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;





// UpcomingEvents.jsx

// import React, { useEffect, useState, useContext } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { AuthContext } from '../../context/AuthContext'; // ✅ import your AuthContext

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);
//   const { token } = useContext(AuthContext); // ✅ get token from context

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await getAllEvents();
//         setEvents(response);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         toast.error('Failed to load events.');
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('You must be logged in to register.');
//       return;
//     }

//     try {
//       await registerUserForEvent(eventId, token); // ✅ pass token to the service
//       toast.success('Successfully registered for the event!');
//     } catch (error) {
//       console.error('Registration failed:', error);
//       const message = error?.response?.data?.message || 'Registration failed!';
//       toast.error(message);
//     }
//   };

//   const isEventPast = (eventDate) => {
//     return new Date(eventDate) < new Date();
//   };

//   const renderEventCard = (event, isPast = false) => (
//     <div key={event._id} className="bg-white shadow-md rounded-lg overflow-hidden">
//       {event.image && (
//         <img
//           src={event.image}
//           alt={event.title}
//           className="w-full h-48 object-cover"
//         />
//       )}
//       <div className="p-4">
//         <h2 className="text-xl font-bold text-blue-700">{event.title}</h2>
//         <p className="text-sm text-gray-500 mb-2">
//           <strong>Date:</strong> {new Date(event.date).toLocaleDateString()} &nbsp;
//           <strong>Time:</strong> {event.time}
//         </p>
//         <p className="text-sm text-gray-500 mb-1"><strong>Venue:</strong> {event.location}</p>
//         <p className="text-sm text-gray-500 mb-1"><strong>Category:</strong> {event.category}</p>
//         <p className="text-sm text-gray-500 mb-2">
//           <strong>Organizer:</strong> {event.createdBy?.name || 'Unknown'}
//         </p>
//         <p className="text-gray-700 mb-4">{event.description}</p>

//         {!isPast && (
//           <button
//             onClick={() => handleRegister(event._id)}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   const upcomingEvents = events.filter(event => !isEventPast(event.date));
//   const pastEvents = events.filter(event => isEventPast(event.date));

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">All Events</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {upcomingEvents.length > 0 ? (
//           upcomingEvents.map(event => renderEventCard(event, false))
//         ) : (
//           <p className="text-center col-span-full text-gray-500">No upcoming events.</p>
//         )}
//       </div>

//       <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">Past Events</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {pastEvents.length > 0 ? (
//           pastEvents.map(event => renderEventCard(event, true))
//         ) : (
//           <p className="text-center col-span-full text-gray-500">No past events found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;




// // UpcomingEvents.jsx

// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import  useAuth  from '../../hooks/useAuth'; // ✅ updated hook usage
// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);
//   const { user } = useAuth(); // ✅ get user object including token and role

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await getAllEvents();
//         setEvents(response);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         toast.error('Failed to load events.');
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleRegister = async (eventId) => {
//     if (!user?.token) {
//       toast.error('You must be logged in to register.');
//       return;
//     }

//     if (user?.role !== 'student') {
//       toast.error('Only students can register for events.');
//       return;
//     }

//     try {
//       await registerUserForEvent(eventId, user.token);
//       toast.success('✅ Registered successfully!');
//     } catch (error) {
//       console.error('Registration failed:', error);
//       const message = error?.response?.data?.message || 'Registration failed!';
//       toast.error(message);
//     }
//   };

//   const isEventPast = (eventDate) => {
//     return new Date(eventDate) < new Date();
//   };

//   const renderEventCard = (event, isPast = false) => (
//     <div key={event._id} className="bg-white shadow-md rounded-lg overflow-hidden">
//       {event.image && (
//         <img
//           src={event.image}
//           alt={event.title}
//           className="w-full h-48 object-cover"
//         />
//       )}
//       <div className="p-4">
//         <h2 className="text-xl font-bold text-blue-700">{event.title}</h2>
//         <p className="text-sm text-gray-500 mb-2">
//           <strong>Date:</strong> {new Date(event.date).toLocaleDateString()} &nbsp;
//           <strong>Time:</strong> {event.time}
//         </p>
//         <p className="text-sm text-gray-500 mb-1"><strong>Venue:</strong> {event.location}</p>
//         <p className="text-sm text-gray-500 mb-1"><strong>Category:</strong> {event.category}</p>
//         <p className="text-sm text-gray-500 mb-2">
//           <strong>Organizer:</strong> {event.createdBy?.name || 'Unknown'}
//         </p>
//         <p className="text-gray-700 mb-4">{event.description}</p>

//         {!isPast && user?.role === 'student' && (
//           <button
//             onClick={() => handleRegister(event._id)}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   const upcomingEvents = events.filter(event => !isEventPast(event.date));
//   const pastEvents = events.filter(event => isEventPast(event.date));

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">All Events</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {upcomingEvents.length > 0 ? (
//           upcomingEvents.map(event => renderEventCard(event, false))
//         ) : (
//           <p className="text-center col-span-full text-gray-500">No upcoming events.</p>
//         )}
//       </div>

//       <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">Past Events</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {pastEvents.length > 0 ? (
//           pastEvents.map(event => renderEventCard(event, true))
//         ) : (
//           <p className="text-center col-span-full text-gray-500">No past events found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;




// ===================================================================================

// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import useAuth from '../../hooks/useAuth';

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);
//   const { user } = useAuth();

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await getAllEvents();
//         setEvents(response);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         toast.error('Failed to load events.');
//       }
//     };
//     fetchEvents();
//   }, []);

//   const handleRegister = async (eventId) => {
//     if (!user?.token) {
//       toast.error('You must be logged in to register.');
//       return;
//     }
//     if (user?.role !== 'student') {
//       toast.error('Only students can register for events.');
//       return;
//     }
//     try {
//       await registerUserForEvent(eventId, user.token);
//       toast.success('✅ Registered successfully!');
//     } catch (error) {
//       console.error('Registration failed:', error);
//       const message = error?.response?.data?.message || 'Registration failed!';
//       toast.error(message);
//     }
//   };

//   const isEventPast = (eventDate) => new Date(eventDate) < new Date();

//   const renderEventCard = (event, isPast = false) => (
//     <div key={event._id} className="bg-white shadow-md rounded-lg overflow-hidden">
//       {event.image && (
//         <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
//       )}
//       <div className="p-4">
//         <h2 className="text-xl font-bold text-blue-700">{event.title}</h2>
//         <p className="text-sm text-gray-500 mb-2">
//           <strong>Date:</strong> {new Date(event.date).toLocaleDateString()} &nbsp;
//           <strong>Time:</strong> {event.time}
//         </p>
//         <p className="text-sm text-gray-500 mb-1"><strong>Venue:</strong> {event.location}</p>
//         <p className="text-sm text-gray-500 mb-1"><strong>Category:</strong> {event.category}</p>
//         <p className="text-sm text-gray-500 mb-2">
//           <strong>Organizer:</strong> {event.createdBy?.name || 'Unknown'}
//         </p>
//         <p className="text-gray-700 mb-4">{event.description}</p>

//         {!isPast && user?.role === 'student' && (
//           <button
//             onClick={() => handleRegister(event._id)}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   const upcomingEvents = events.filter(event => !isEventPast(event.date));
//   const pastEvents = events.filter(event => isEventPast(event.date));

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">All Events</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {upcomingEvents.length > 0 ? (
//           upcomingEvents.map(event => renderEventCard(event, false))
//         ) : (
//           <p className="text-center col-span-full text-gray-500">No upcoming events.</p>
//         )}
//       </div>

//       <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">Past Events</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {pastEvents.length > 0 ? (
//           pastEvents.map(event => renderEventCard(event, true))
//         ) : (
//           <p className="text-center col-span-full text-gray-500">No past events found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;
// ===================================================================================



// ==============================================================
// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService'; // your existing
// import { registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = ({ onRegistered }) => {
//   const [events, setEvents] = useState([]);
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     (async () => {
//       try {
//         const { data } = await getAllEvents(); // ensure it returns { events: [...] } or adapt
//         setEvents(data.events || data);
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//       }
//     })();
//   }, []);

//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('Please login to register');
//       return;
//     }

//     try {
//       const res = await registerUserForEvent(eventId);
//       toast.success(res.message || 'Registered');
//       // optional parent callback to refresh MyEvents
//       if (onRegistered) onRegistered(res.registration);
//       // disable register button locally for this event
//       setEvents(prev => prev.map(e => e._id === eventId ? { ...e, registered: true } : e));
//     } catch (err) {
//       console.error('Register error', err);
//       const msg = err?.response?.data?.message || 'Registration failed';
//       toast.error(msg);
//     }
//   };

//   return (
//     <div>
//       <h2>Upcoming Events</h2>
//       {events.length === 0 ? <p>No events found</p> : (
//         <ul>
//           {events.map(ev => (
//             <li key={ev._id} style={{ marginBottom: 12, border: '1px solid #ddd', padding: 8 }}>
//               <div><strong>{ev.title}</strong> — {new Date(ev.date).toLocaleString()}</div>
//               <div>{ev.location}</div>
//               <button
//                 onClick={() => handleRegister(ev._id)}
//                 disabled={ev.registered}
//               >
//                 {ev.registered ? 'Registered' : 'Register'}
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UpcomingEvents;
// =====================================================WORKED CODE=======================================================

// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = ({ onRegistered }) => {
//   const [events, setEvents] = useState([]);
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     (async () => {
//       try {
//         const { events } = await getAllEvents(); // ✅ matches service return format
//         setEvents(events);
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//         toast.error('Failed to load events');
//       }
//     })();
//   }, []);

//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('Please login to register');
//       return;
//     }

//     try {
//       const res = await registerUserForEvent(eventId);
//       toast.success(res.message || 'Registered successfully');

//       if (onRegistered) onRegistered(res.registration);

//       // Mark event as registered locally
//       setEvents((prev) =>
//         prev.map((e) =>
//           e._id === eventId ? { ...e, registered: true } : e
//         )
//       );
//     } catch (err) {
//       console.error('Register error', err);
//       toast.error(err?.response?.data?.message || 'Registration failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Upcoming Events</h2>
//       {events.length === 0 ? (
//         <p>No events found</p>
//       ) : (
//         <ul>
//           {events.map((ev) => (
//             <li
//               key={ev._id}
//               style={{
//                 marginBottom: 12,
//                 border: '1px solid #ddd',
//                 padding: 8,
//                 borderRadius: 4,
//               }}
//             >
//               <div>
//                 <strong>{ev.title}</strong> —{' '}
//                 {new Date(ev.date).toLocaleString()}
//               </div>
//               <div>{ev.location}</div>
//               <button
//                 onClick={() => handleRegister(ev._id)}
//                 disabled={ev.registered}
//               >
//                 {ev.registered ? 'Registered' : 'Register'}
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UpcomingEvents;
// ============================================================================================================




// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = ({ onRegistered }) => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     (async () => {
//       try {
//         const { events } = await getAllEvents();
//         const now = new Date();

//         const upcoming = events.filter(ev => new Date(ev.date) >= now);
//         const past = events.filter(ev => new Date(ev.date) < now);

//         setUpcomingEvents(upcoming);
//         setPastEvents(past);
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//         toast.error('Failed to load events');
//       }
//     })();
//   }, []);

//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('Please login to register');
//       return;
//     }

//     try {
//       const res = await registerUserForEvent(eventId);
//       toast.success(res.message || 'Registered successfully');

//       if (onRegistered) onRegistered(res.registration);

//       setUpcomingEvents((prev) =>
//         prev.map((e) =>
//           e._id === eventId ? { ...e, registered: true } : e
//         )
//       );
//     } catch (err) {
//       console.error('Register error', err);
//       toast.error(err?.response?.data?.message || 'Registration failed');
//     }
//   };

//   const EventCard = ({ ev, isPast }) => (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
//       {ev.image && (
//         <img
//           src={ev.image}
//           alt={ev.title}
//           className="w-full h-48 object-cover"
//         />
//       )}
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800">{ev.title}</h3>
//         <p className="text-gray-600 mt-1">{ev.location}</p>
//         <p className="text-sm text-gray-500">
//           {new Date(ev.date).toLocaleString()}
//         </p>
//         <p className="text-gray-700 mt-2">{ev.description}</p>

//         {!isPast && (
//           <button
//             onClick={() => handleRegister(ev._id)}
//             disabled={ev.registered}
//             className={`mt-4 px-5 py-2 rounded-lg text-white font-medium transition-colors ${
//               ev.registered
//                 ? 'bg-green-500 cursor-not-allowed'
//                 : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {ev.registered ? 'Registered' : 'Register'}
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-10">
//       {/* Upcoming Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
//         {upcomingEvents.length === 0 ? (
//           <p className="text-gray-500">No upcoming events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcomingEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={false} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Past Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Events</h2>
//         {pastEvents.length === 0 ? (
//           <p className="text-gray-500">No past events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pastEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={true} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default UpcomingEvents;







// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { getMyRegistrations, registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = ({ onRegistered }) => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     (async () => {
//       try {
//         const { events } = await getAllEvents();
//         const now = new Date();

//         let registeredEventIds = [];
//         if (token) {
//           try {
//             const registrations = await getMyRegistrations();
//             registeredEventIds = registrations.map(r => r.eventId?._id || r.eventId);
//           } catch (err) {
//             console.error('Failed to fetch registrations', err);
//           }
//         }

//         // Mark registered events
//         const eventsWithRegFlag = events.map(ev => ({
//           ...ev,
//           registered: registeredEventIds.includes(ev._id)
//         }));

//         const upcoming = eventsWithRegFlag.filter(ev => new Date(ev.date) >= now);
//         const past = eventsWithRegFlag.filter(ev => new Date(ev.date) < now);

//         setUpcomingEvents(upcoming);
//         setPastEvents(past);
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//         toast.error('Failed to load events');
//       }
//     })();
//   }, [token]);

//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('Please login to register');
//       return;
//     }

//     try {
//       const res = await registerUserForEvent(eventId);
//       toast.success(res.message || 'Registered successfully');

//       if (onRegistered) onRegistered(res.registration);

//       setUpcomingEvents((prev) =>
//         prev.map((e) =>
//           e._id === eventId ? { ...e, registered: true } : e
//         )
//       );
//     } catch (err) {
//       console.error('Register error', err);
//       toast.error(err?.response?.data?.message || 'Registration failed');
//     }
//   };

//   const EventCard = ({ ev, isPast }) => (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
//       {ev.image && (
//         <img
//           src={ev.image}
//           alt={ev.title}
//           className="w-full h-48 object-cover"
//         />
//       )}
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800">{ev.title}</h3>
//         <p className="text-gray-600 mt-1">{ev.location}</p>
//         <p className="text-sm text-gray-500">
//           {new Date(ev.date).toLocaleString()}
//         </p>
//         <p className="text-gray-700 mt-2">{ev.description}</p>

//         {!isPast && (
//           <button
//             onClick={() => handleRegister(ev._id)}
//             disabled={ev.registered}
//             className={`mt-4 px-5 py-2 rounded-lg text-white font-medium transition-colors ${
//               ev.registered
//                 ? 'bg-green-500 cursor-not-allowed'
//                 : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {ev.registered ? 'Registered' : 'Register'}
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-10">
//       {/* Upcoming Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
//         {upcomingEvents.length === 0 ? (
//           <p className="text-gray-500">No upcoming events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcomingEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={false} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Past Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Events</h2>
//         {pastEvents.length === 0 ? (
//           <p className="text-gray-500">No past events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pastEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={true} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default UpcomingEvents;








// ============================================ worked ===========================================================================================


// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { getMyRegistrations, registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = ({ onRegistered }) => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     (async () => {
//       try {
//         const { events } = await getAllEvents();
//         const now = new Date();

//         let registeredEventIds = [];
//         if (token) {
//           try {
//             const res = await getMyRegistrations();

//             // Support both object or array formats
//             const registrations = Array.isArray(res)
//               ? res
//               : res.registrations || [];

//             registeredEventIds = registrations.map(
//               (r) => r.eventId?._id || r.eventId
//             );
//           } catch (err) {
//             console.error('Failed to fetch registrations', err);
//           }
//         }

//         // Mark registered events based on backend data
//         const eventsWithRegFlag = events.map((ev) => ({
//           ...ev,
//           registered: registeredEventIds.includes(ev._id),
//         }));

//         const upcoming = eventsWithRegFlag.filter(
//           (ev) => new Date(ev.date) >= now
//         );
//         const past = eventsWithRegFlag.filter(
//           (ev) => new Date(ev.date) < now
//         );

//         setUpcomingEvents(upcoming);
//         setPastEvents(past);
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//         toast.error('Failed to load events');
//       }
//     })();
//   }, [token]);

//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('Please login to register');
//       return;
//     }

//     try {
//       const res = await registerUserForEvent(eventId);
//       toast.success(res.message || 'Registered successfully');

//       if (onRegistered) onRegistered(res.registration);

//       // Update UI immediately
//       setUpcomingEvents((prev) =>
//         prev.map((e) =>
//           e._id === eventId ? { ...e, registered: true } : e
//         )
//       );
//     } catch (err) {
//       console.error('Register error', err);
//       toast.error(err?.response?.data?.message || 'Registration failed');
//     }
//   };

//   const EventCard = ({ ev, isPast }) => (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
//       {ev.image && (
//         <img
//           src={ev.image}
//           alt={ev.title}
//           className="w-full h-48 object-cover"
//         />
//       )}
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800">{ev.title}</h3>
//         <p className="text-gray-600 mt-1">{ev.location}</p>
//         <p className="text-sm text-gray-500">
//           {new Date(ev.date).toLocaleString()}
//         </p>
//         <p className="text-gray-700 mt-2">{ev.description}</p>

//         {!isPast && (
//           <button
//             onClick={() => handleRegister(ev._id)}
//             disabled={ev.registered}
//             className={`mt-4 px-5 py-2 rounded-lg text-white font-medium transition-colors ${
//               ev.registered
//                 ? 'bg-green-500 cursor-not-allowed'
//                 : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {ev.registered ? 'Registered' : 'Register'}
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-10">
//       {/* Upcoming Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
//         {upcomingEvents.length === 0 ? (
//           <p className="text-gray-500">No upcoming events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcomingEvents.map((ev) => (
//               <EventCard key={ev._id} ev={ev} isPast={false} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Past Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Events</h2>
//         {pastEvents.length === 0 ? (
//           <p className="text-gray-500">No past events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pastEvents.map((ev) => (
//               <EventCard key={ev._id} ev={ev} isPast={true} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default UpcomingEvents;
// ==================================================================================================




























// ========================================
// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { getMyRegistrations, registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = ({ onRegistered }) => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const token = localStorage.getItem('token');

//   const fetchEvents = async () => {
//     try {
//       const { events } = await getAllEvents();
//       const now = new Date();

//       let registeredEventIds = [];
//       if (token) {
//         try {
//           const res = await getMyRegistrations();

//           // Support all possible API shapes
//           const registrations = Array.isArray(res)
//             ? res
//             : Array.isArray(res?.registrations)
//             ? res.registrations
//             : [];

//           registeredEventIds = registrations.map((r) => {
//             if (typeof r.eventId === 'string') return r.eventId;
//             if (r.eventId && r.eventId._id) return r.eventId._id;
//             return null;
//           }).filter(Boolean);
//         } catch (err) {
//           console.error('Failed to fetch registrations', err);
//         }
//       }

//       // Mark registered events based on backend data
//       const eventsWithRegFlag = events.map((ev) => ({
//         ...ev,
//         registered: registeredEventIds.includes(ev._id),
//       }));

//       const upcoming = eventsWithRegFlag.filter((ev) => new Date(ev.date) >= now);
//       const past = eventsWithRegFlag.filter((ev) => new Date(ev.date) < now);

//       setUpcomingEvents(upcoming);
//       setPastEvents(past);
//     } catch (err) {
//       console.error('Failed to fetch events', err);
//       toast.error('Failed to load events');
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, [token]);

//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('Please login to register');
//       return;
//     }

//     try {
//       const res = await registerUserForEvent(eventId);
//       toast.success(res.message || 'Registered successfully');

//       if (onRegistered) onRegistered(res.registration);

//       // Refresh from backend so state is correct for future reloads
//       fetchEvents();
//     } catch (err) {
//       console.error('Register error', err);
//       toast.error(err?.response?.data?.message || 'Registration failed');
//     }
//   };

//   const EventCard = ({ ev, isPast }) => (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
//       {ev.image && (
//         <img
//           src={ev.image}
//           alt={ev.title}
//           className="w-full h-48 object-cover"
//         />
//       )}
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800">{ev.title}</h3>
//         <p className="text-gray-600 mt-1">{ev.location}</p>
//         <p className="text-sm text-gray-500">
//           {new Date(ev.date).toLocaleString()}
//         </p>
//         <p className="text-gray-700 mt-2">{ev.description}</p>

//         {!isPast && (
//           <button
//             onClick={() => handleRegister(ev._id)}
//             disabled={ev.registered}
//             className={`mt-4 px-5 py-2 rounded-lg text-white font-medium transition-colors ${
//               ev.registered
//                 ? 'bg-green-500 cursor-not-allowed'
//                 : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {ev.registered ? 'Registered' : 'Register'}
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-10">
//       {/* Upcoming Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
//         {upcomingEvents.length === 0 ? (
//           <p className="text-gray-500">No upcoming events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcomingEvents.map((ev) => (
//               <EventCard key={ev._id} ev={ev} isPast={false} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Past Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Events</h2>
//         {pastEvents.length === 0 ? (
//           <p className="text-gray-500">No past events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pastEvents.map((ev) => (
//               <EventCard key={ev._id} ev={ev} isPast={true} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default UpcomingEvents;
// ======================




// ====================================


// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { getMyRegistrations, registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = ({ onRegistered }) => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const token = localStorage.getItem('token');

//   // Load events and mark registered ones
//   const fetchEvents = async () => {
//     try {
//       const { events } = await getAllEvents();
//       const now = new Date();

//       let registeredEventIds = [];
//       if (token) {
//         try {
//           const res = await getMyRegistrations();
//           const registrations = Array.isArray(res)
//             ? res
//             : Array.isArray(res?.registrations)
//             ? res.registrations
//             : [];

//           registeredEventIds = registrations.map((r) => {
//             if (typeof r.eventId === 'string') return r.eventId;
//             if (r.eventId && r.eventId._id) return r.eventId._id;
//             return null;
//           }).filter(Boolean);
//         } catch (err) {
//           console.error('Failed to fetch registrations', err);
//         }
//       }

//       const eventsWithRegFlag = events.map((ev) => ({
//         ...ev,
//         registered: registeredEventIds.includes(ev._id),
//       }));

//       setUpcomingEvents(eventsWithRegFlag.filter((ev) => new Date(ev.date) >= now));
//       setPastEvents(eventsWithRegFlag.filter((ev) => new Date(ev.date) < now));
//     } catch (err) {
//       console.error('Failed to fetch events', err);
//       toast.error('Failed to load events');
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, [token]);

//   // Register event and update UI instantly
//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('Please login to register');
//       return;
//     }

//     try {
//       const res = await registerUserForEvent(eventId);
//       toast.success(res.message || 'Registered successfully');

//       // Instant UI update (without waiting for refetch)
//       setUpcomingEvents((prev) =>
//         prev.map((ev) =>
//           ev._id === eventId ? { ...ev, registered: true } : ev
//         )
//       );

//       if (onRegistered) onRegistered(res.registration);

//       // Background refresh from backend for persistence check
//       fetchEvents();
//     } catch (err) {
//       console.error('Register error', err);
//       toast.error(err?.response?.data?.message || 'Registration failed');
//     }
//   };

//   const EventCard = ({ ev, isPast }) => (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
//       {ev.image && (
//         <img
//           src={ev.image}
//           alt={ev.title}
//           className="w-full h-48 object-cover"
//         />
//       )}
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800">{ev.title}</h3>
//         <p className="text-gray-600 mt-1">{ev.location}</p>
//         <p className="text-sm text-gray-500">
//           {new Date(ev.date).toLocaleString()}
//         </p>
//         <p className="text-gray-700 mt-2">{ev.description}</p>

//         {!isPast && (
//           <button
//             onClick={() => handleRegister(ev._id)}
//             disabled={ev.registered}
//             className={`mt-4 px-5 py-2 rounded-lg text-white font-medium transition-colors ${
//               ev.registered
//                 ? 'bg-green-500 cursor-not-allowed'
//                 : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {ev.registered ? 'Registered' : 'Register'}
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-10">
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
//         {upcomingEvents.length === 0 ? (
//           <p className="text-gray-500">No upcoming events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcomingEvents.map((ev) => (
//               <EventCard key={ev._id} ev={ev} isPast={false} />
//             ))}
//           </div>
//         )}
//       </section>

//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Events</h2>
//         {pastEvents.length === 0 ? (
//           <p className="text-gray-500">No past events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pastEvents.map((ev) => (
//               <EventCard key={ev._id} ev={ev} isPast={true} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default UpcomingEvents;
// ===============================================


// =======================================================

// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { getMyRegistrations, registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = ({ onRegistered }) => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     (async () => {
//       try {
//         const { events } = await getAllEvents();
//         const now = new Date();

//         let registeredEventIds = [];
//         if (token) {
//           try {
//             const res = await getMyRegistrations();
//             const registrations = Array.isArray(res)
//               ? res
//               : Array.isArray(res?.registrations)
//               ? res.registrations
//               : [];

//             registeredEventIds = registrations
//               .map((r) => {
//                 if (typeof r.eventId === 'string') {
//                   return r.eventId;
//                 } else if (r.eventId && typeof r.eventId === 'object') {
//                   return r.eventId._id;
//                 }
//                 return null;
//               })
//               .filter(Boolean);
//           } catch (err) {
//             console.error('Failed to fetch registrations', err);
//           }
//         }

//         const eventsWithRegFlag = events.map((ev) => ({
//           ...ev,
//           registered: registeredEventIds.includes(ev._id),
//         }));

//         const upcoming = eventsWithRegFlag.filter(ev => new Date(ev.date) >= now);
//         const past = eventsWithRegFlag.filter(ev => new Date(ev.date) < now);

//         setUpcomingEvents(upcoming);
//         setPastEvents(past);
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//         toast.error('Failed to load events');
//       }
//     })();
//   }, [token]);

//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('Please login to register');
//       return;
//     }

//     try {
//       const res = await registerUserForEvent(eventId);
//       toast.success(res.message || 'Registered successfully');

//       if (onRegistered) onRegistered(res.registration);

//       setUpcomingEvents((prev) =>
//         prev.map((e) =>
//           e._id === eventId ? { ...e, registered: true } : e
//         )
//       );
//     } catch (err) {
//       console.error('Register error', err);
//       toast.error(err?.response?.data?.message || 'Registration failed');
//     }
//   };

//   const EventCard = ({ ev, isPast }) => (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
//       {ev.image && (
//         <img
//           src={ev.image}
//           alt={ev.title}
//           className="w-full h-48 object-cover"
//         />
//       )}
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800">{ev.title}</h3>
//         <p className="text-gray-600 mt-1">{ev.location}</p>
//         <p className="text-sm text-gray-500">
//           {new Date(ev.date).toLocaleString()}
//         </p>
//         <p className="text-gray-700 mt-2">{ev.description}</p>

//         {!isPast && (
//           <button
//             onClick={() => handleRegister(ev._id)}
//             disabled={ev.registered}
//             className={`mt-4 px-5 py-2 rounded-lg text-white font-medium transition-colors ${
//               ev.registered
//                 ? 'bg-green-500 cursor-not-allowed'
//                 : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {ev.registered ? 'Registered' : 'Register'}
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-10">
//       {/* Upcoming Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
//         {upcomingEvents.length === 0 ? (
//           <p className="text-gray-500">No upcoming events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcomingEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={false} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Past Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Events</h2>
//         {pastEvents.length === 0 ? (
//           <p className="text-gray-500">No past events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pastEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={true} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default UpcomingEvents;
// ================================================














// ============================================

// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { getMyRegistrations, registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = ({ onRegistered }) => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const token = localStorage.getItem('token');

//   const loadEvents = async () => {
//     try {
//       const { events } = await getAllEvents();
//       const now = new Date();

//       let registeredEventIds = [];
//       if (token) {
//         try {
//           const res = await getMyRegistrations();
//           const registrations = Array.isArray(res)
//             ? res
//             : Array.isArray(res?.registrations)
//             ? res.registrations
//             : [];

//           registeredEventIds = registrations
//             .map((r) => {
//               // normalize to string ID
//               if (typeof r.eventId === 'string') return r.eventId;
//               if (r.eventId && typeof r.eventId === 'object') return r.eventId._id;
//               return null;
//             })
//             .filter(Boolean);
//         } catch (err) {
//           console.error('Failed to fetch registrations', err);
//         }
//       }

//       const eventsWithFlags = events.map((ev) => ({
//         ...ev,
//         registered: registeredEventIds.includes(ev._id),
//       }));

//       setUpcomingEvents(eventsWithFlags.filter((ev) => new Date(ev.date) >= now));
//       setPastEvents(eventsWithFlags.filter((ev) => new Date(ev.date) < now));
//     } catch (err) {
//       console.error('Failed to fetch events', err);
//       toast.error('Failed to load events');
//     }
//   };

//   useEffect(() => {
//     loadEvents();
//   }, [token]);

//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('Please login to register');
//       return;
//     }

//     try {
//       const res = await registerUserForEvent(eventId);
//       toast.success(res.message || 'Registered successfully');

//       if (onRegistered) onRegistered(res.registration);

//       // Reload from backend so state is permanent
//       await loadEvents();
//     } catch (err) {
//       console.error('Register error', err);
//       toast.error(err?.response?.data?.message || 'Registration failed');
//     }
//   };

//   const EventCard = ({ ev, isPast }) => (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
//       {ev.image && (
//         <img src={ev.image} alt={ev.title} className="w-full h-48 object-cover" />
//       )}
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800">{ev.title}</h3>
//         <p className="text-gray-600 mt-1">{ev.location}</p>
//         <p className="text-sm text-gray-500">{new Date(ev.date).toLocaleString()}</p>
//         <p className="text-gray-700 mt-2">{ev.description}</p>

//         {!isPast && (
//           <button
//             onClick={() => handleRegister(ev._id)}
//             disabled={ev.registered}
//             className={`mt-4 px-5 py-2 rounded-lg text-white font-medium transition-colors ${
//               ev.registered ? 'bg-green-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {ev.registered ? 'Registered' : 'Register'}
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-10">
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
//         {upcomingEvents.length === 0 ? (
//           <p className="text-gray-500">No upcoming events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcomingEvents.map((ev) => (
//               <EventCard key={ev._id} ev={ev} isPast={false} />
//             ))}
//           </div>
//         )}
//       </section>

//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Events</h2>
//         {pastEvents.length === 0 ? (
//           <p className="text-gray-500">No past events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pastEvents.map((ev) => (
//               <EventCard key={ev._id} ev={ev} isPast={true} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default UpcomingEvents;
// ============================================









// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { getMyRegistrations, registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = ({ onRegistered }) => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const token = localStorage.getItem('token');

//   // Fetch events + registration status from backend
//   const loadEvents = async () => {
//     try {
//       const { events } = await getAllEvents();
//       const now = new Date();

//       let registeredEventIds = [];
//       if (token) {
//         try {
//           const res = await getMyRegistrations();
//           const registrations = Array.isArray(res)
//             ? res
//             : Array.isArray(res?.registrations)
//             ? res.registrations
//             : [];

//           registeredEventIds = registrations
//             .map((r) => {
//               // Normalize ID format
//               if (typeof r.eventId === 'string') return r.eventId;
//               if (r.eventId && typeof r.eventId === 'object') return r.eventId._id;
//               return null;
//             })
//             .filter(Boolean);
//         } catch (err) {
//           console.error('Failed to fetch registrations', err);
//         }
//       }

//       const eventsWithFlags = events.map((ev) => ({
//         ...ev,
//         registered: registeredEventIds.includes(ev._id),
//       }));

//       setUpcomingEvents(eventsWithFlags.filter((ev) => new Date(ev.date) >= now));
//       setPastEvents(eventsWithFlags.filter((ev) => new Date(ev.date) < now));
//     } catch (err) {
//       console.error('Failed to fetch events', err);
//       toast.error('Failed to load events');
//     }
//   };

//   useEffect(() => {
//     loadEvents();
//   }, [token]);

//   // Handle Register button click
//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('Please login to register');
//       return;
//     }

//     try {
//       const res = await registerUserForEvent(eventId);
//       toast.success(res.message || 'Registered successfully');

//       if (onRegistered) onRegistered(res.registration);

//       // Reload from backend so status is permanent
//       await loadEvents();
//     } catch (err) {
//       console.error('Register error', err);
//       toast.error(err?.response?.data?.message || 'Registration failed');
//     }
//   };

//   // Card component
//   const EventCard = ({ ev, isPast }) => (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
//       {ev.image && (
//         <img src={ev.image} alt={ev.title} className="w-full h-48 object-cover" />
//       )}
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800">{ev.title}</h3>
//         <p className="text-gray-600 mt-1">{ev.location}</p>
//         <p className="text-sm text-gray-500">{new Date(ev.date).toLocaleString()}</p>
//         <p className="text-gray-700 mt-2">{ev.description}</p>

//         {!isPast && (
//           <button
//             onClick={() => handleRegister(ev._id)}
//             disabled={ev.registered}
//             className={`mt-4 px-5 py-2 rounded-lg text-white font-medium transition-colors ${
//               ev.registered
//                 ? 'bg-green-500 cursor-not-allowed'
//                 : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {ev.registered ? 'Registered' : 'Register'}
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-10">
//       {/* Upcoming Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
//         {upcomingEvents.length === 0 ? (
//           <p className="text-gray-500">No upcoming events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcomingEvents.map((ev) => (
//               <EventCard key={ev._id} ev={ev} isPast={false} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Past Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Events</h2>
//         {pastEvents.length === 0 ? (
//           <p className="text-gray-500">No past events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pastEvents.map((ev) => (
//               <EventCard key={ev._id} ev={ev} isPast={true} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default UpcomingEvents;

















// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { getMyRegistrations, registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = ({ onRegistered }) => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const { events } = await getAllEvents();
//         const now = new Date();

//         let registeredEventIds = [];
//         if (token) {
//           try {
//             const { registrations } = await getMyRegistrations();
//             registeredEventIds = registrations.map(r =>
//               r.eventId?._id
//                 ? r.eventId._id.toString()
//                 : r.eventId?.toString()
//             );
//           } catch (err) {
//             console.error('Failed to fetch registrations', err);
//           }
//         }

//         const eventsWithRegFlag = events.map(ev => ({
//           ...ev,
//           registered: registeredEventIds.includes(ev._id.toString())
//         }));

//         setUpcomingEvents(eventsWithRegFlag.filter(ev => new Date(ev.date) >= now));
//         setPastEvents(eventsWithRegFlag.filter(ev => new Date(ev.date) < now));
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//         toast.error('Failed to load events');
//       }
//     };

//     fetchEvents();
//   }, [token]);

//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('Please login to register');
//       return;
//     }

//     try {
//       const res = await registerUserForEvent(eventId);
//       toast.success(res.message || 'Registered successfully');

//       if (onRegistered) onRegistered(res.registration);

//       setUpcomingEvents(prev =>
//         prev.map(e =>
//           e._id === eventId ? { ...e, registered: true } : e
//         )
//       );
//     } catch (err) {
//       console.error('Register error', err);
//       toast.error(err?.response?.data?.message || 'Registration failed');
//     }
//   };

//   const EventCard = ({ ev, isPast }) => (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
//       {ev.image && (
//         <img src={ev.image} alt={ev.title} className="w-full h-48 object-cover" />
//       )}
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800">{ev.title}</h3>
//         <p className="text-gray-600 mt-1">{ev.location}</p>
//         <p className="text-sm text-gray-500">{new Date(ev.date).toLocaleString()}</p>
//         <p className="text-gray-700 mt-2">{ev.description}</p>

//         {!isPast && (
//           <button
//             onClick={() => handleRegister(ev._id)}
//             disabled={ev.registered}
//             className={`mt-4 px-5 py-2 rounded-lg text-white font-medium transition-colors ${
//               ev.registered
//                 ? 'bg-green-500 cursor-not-allowed'
//                 : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {ev.registered ? 'Registered' : 'Register'}
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-10">
//       {/* Upcoming Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
//         {upcomingEvents.length === 0 ? (
//           <p className="text-gray-500">No upcoming events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcomingEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={false} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Past Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Events</h2>
//         {pastEvents.length === 0 ? (
//           <p className="text-gray-500">No past events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pastEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={true} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default UpcomingEvents;















// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { getMyRegistrations, registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = ({ onRegistered }) => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [registeredEvents, setRegisteredEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const { events } = await getAllEvents();
//         const now = new Date();

//         let registeredEventIds = [];
//         if (token) {
//           try {
//             const { registrations } = await getMyRegistrations();
//             registeredEventIds = registrations.map(r =>
//               r.eventId?._id
//                 ? r.eventId._id.toString()
//                 : r.eventId?.toString()
//             );
//           } catch (err) {
//             console.error('Failed to fetch registrations', err);
//           }
//         }

//         const eventsWithRegFlag = events.map(ev => ({
//           ...ev,
//           registered: registeredEventIds.includes(ev._id.toString())
//         }));

//         setUpcomingEvents(eventsWithRegFlag.filter(ev => new Date(ev.date) >= now && !ev.registered));
//         setRegisteredEvents(eventsWithRegFlag.filter(ev => ev.registered));
//         setPastEvents(eventsWithRegFlag.filter(ev => new Date(ev.date) < now && !ev.registered));
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//         toast.error('Failed to load events');
//       }
//     };

//     fetchEvents();
//   }, [token]);

//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('Please login to register');
//       return;
//     }

//     try {
//       const res = await registerUserForEvent(eventId);
//       toast.success(res.message || 'Registered successfully');

//       if (onRegistered) onRegistered(res.registration);

//       // Move from upcoming to registered
//       setUpcomingEvents(prev => prev.filter(e => e._id !== eventId));
//       setRegisteredEvents(prev => [
//         ...prev,
//         ...upcomingEvents.filter(e => e._id === eventId).map(e => ({ ...e, registered: true }))
//       ]);
//     } catch (err) {
//       console.error('Register error', err);
//       toast.error(err?.response?.data?.message || 'Registration failed');
//     }
//   };

//   const EventCard = ({ ev, isPast }) => (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
//       {ev.image && (
//         <img src={ev.image} alt={ev.title} className="w-full h-48 object-cover" />
//       )}
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800">{ev.title}</h3>
//         <p className="text-gray-600 mt-1">{ev.location}</p>
//         <p className="text-sm text-gray-500">{new Date(ev.date).toLocaleString()}</p>
//         <p className="text-gray-700 mt-2">{ev.description}</p>

//         {!isPast && !ev.registered && (
//           <button
//             onClick={() => handleRegister(ev._id)}
//             className="mt-4 px-5 py-2 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-700"
//           >
//             Register
//           </button>
//         )}

//         {ev.registered && (
//           <button
//             disabled
//             className="mt-4 px-5 py-2 rounded-lg text-white font-medium bg-green-500 cursor-not-allowed"
//           >
//             Registered
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-10">
//       {/* Upcoming Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
//         {upcomingEvents.length === 0 ? (
//           <p className="text-gray-500">No upcoming events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcomingEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={false} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Registered Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Registered Events</h2>
//         {registeredEvents.length === 0 ? (
//           <p className="text-gray-500">No registered events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {registeredEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={false} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Past Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Events</h2>
//         {pastEvents.length === 0 ? (
//           <p className="text-gray-500">No past events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pastEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={true} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default UpcomingEvents;



// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { getMyRegistrations, registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = ({ onRegistered }) => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [registeredEvents, setRegisteredEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const token = localStorage.getItem('token');

//   const fetchEvents = async () => {
//     try {
//       const { events } = await getAllEvents();
//       const now = new Date();

//       let registeredEventIds = [];
//       if (token) {
//         try {
//           const { registrations } = await getMyRegistrations();
//           registeredEventIds = registrations.map(r =>
//             r.eventId?._id
//               ? r.eventId._id.toString()
//               : r.eventId?.toString()
//           );

//           // Registered events list
//           setRegisteredEvents(
//             events.filter(ev => registeredEventIds.includes(ev._id.toString()))
//           );
//         } catch (err) {
//           console.error('Failed to fetch registrations', err);
//         }
//       }

//       // Filter Upcoming and Past excluding registered ones
//       setUpcomingEvents(
//         events.filter(
//           ev => new Date(ev.date) >= now && !registeredEventIds.includes(ev._id.toString())
//         )
//       );

//       setPastEvents(
//         events.filter(
//           ev => new Date(ev.date) < now && !registeredEventIds.includes(ev._id.toString())
//         )
//       );
//     } catch (err) {
//       console.error('Failed to fetch events', err);
//       toast.error('Failed to load events');
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, [token]);

//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('Please login to register');
//       return;
//     }

//     try {
//       const res = await registerUserForEvent(eventId);
//       toast.success(res.message || 'Registered successfully');

//       if (onRegistered) onRegistered(res.registration);

//       // Refresh lists after registration
//       await fetchEvents();
//     } catch (err) {
//       console.error('Register error', err);
//       toast.error(err?.response?.data?.message || 'Registration failed');
//     }
//   };

//   const EventCard = ({ ev, isPast, registered }) => (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
//       {ev.image && (
//         <img src={ev.image} alt={ev.title} className="w-full h-48 object-cover" />
//       )}
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800">{ev.title}</h3>
//         <p className="text-gray-600 mt-1">{ev.location}</p>
//         <p className="text-sm text-gray-500">{new Date(ev.date).toLocaleString()}</p>
//         <p className="text-gray-700 mt-2">{ev.description}</p>

//         {!isPast && !registered && (
//           <button
//             onClick={() => handleRegister(ev._id)}
//             className="mt-4 px-5 py-2 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-700"
//           >
//             Register
//           </button>
//         )}

//         {registered && (
//           <button
//             disabled
//             className="mt-4 px-5 py-2 rounded-lg text-white font-medium bg-green-500 cursor-not-allowed"
//           >
//             Registered
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-10">
//       {/* Upcoming Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
//         {upcomingEvents.length === 0 ? (
//           <p className="text-gray-500">No upcoming events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcomingEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={false} registered={false} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Registered Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Registered Events</h2>
//         {registeredEvents.length === 0 ? (
//           <p className="text-gray-500">No registered events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {registeredEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={false} registered={true} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Past Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Events</h2>
//         {pastEvents.length === 0 ? (
//           <p className="text-gray-500">No past events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pastEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={true} registered={false} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default UpcomingEvents;



















// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../../services/eventService';
// import { getMyRegistrations, registerUserForEvent } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const UpcomingEvents = () => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [registeredEvents, setRegisteredEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const token = localStorage.getItem('token');

//   // Fetch registered events directly from API
//   const fetchRegisteredEvents = async () => {
//     if (!token) return;
//     try {
//       const { registrations } = await getMyRegistrations();
//       setRegisteredEvents(
//         registrations
//           .map(r => r.event) // Assuming API returns event in `r.event`
//           .filter(Boolean)
//       );
//       return registrations.map(r => r.event?._id?.toString());
//     } catch (err) {
//       console.error('Failed to fetch registrations', err);
//       return [];
//     }
//   };

//   // Fetch all events and split into sections
//   const fetchEvents = async () => {
//     try {
//       const registeredIds = await fetchRegisteredEvents();
//       const { events } = await getAllEvents();
//       const now = new Date();

//       setUpcomingEvents(
//         events.filter(
//           ev => new Date(ev.date) >= now && !registeredIds.includes(ev._id.toString())
//         )
//       );

//       setPastEvents(
//         events.filter(
//           ev => new Date(ev.date) < now && !registeredIds.includes(ev._id.toString())
//         )
//       );
//     } catch (err) {
//       console.error('Failed to fetch events', err);
//       toast.error('Failed to load events');
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, [token]);

//   const handleRegister = async (eventId) => {
//     if (!token) {
//       toast.error('Please login to register');
//       return;
//     }
//     try {
//       const res = await registerUserForEvent(eventId);
//       toast.success(res.message || 'Registered successfully');

//       // Re-fetch both events & registrations so UI updates correctly
//       await fetchEvents();
//     } catch (err) {
//       console.error('Register error', err);
//       toast.error(err?.response?.data?.message || 'Registration failed');
//     }
//   };

//   const EventCard = ({ ev, isPast, registered }) => (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
//       {ev.image && (
//         <img src={ev.image} alt={ev.title} className="w-full h-48 object-cover" />
//       )}
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800">{ev.title}</h3>
//         <p className="text-gray-600 mt-1">{ev.location}</p>
//         <p className="text-sm text-gray-500">{new Date(ev.date).toLocaleString()}</p>
//         <p className="text-gray-700 mt-2">{ev.description}</p>

//         {!isPast && !registered && (
//           <button
//             onClick={() => handleRegister(ev._id)}
//             className="mt-4 px-5 py-2 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-700"
//           >
//             Register
//           </button>
//         )}

//         {registered && (
//           <button
//             disabled
//             className="mt-4 px-5 py-2 rounded-lg text-white font-medium bg-green-500 cursor-not-allowed"
//           >
//             Registered
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-10">
//       {/* Upcoming Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
//         {upcomingEvents.length === 0 ? (
//           <p className="text-gray-500">No upcoming events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcomingEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={false} registered={false} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Registered Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Registered Events</h2>
//         {registeredEvents.length === 0 ? (
//           <p className="text-gray-500">No registered events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {registeredEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={false} registered={true} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Past Events */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Events</h2>
//         {pastEvents.length === 0 ? (
//           <p className="text-gray-500">No past events</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pastEvents.map(ev => (
//               <EventCard key={ev._id} ev={ev} isPast={true} registered={false} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default UpcomingEvents;














import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../../services/eventService';
import { getMyRegistrations, registerUserForEvent } from '../../services/registrationService';
import { toast } from 'react-toastify';

const UpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const token = localStorage.getItem('token');
  const [registeredIds, setRegisteredIds] = useState([]);

  // Fetch registered events
  const fetchRegisteredEvents = async () => {
    if (!token) {
      setRegisteredEvents([]);
      setRegisteredIds([]);
      return;
    }
    try {
      const { registrations } = await getMyRegistrations();
      const regEvents = registrations
        .map(r => r.event || r.eventId) // Support both naming formats
        .filter(Boolean);

      setRegisteredEvents(regEvents);
      setRegisteredIds(regEvents.map(ev => ev._id?.toString()));
    } catch (err) {
      console.error('Failed to fetch registrations', err);
      toast.error('Failed to load registered events');
    }
  };

  // Fetch all events
  const fetchEvents = async () => {
    try {
      const { events } = await getAllEvents();
      const now = new Date();

      setUpcomingEvents(events.filter(ev => new Date(ev.date) >= now));
      setPastEvents(events.filter(ev => new Date(ev.date) < now));
    } catch (err) {
      console.error('Failed to fetch events', err);
      toast.error('Failed to load events');
    }
  };

  // Initial load
  useEffect(() => {
    fetchEvents();
    fetchRegisteredEvents();
  }, [token]);

  // Register handler
  const handleRegister = async (eventId) => {
    if (!token) {
      toast.error('Please login to register');
      return;
    }
    try {
      const res = await registerUserForEvent(eventId);
      toast.success(res.message || 'Registered successfully');
      await fetchRegisteredEvents(); // Refresh registered list
    } catch (err) {
      console.error('Register error', err);
      toast.error(err?.response?.data?.message || 'Registration failed');
    }
  };

  const EventCard = ({ ev, isPast }) => {
    const isRegistered = registeredIds.includes(ev._id?.toString());
    return (
      <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
        {ev.image && (
          <img src={ev.image} alt={ev.title} className="w-full h-48 object-cover" />
        )}
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-800">{ev.title}</h3>
          <p className="text-gray-600 mt-1">{ev.location}</p>
          <p className="text-sm text-gray-500">{new Date(ev.date).toLocaleString()}</p>
          <p className="text-gray-700 mt-2">{ev.description}</p>

          {!isPast && (
            <button
              onClick={() => !isRegistered && handleRegister(ev._id)}
              disabled={isRegistered}
              className={`mt-4 px-5 py-2 rounded-lg text-white font-medium transition-colors ${
                isRegistered
                  ? 'bg-green-500 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isRegistered ? 'Registered' : 'Register'}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-10">
      {/* Upcoming Events */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
        {upcomingEvents.length === 0 ? (
          <p className="text-gray-500">No upcoming events</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map(ev => (
              <EventCard key={ev._id} ev={ev} isPast={false} />
            ))}
          </div>
        )}
      </section>

      {/* Registered Events */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Registered Events</h2>
        {registeredEvents.length === 0 ? (
          <p className="text-gray-500">No registered events</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registeredEvents.map(ev => (
              <EventCard key={ev._id} ev={ev} isPast={false} />
            ))}
          </div>
        )}
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Events</h2>
        {pastEvents.length === 0 ? (
          <p className="text-gray-500">No past events</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map(ev => (
              <EventCard key={ev._id} ev={ev} isPast={true} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default UpcomingEvents;
