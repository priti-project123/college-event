// src/components/organizer/OrganizerTopbar.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrganizerTopbar = () => {
  const [organizer, setOrganizer] = useState(null);

  useEffect(() => {
    const fetchOrganizer = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/organizer/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrganizer(res.data);
      } catch (err) {
        console.error('Failed to fetch organizer:', err);
      }
    };

    fetchOrganizer();
  }, []);

  return (
    <div className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Organizer Dashboard</h1>
      <div className="text-gray-600">
        Welcome, <span className="font-medium">{organizer?.name || 'Organizer'}</span>
      </div>
    </div>
  );
};

export default OrganizerTopbar;
