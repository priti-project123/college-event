// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';

// const Notification = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Fetch notifications
//   const fetchNotifications = async () => {
//     try {
//       const res = await axios.get('/api/notifications');
//       setNotifications(res.data);
//     } catch (err) {
//       console.error(err);
//       toast.error('Failed to fetch notifications');
//     }
//   };

//   useEffect(() => {
//     fetchNotifications();
//   }, []);

//   // Add new notification
//   const handleAddNotification = async () => {
//     if (!newMessage.trim()) {
//       toast.error('Message cannot be empty');
//       return;
//     }

//     setLoading(true);
//     try {
//       await axios.post('/api/notifications', { message: newMessage });
//       toast.success('Notification created');
//       setNewMessage('');
//       fetchNotifications(); // refresh list
//     } catch (err) {
//       console.error(err);
//       toast.error('Failed to create notification');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Mark all as read
//   const handleMarkAllAsRead = async () => {
//     try {
//       await axios.put('/api/notifications/mark-all-read');
//       toast.success('All notifications marked as read');
//       fetchNotifications();
//     } catch (err) {
//       console.error(err);
//       toast.error('Failed to mark as read');
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded shadow">
//       <h2 className="text-xl font-bold mb-4">🔔 Notifications</h2>

//       {/* Add Notification */}
//       <div className="mb-6">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Enter notification message..."
//           className="border rounded p-2 mr-2 w-2/3"
//         />
//         <button
//           onClick={handleAddNotification}
//           disabled={loading}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           {loading ? 'Adding...' : 'Add Notification'}
//         </button>
//       </div>

//       {/* Mark all as read */}
//       <div className="mb-4">
//         <button
//           onClick={handleMarkAllAsRead}
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           Mark All as Read
//         </button>
//       </div>

//       {/* Notifications List */}
//       {notifications.length === 0 ? (
//         <p className="text-gray-500">No notifications yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {notifications.map((notif) => (
//             <li
//               key={notif._id}
//               className={`p-4 border rounded shadow-sm ${
//                 notif.isRead ? 'bg-gray-100' : 'bg-yellow-50'
//               }`}
//             >
//               <div className="text-lg font-semibold mb-1">{notif.message}</div>
//               <div className="text-xs text-gray-500">
//                 {new Date(notif.createdAt).toLocaleString()}
//               </div>
//               {notif.isRead && (
//                 <div className="text-green-600 text-sm mt-1">✓ Read</div>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Notification;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   // load notifications
//   const fetchNotifications = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/notifications');
//       setNotifications(res.data);
//     } catch {
//       toast.error('Failed to load notifications');
//     }
//   };

//   useEffect(() => {
//     fetchNotifications();
//   }, []);

//   // add one
//   const handleAddNotification = async () => {
//     if (!newMessage.trim()) {
//       toast.error('Message is empty');
//       return;
//     }
//     setLoading(true);
//     try {
//       await axios.post('http://localhost:5000/api/notifications', { message: newMessage });
//       toast.success('Notification sent');
//       setNewMessage('');
//       fetchNotifications();
//     } catch {
//       toast.error('Failed to send notification');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // mark all read
//   const handleMarkAllAsRead = async () => {
//     try {
//       await axios.put('http://localhost:5000/api/notifications/mark-all-read');
//       toast.success('Marked all as read');
//       fetchNotifications();
//     } catch {
//       toast.error('Failed to update notifications');
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded shadow">
//       <h2 className="text-xl font-bold mb-4">🔔 Notifications</h2>

//       <div className="mb-6 flex gap-2">
//         <input
//           type="text"
//           placeholder="Enter notification..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="border p-2 rounded w-full"
//         />
//         <button
//           onClick={handleAddNotification}
//           disabled={loading}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           {loading ? 'Sending...' : 'Add'}
//         </button>
//       </div>

//       <button
//         onClick={handleMarkAllAsRead}
//         className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//       >
//         Mark All as Read
//       </button>

//       {notifications.length === 0 ? (
//         <p className="text-gray-500">No notifications yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {notifications.map((notif) => (
//             <li
//               key={notif._id}
//               className={`p-4 border rounded shadow-sm ${
//                 notif.isRead ? 'bg-gray-100' : 'bg-yellow-50'
//               }`}
//             >
//               <div className="text-lg mb-1">{notif.message}</div>
//               <div className="text-xs text-gray-500">
//                 {new Date(notif.createdAt).toLocaleString()}
//               </div>
//               {notif.isRead && (
//                 <div className="text-green-600 text-sm mt-1">✓ Read</div>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Notifications;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Get token from localStorage
  const token = localStorage.getItem('token');

  // Common headers for all requests
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Load notifications
  const fetchNotifications = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/notifications', axiosConfig);
      setNotifications(res.data);
    } catch (err) {
      toast.error('Failed to load notifications');
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  // Add one
  const handleAddNotification = async () => {
    if (!newMessage.trim()) {
      toast.error('Message is empty');
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        'http://localhost:5000/api/notifications',
        { message: newMessage },
        axiosConfig
      );
      toast.success('Notification sent');
      setNewMessage('');
      fetchNotifications();
    } catch (err) {
      toast.error('Failed to send notification');
    } finally {
      setLoading(false);
    }
  };

  // Mark all read
  const handleMarkAllAsRead = async () => {
    try {
      await axios.put('http://localhost:5000/api/notifications/mark-all-read', null, axiosConfig);
      toast.success('Marked all as read');
      fetchNotifications();
    } catch (err) {
      toast.error('Failed to update notifications');
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">🔔 Notifications</h2>

      <div className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Enter notification..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleAddNotification}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Sending...' : 'Add'}
        </button>
      </div>

      <button
        onClick={handleMarkAllAsRead}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Mark All as Read
      </button>

      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications yet.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notif) => (
            <li
              key={notif._id}
              className={`p-4 border rounded shadow-sm ${
                notif.isRead ? 'bg-gray-100' : 'bg-yellow-50'
              }`}
            >
              <div className="text-lg mb-1">{notif.message}</div>
              <div className="text-xs text-gray-500">
                {new Date(notif.createdAt).toLocaleString()}
              </div>
              {notif.isRead && (
                <div className="text-green-600 text-sm mt-1">✓ Read</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
