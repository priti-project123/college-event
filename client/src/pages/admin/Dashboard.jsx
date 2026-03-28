import React, { useEffect, useState } from 'react';
import { FaUsers, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalEvents: 0,
    totalUsers: 0,
    upcomingEvents: 0,
  });

  const [recentEvents, setRecentEvents] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const res = await axios.get('/api/admin/dashboard'); // Adjust this API path as needed
      setStats(res.data.stats);
      setRecentEvents(res.data.recentEvents);
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4">
          <FaCalendarAlt className="text-blue-500 text-3xl" />
          <div>
            <h4 className="text-lg font-semibold">Total Events</h4>
            <p className="text-2xl font-bold">{stats.totalEvents}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4">
          <FaUsers className="text-green-500 text-3xl" />
          <div>
            <h4 className="text-lg font-semibold">Total Registrations</h4>
            <p className="text-2xl font-bold">{stats.totalUsers}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4">
          <FaClipboardList className="text-yellow-500 text-3xl" />
          <div>
            <h4 className="text-lg font-semibold">Upcoming Events</h4>
            <p className="text-2xl font-bold">{stats.upcomingEvents}</p>
          </div>
        </div>
      </div>

      {/* Recent Events */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Events</h3>
        {recentEvents.length > 0 ? (
          <ul className="divide-y">
            {recentEvents.map((event) => (
              <li key={event._id} className="py-3">
                <h4 className="font-bold">{event.title}</h4>
                <p className="text-gray-500 text-sm">{new Date(event.date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No recent events found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
