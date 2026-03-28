import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaUsers,
  FaClipboardList,
  FaTags,
  FaFlag,
} from 'react-icons/fa';

const AdminSidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <FaTachometerAlt /> },
    { name: 'Users', path: '/admin/users', icon: <FaUsers /> },
    { name: 'Organizers', path: '/admin/organizers', icon: <FaUsers /> },
    { name: 'Events', path: '/admin/events', icon: <FaClipboardList /> },
    { name: 'Categories', path: '/admin/categories', icon: <FaTags /> },
    { name: 'Reports', path: '/admin/reports', icon: <FaFlag /> },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-4">
      <div className="text-2xl font-bold mb-6">Admin Panel</div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-200 ${
                isActive ? 'bg-gray-700 font-semibold' : ''
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
