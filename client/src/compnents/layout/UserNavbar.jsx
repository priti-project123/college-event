// // src/components/layout/UserNavbar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// // import NotificationBell from './NotificationBell';
// import { useNotifications } from '../../context/NotificationContext';

// const UserNavbar = () => {
//   const { notifications, markAllAsRead } = useNotifications();

//   return (
//     <nav className="bg-indigo-600 p-4 text-white flex justify-between items-center">
//       <Link to="/" className="text-lg font-bold">CollegeFest</Link>
//       <div className="flex items-center space-x-4">
//         {/* <NotificationBell
//           notifications={notifications}
//           onClick={markAllAsRead}
//         /> */}
//         <Link to="/events">Events</Link>
//         <Link to="/profile">Profile</Link>
//         <Link to="/logout">Logout</Link>
//       </div>
//     </nav>
//   );
// };

// export default UserNavbar;


// // src/components/layout/UserNavbar.jsx
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useNotifications } from '../../context/NotificationContext';
// import { Bell } from 'lucide-react'; // use Heroicons, Lucide or FontAwesome

// const UserNavbar = () => {
//   const { pathname } = useLocation();
//   const { notifications, markAllAsRead } = useNotifications();
//   const [open, setOpen] = useState(false);

//   // const navItems = [
//   //   { path: '/user/home', label: 'Upcoming Events' },
//   //   { path: '/user/my-events', label: 'My Events' },
//   //   { path: '/user/profile', label: 'Profile' },
//   //   { path: '/logout', label: 'Logout' },
//   // ];

//   const navItems = [
//   { path: '/user/home', label: 'Upcoming Events' },
//   { path: '/user/home/my-events', label: 'My Events' },
//   { path: '/user/profile', label: 'Profile' },
//   { path: '/logout', label: 'Logout' },
// ];

//   const unreadCount = notifications.filter((n) => !n.read).length;

//   const toggleDropdown = () => {
//     setOpen(!open);
//     markAllAsRead(); // mark as read on open
//   };

//   return (
//     <div className="h-screen w-64 bg-indigo-700 text-white flex flex-col shadow-lg relative">
//       <div className="text-2xl font-bold p-6 border-b border-indigo-500">
//         CollegeFest
//       </div>

//       <div className="px-4 mb-4 relative">
//         <button
//           onClick={toggleDropdown}
//           className="relative flex items-center gap-2 bg-indigo-600 px-3 py-2 rounded w-full hover:bg-indigo-500 transition"
//         >
//           <Bell className="w-5 h-5" />
//           <span>Notifications</span>
//           {unreadCount > 0 && (
//             <span className="ml-auto bg-red-500 text-xs px-2 py-0.5 rounded-full">
//               {unreadCount}
//             </span>
//           )}
//         </button>

//         {open && (
//           <div className="absolute z-50 mt-2 bg-white text-black shadow-lg rounded p-2 w-56">
//             {notifications.length === 0 ? (
//               <p className="text-sm text-gray-600">No notifications</p>
//             ) : (
//               notifications.map((note, index) => (
//                 <div
//                   key={index}
//                   className="border-b py-1 text-sm last:border-none"
//                 >
//                   {note.message}
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>

//       <nav className="flex-grow px-4 space-y-3">
//         {navItems.map((item) => (
//           <Link
//             key={item.path}
//             to={item.path}
//             className={`block px-4 py-2 rounded transition-all duration-200 hover:bg-indigo-600 ${
//               pathname === item.path ? 'bg-indigo-600 font-semibold' : ''
//             }`}
//           >
//             {item.label}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default UserNavbar;

// =================================================================================================================================
// // src/components/layout/UserNavbar.jsx
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useNotifications } from '../../context/NotificationContext';
// import { Bell, LogOut, User, CalendarDays, LayoutList } from 'lucide-react'; // icons

// const UserNavbar = () => {
//   const { pathname } = useLocation();
//   const { notifications, markAllAsRead } = useNotifications();
//   const [open, setOpen] = useState(false);

// const navItems = [
//   { path: '/user/home/dashboard', label: 'Dashboard', icon: <LayoutList size={18} /> }, // Dashboard tab
//   { path: '/user/home/upcoming-events', label: 'Upcoming Events', icon: <CalendarDays size={18} /> },
//   { path: '/user/home/my-events', label: 'My Events', icon: <LayoutList size={18} /> },
//   { path: '/user/profile', label: 'Profile', icon: <User size={18} /> },
//   { path: '/login', label: 'Logout', icon: <LogOut size={18} /> },
// ];

//   const unreadCount = notifications.filter((n) => !n.read).length;

//   const toggleDropdown = () => {
//     setOpen(!open);
//     if (!open) markAllAsRead();
//   };

//   return (
//     <div className="h-screen w-64 bg-gradient-to-b from-indigo-700 to-indigo-800 text-white flex flex-col shadow-lg">
//       <div className="text-3xl font-bold py-6 px-6 border-b border-indigo-600 tracking-wide">
//         College<span className="text-indigo-300">Fest</span>
//       </div>

//       {/* Notification Button */}
//       <div className="relative px-4 py-3">
//         <button
//           onClick={toggleDropdown}
//           className="w-full flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-md transition relative"
//         >
//           <Bell className="w-5 h-5" />
//           <span>Notifications</span>
//           {unreadCount > 0 && (
//             <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//               {unreadCount}
//             </span>
//           )}
//         </button>

//         {open && (
//           <div className="absolute z-50 left-4 right-4 mt-2 bg-white text-black shadow-xl rounded-lg p-3 text-sm">
//             {notifications.length === 0 ? (
//               <p className="text-gray-600">No notifications</p>
//             ) : (
//               notifications.map((note, index) => (
//                 <div
//                   key={index}
//                   className="border-b py-1 last:border-none"
//                 >
//                   {note.message}
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>

//       {/* Navigation Links */}
//       <nav className="flex-grow px-4 space-y-2 mt-4">
//         {navItems.map((item) => (
     
//           <Link
//             key={item.path}
//             to={item.path}
//             className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 hover:bg-indigo-600 ${pathname.startsWith(item.path) ? 'bg-indigo-600 font-medium' : ''
//               }`}
//           >
//             {item.icon}
//             {item.label}
//           </Link>

//         ))}
//       </nav>


//     </div>
//   );
// };

// export default UserNavbar;




// src/components/layout/UserNavbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNotifications } from '../../context/NotificationContext';
import { Bell, LogOut, User, CalendarDays, LayoutList } from 'lucide-react';

const UserNavbar = () => {
  const { pathname } = useLocation();
  const { notifications, markAllAsRead } = useNotifications();
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: '/user/home/dashboard', label: 'Dashboard', icon: <LayoutList size={18} /> },
    { path: '/user/home/upcoming-events', label: 'Upcoming Events', icon: <CalendarDays size={18} /> },
    { path: '/user/home/my-events', label: 'My Events', icon: <LayoutList size={18} /> },
    { path: '/user/profile', label: 'Profile', icon: <User size={18} /> },
    { path: '/login', label: 'Logout', icon: <LogOut size={18} /> },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  const toggleDropdown = () => {
    setOpen(!open);
    if (!open) markAllAsRead();
  };

  return (
    <div className="h-full w-64 bg-gradient-to-b from-indigo-700 to-indigo-800 text-white flex flex-col shadow-lg">
      <div className="text-3xl font-bold py-6 px-6 border-b border-indigo-600 tracking-wide">
        College<span className="text-indigo-300">Fest</span>
      </div>

      {/* Notification Button */}
      <div className="relative px-4 py-3">
        <button
          onClick={toggleDropdown}
          className="w-full flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-md transition relative"
        >
          <Bell className="w-5 h-5" />
          <span>Notifications</span>
          {unreadCount > 0 && (
            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {unreadCount}
            </span>
          )}
        </button>

        {open && (
          <div className="absolute z-50 left-4 right-4 mt-2 bg-white text-black shadow-xl rounded-lg p-3 text-sm">
            {notifications.length === 0 ? (
              <p className="text-gray-600">No notifications</p>
            ) : (
              notifications.map((note, index) => (
                <div key={index} className="border-b py-1 last:border-none">
                  {note.message}
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow px-4 space-y-2 mt-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 hover:bg-indigo-600 ${
              pathname.startsWith(item.path) ? 'bg-indigo-600 font-medium' : ''
            }`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default UserNavbar;
