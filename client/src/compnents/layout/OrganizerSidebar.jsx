// // src/components/layout/OrganizerSidebar.jsx
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const OrganizerSidebar = () => {
//   const { pathname } = useLocation(); // ✅ Get current route

//   const navItems = [
//     { name: 'Dashboard', path: '/organizer/dashboard', icon: '🏠' },
//     { name: 'Create Event', path: '/organizer/create-event', icon: '➕' },
//     { name: 'My Events', path: '/organizer/my-events', icon: '📁' },
//     { name: 'Participants', path: '/organizer/participants', icon: '👥' },
//     { name: 'Notifications', path: '/organizer/notifications', icon: '🔔' },
//     { name: 'Reports', path: '/organizer/reports', icon: '📤' },
//   ];

//   return (
//     <div className="bg-gray-800 text-white min-h-screen w-64 p-4 space-y-4">
//       <h2 className="text-xl font-bold mb-6">🎓 Organizer Panel</h2>
//       <nav className="flex flex-col space-y-2">
//         {navItems.map((item) => (
//           <Link
//             key={item.name}
//             to={item.path}
//             className={`flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-700 ${
//               pathname === item.path ? 'bg-gray-700' : ''
//             }`}
//           >
//             <span>{item.icon}</span>
//             {item.name}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default OrganizerSidebar;


// src/components/layout/OrganizerSidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const OrganizerSidebar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/organizer/dashboard', icon: '🏠' },
    { name: 'Create Event', path: '/organizer/create-event', icon: '➕' },
    { name: 'My Events', path: '/organizer/my-events', icon: '📁' },
    { name: 'Participants', path: '/organizer/participants', icon: '👥' },
    { name: 'Notifications', path: '/organizer/notifications', icon: '🔔' },
    { name: 'Reports', path: '/organizer/reports', icon: '📤' },
    { name: 'Profile', path: '/organizer/profile', icon: '👤' }, 
    { name: 'Logout', path: '/login', icon: '🚪', logout: true }


  ];

  return (
    <div className="bg-gray-800 text-white min-h-screen w-64 p-4 space-y-4">
      <h2 className="text-xl font-bold mb-6">🎓 Organizer Panel</h2>
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-700 ${
              pathname === item.path ? 'bg-gray-700' : ''
            }`}
          >
            <span>{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default OrganizerSidebar;
