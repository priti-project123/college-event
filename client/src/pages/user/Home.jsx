// // ✅ src/pages/user/Home.jsx
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import eventService from '../../services/eventService';
// import UserNavbar from '../../compnents/layout/UserNavbar'
// const Home = () => {
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
//       <UserNavbar/>
//       <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
//       <input
//         type="text"
//         placeholder="Search events..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mb-4 p-2 border rounded w-full md:w-1/3"
//       />
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {filteredEvents.map((event) => (
//           <Link
//             to={`/events/${event._id}`}
//             key={event._id}
//             className="p-4 border rounded shadow hover:shadow-md bg-white"
//           >
//             <h2 className="text-xl font-semibold">{event.title}</h2>
//             <p className="text-gray-500 text-sm">{new Date(event.date).toLocaleDateString()}</p>
//             <p className="mt-2 line-clamp-3">{event.description}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;



// // src/pages/user/Home.jsx
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import eventService from '../../services/eventService';
// import UserNavbar from '../../compnents/layout/UserNavbar';

// const Home = () => {
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
//     <div className="flex min-h-screen">
//       <UserNavbar />
//       <div className="flex-1 p-6">
//         <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="mb-4 p-2 border rounded w-full md:w-1/2"
//         />
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {filteredEvents.map((event) => (
//             <Link
//               to={`/events/${event._id}`}
//               key={event._id}
//               className="p-4 border rounded shadow hover:shadow-md bg-white"
//             >
//               <h2 className="text-xl font-semibold">{event.title}</h2>
//               <p className="text-gray-500 text-sm">
//                 {new Date(event.date).toLocaleDateString()}
//               </p>
//               <p className="mt-2 line-clamp-3">{event.description}</p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// // src/pages/user/Home.jsx
// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import UserNavbar from '../../compnents/layout/UserNavbar';

// const Home = () => {
//   return (
//     <div className="flex">
//       <UserNavbar />
//       <div className="flex-1 p-6 bg-gray-50 min-h-screen">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import UserNavbar from '../../compnents/layout/UserNavbar';

// const Home = () => {
//   return (
//     <div className="flex">
//       <UserNavbar />
      
//       <div className="flex-1 p-6 overflow-y-auto">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Home;






import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNavbar from '../../compnents/layout/UserNavbar'; 

const Home = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-64 z-10">
        <UserNavbar />
      </div>

      {/* Scrollable Main Content */}
      <div className="ml-64 flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
