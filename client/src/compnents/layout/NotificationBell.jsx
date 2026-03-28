// src/components/layout/NotificationBell.jsx
import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';

const NotificationBell = ({ notifications = [], onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="relative p-2 hover:text-blue-600">
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white border rounded shadow-md z-50">
          <div className="p-2 font-semibold border-b">Notifications</div>
          <ul className="max-h-60 overflow-y-auto">
            {notifications.length === 0 ? (
              <li className="p-2 text-gray-500 text-sm">No notifications</li>
            ) : (
              notifications.map((notification, index) => (
                <li
                  key={index}
                  className={`p-2 text-sm border-b hover:bg-gray-50 ${
                    !notification.read ? 'font-semibold' : 'text-gray-500'
                  }`}
                >
                  {notification.message}
                  <div className="text-xs text-gray-400">
                    {new Date(notification.timestamp).toLocaleString()}
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
