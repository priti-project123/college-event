// // src/pages/organizer/Profile.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Profile() {
//   const [organizer, setOrganizer] = useState({});
//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     axios.get('/api/organizer/profile')
//       .then(res => setOrganizer(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleChange = (e) => {
//     setOrganizer({ ...organizer, [e.target.name]: e.target.value });
//   };

//   const handleSave = async () => {
//     await axios.put('/api/organizer/profile', organizer);
//     setEditing(false);
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg max-w-xl mx-auto mt-6">
//       <h2 className="text-2xl font-semibold mb-4">My Profile</h2>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-gray-700">Name</label>
//           <input
//             name="name"
//             value={organizer.name || ''}
//             onChange={handleChange}
//             disabled={!editing}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Email</label>
//           <input
//             name="email"
//             value={organizer.email || ''}
//             onChange={handleChange}
//             disabled={!editing}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Phone</label>
//           <input
//             name="phone"
//             value={organizer.phone || ''}
//             onChange={handleChange}
//             disabled={!editing}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring"
//           />
//         </div>

//         {editing ? (
//           <button
//             onClick={handleSave}
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             Save Changes
//           </button>
//         ) : (
//           <button
//             onClick={() => setEditing(true)}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Edit Profile
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function Profile() {
  const [organizer, setOrganizer] = useState({});
  const [editing, setEditing] = useState(false);
  const token = localStorage.getItem('token');

  // Common headers for JWT
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Fetch organizer profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/organizer/profile', axiosConfig);
        setOrganizer(res.data);
      } catch (err) {
        toast.error('Failed to load profile');
      }
    };

    fetchProfile();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setOrganizer({ ...organizer, [e.target.name]: e.target.value });
  };

  // Save profile to backend
  const handleSave = async () => {
    try {
      await axios.put('http://localhost:5000/api/organizer/profile', organizer, axiosConfig);
      toast.success('Profile updated successfully');
      setEditing(false);
    } catch (err) {
      toast.error('Failed to update profile');
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            name="name"
            value={organizer.name || ''}
            onChange={handleChange}
            disabled={!editing}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            name="email"
            value={organizer.email || ''}
            onChange={handleChange}
            disabled={!editing}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            name="phone"
            value={organizer.phone || ''}
            onChange={handleChange}
            disabled={!editing}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring"
          />
        </div>

        {editing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}
