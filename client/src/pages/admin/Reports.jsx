import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reports = () => {
  const [report, setReport] = useState({
    totalEvents: 0,
    totalUsers: 0,
    totalOrganizers: 0,
    topOrganizers: [],
    recentEvents: [],
  });

  useEffect(() => {
    fetchReportData();
  }, []);

  const fetchReportData = async () => {
    try {
      const [eventsRes, usersRes] = await Promise.all([
        axios.get('/api/events'),
        axios.get('/api/users'),
      ]);

      const events = eventsRes.data;
      const users = usersRes.data;

      const organizers = users.filter((u) => u.role === 'organizer');

      // Count events by organizer
      const organizerEventCount = {};
      events.forEach((e) => {
        if (e.createdBy) {
          organizerEventCount[e.createdBy] = (organizerEventCount[e.createdBy] || 0) + 1;
        }
      });

      const topOrganizers = organizers
        .map((org) => ({
          name: org.name,
          email: org.email,
          count: organizerEventCount[org._id] || 0,
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      const recentEvents = events
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

      setReport({
        totalEvents: events.length,
        totalUsers: users.length,
        totalOrganizers: organizers.length,
        topOrganizers,
        recentEvents,
      });
    } catch (error) {
      console.error('Failed to load report data', error);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Admin Reports</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Total Events</h3>
          <p className="text-3xl font-bold">{report.totalEvents}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl font-bold">{report.totalUsers}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Organizers</h3>
          <p className="text-3xl font-bold">{report.totalOrganizers}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Organizers */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-xl font-semibold mb-2">Top Organizers</h3>
          <ul>
            {report.topOrganizers.map((org, i) => (
              <li key={i} className="flex justify-between border-b py-2">
                <span>{org.name}</span>
                <span className="text-sm text-gray-600">{org.count} events</span>
              </li>
            ))}
            {report.topOrganizers.length === 0 && <p className="text-sm text-gray-500">No data.</p>}
          </ul>
        </div>

        {/* Recent Events */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-xl font-semibold mb-2">Recent Events</h3>
          <ul>
            {report.recentEvents.map((event) => (
              <li key={event._id} className="border-b py-2">
                <div className="font-semibold">{event.title}</div>
                <div className="text-sm text-gray-600">
                  {new Date(event.date).toLocaleDateString()}
                </div>
              </li>
            ))}
            {report.recentEvents.length === 0 && <p className="text-sm text-gray-500">No recent events.</p>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reports;
