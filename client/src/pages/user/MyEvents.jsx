// // ✅ src/pages/user/MyEvents.jsx
// import React, { useEffect, useState } from 'react';
// import {getUserRegistrations} from '../../services/registrationService';
// import useAuth  from '../../hooks/useAuth';

// const MyEvents = () => {
//   const { user } = useAuth();
//   const [myEvents, setMyEvents] = useState([]);

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const data = await getUserRegistrations(user._id);
//         setMyEvents(data);
//       } catch (err) {
//         console.error('Error loading my events', err);
//       }
//     };
//     if (user?._id) fetch();
//   }, [user]);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">My Registered Events</h1>
//       <ul className="space-y-4">
//         {myEvents.map((reg) => (
//           <li
//             key={reg._id}
//             className="p-4 bg-white shadow rounded border border-gray-200"
//           >
//             <h2 className="text-xl font-semibold">{reg.event?.title}</h2>
//             <p className="text-sm text-gray-600">
//               {new Date(reg.event?.date).toLocaleDateString()} | {reg.event?.location}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyEvents;






// ==================================================================================

// import React, { useEffect, useState } from 'react';
// import { getMyRegistrations } from '../../services/registrationService';
// import useAuth from '../../hooks/useAuth';
// import { toast } from 'react-toastify';

// const MyEvents = () => {
//   const { user } = useAuth();
//   const [myEvents, setMyEvents] = useState([]);

//   useEffect(() => {
//     const fetchMyEvents = async () => {
//       try {
//         const data = await getMyRegistrations(user.token); // ✅ token-based
//         setMyEvents(data);
//       } catch (err) {
//         console.error('Error loading my events', err);
//         toast.error('Failed to load registered events.');
//       }
//     };
//     if (user?.token) fetchMyEvents();
//   }, [user]);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">My Registered Events</h1>
//       {myEvents.length > 0 ? (
//         <ul className="space-y-4">
//           {myEvents.map((reg) => (
//             <li
//               key={reg._id}
//               className="p-4 bg-white shadow rounded border border-gray-200"
//             >
//               <h2 className="text-xl font-semibold">{reg.event?.title}</h2>
//               <p className="text-sm text-gray-600">
//                 {new Date(reg.event?.date).toLocaleDateString()} | {reg.event?.location}
//               </p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-gray-500">You have not registered for any events yet.</p>
//       )}
//     </div>
//   );
// };

// export default MyEvents;

// ============================================================================================



// ======================================= working code============================

// import React, { useEffect, useState } from 'react';
// import { getMyRegistrations } from '../../services/registrationService';

// const MyEvents = () => {
//   const [registrations, setRegistrations] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const { registrations } = await getMyRegistrations();
//         setRegistrations(registrations || []);
//       } catch (err) {
//         console.error('Failed to fetch my registrations', err);
//       }
//     })();
//   }, []);

//   return (
//     <div>
//       <h2>My Events</h2>
//       {registrations.length === 0 ? <p>You have not registered for any events.</p> : (
//         <ul>
//           {registrations.map(r => (
//             <li key={r._id} style={{ marginBottom: 10 }}>
//               <div><strong>{r.event?.title}</strong></div>
//               <div>{r.event?.date ? new Date(r.event.date).toLocaleString() : ''}</div>
//               <div>{r.event?.location}</div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MyEvents;

// =============================================





// import React, { useEffect, useState } from 'react';
// import { getMyRegistrations, cancelRegistration } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const MyEvents = () => {
//   const [registrations, setRegistrations] = useState([]);

//   useEffect(() => {
//     fetchMyRegistrations();
//   }, []);

//   const fetchMyRegistrations = async () => {
//     try {
//       const { registrations } = await getMyRegistrations();
//       setRegistrations(registrations || []);
//     } catch (err) {
//       console.error('Failed to fetch my registrations', err);
//       toast.error('Failed to load your events');
//     }
//   };

//   const handleCancel = async (registrationId) => {
//     if (!window.confirm('Are you sure you want to cancel this registration?')) return;

//     try {
//       await cancelRegistration(registrationId);
//       toast.success('Registration cancelled');
//       setRegistrations((prev) => prev.filter(r => r._id !== registrationId));
//     } catch (err) {
//       console.error('Cancel error', err);
//       toast.error(err?.response?.data?.message || 'Failed to cancel');
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-50 rounded-xl shadow-lg">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">My Events</h2>
      
//       {registrations.length === 0 ? (
//         <p className="text-gray-500">You have not registered for any events.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
//             <thead>
//               <tr className="bg-blue-600 text-white text-left">
//                 <th className="py-3 px-4">No.</th>
//                 <th className="py-3 px-4">Event Name</th>
//                 <th className="py-3 px-4">Date</th>
//                 <th className="py-3 px-4">Time</th>
//                 <th className="py-3 px-4">Venue</th>
//                 <th className="py-3 px-4">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {registrations.map((r, index) => {
//                 const event = r.event || {};
//                 const eventDate = event.date ? new Date(event.date) : null;
//                 return (
//                   <tr
//                     key={r._id}
//                     className="border-b hover:bg-gray-100 transition-colors"
//                   >
//                     <td className="py-3 px-4">{index + 1}</td>
//                     <td className="py-3 px-4 font-medium">{event.title || '-'}</td>
//                     <td className="py-3 px-4">{eventDate ? eventDate.toLocaleDateString() : '-'}</td>
//                     <td className="py-3 px-4">{eventDate ? eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-'}</td>
//                     <td className="py-3 px-4">{event.location || '-'}</td>
//                     <td className="py-3 px-4">
//                       <button
//                         onClick={() => handleCancel(r._id)}
//                         className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition-colors"
//                       >
//                         Cancel
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyEvents;


// ==================================


// import React, { useEffect, useState } from 'react';
// import { getMyRegistrations, cancelRegistration } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const MyEvents = () => {
//   const [registrations, setRegistrations] = useState([]);

//   useEffect(() => {
//     fetchMyRegistrations();
//   }, []);

//   const fetchMyRegistrations = async () => {
//     try {
//       const { registrations } = await getMyRegistrations();
//       setRegistrations(registrations || []);
//     } catch (err) {
//       console.error('Failed to fetch my registrations', err);
//       toast.error('Could not load your events');
//     }
//   };

//   const handleCancel = async (registrationId) => {
//     if (!window.confirm('Are you sure you want to cancel this registration?')) return;
//     try {
//       await cancelRegistration(registrationId);
//       toast.success('Registration cancelled');
//       setRegistrations((prev) => prev.filter((r) => r._id !== registrationId));
//     } catch (err) {
//       console.error('Cancel error', err);
//       toast.error(err?.response?.data?.message || 'Cancellation failed');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>My Events</h2>
//       {registrations.length === 0 ? (
//         <p>You have not registered for any events.</p>
//       ) : (
//         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//           <thead>
//             <tr style={{ backgroundColor: '#f4f4f4' }}>
//               <th style={thStyle}>No.</th>
//               <th style={thStyle}>Event Name</th>
//               <th style={thStyle}>Date</th>
//               <th style={thStyle}>Venue</th>
//               <th style={thStyle}>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {registrations.map((r, index) => {
//               const eventDate = r.event?.date ? new Date(r.event.date) : null;
//               return (
//                 <tr key={r._id} style={{ textAlign: 'center' }}>
//                   <td style={tdStyle}>{index + 1}</td>
//                   <td style={tdStyle}>{r.event?.title}</td>
//                   <td style={tdStyle}>{eventDate ? eventDate.toLocaleDateString() : ''}</td>
//                   <td style={tdStyle}>{r.event?.location}</td>
//                   <td style={tdStyle}>
//                     <button
//                       onClick={() => handleCancel(r._id)}
//                       style={{
//                         padding: '6px 12px',
//                         backgroundColor: '#e74c3c',
//                         color: '#fff',
//                         border: 'none',
//                         borderRadius: '4px',
//                         cursor: 'pointer'
//                       }}
//                     >
//                       Cancel
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// const thStyle = {
//   padding: '10px',
//   border: '1px solid #ddd'
// };

// const tdStyle = {
//   padding: '8px',
//   border: '1px solid #ddd'
// };

// export default MyEvents;

// ===================









// import React, { useEffect, useState } from 'react';
// import { getMyRegistrations, cancelRegistration } from '../../services/registrationService';
// import { toast } from 'react-toastify';

// const MyEvents = () => {
//   const [registrations, setRegistrations] = useState([]);

//   useEffect(() => {
//     fetchMyRegistrations();
//   }, []);

//   const fetchMyRegistrations = async () => {
//     try {
//       const { registrations } = await getMyRegistrations();
//       setRegistrations(registrations || []);
//     } catch (err) {
//       console.error('Failed to fetch my registrations', err);
//       toast.error('Could not load your events');
//     }
//   };

//   const handleCancel = async (registrationId) => {
//     if (!window.confirm('Are you sure you want to cancel this registration?')) return;
//     try {
//       await cancelRegistration(registrationId); // delete from DB
//       toast.success('Registration cancelled');

//       // Update UI: mark as canceled without removing row
//       setRegistrations((prev) =>
//         prev.map((r) =>
//           r._id === registrationId ? { ...r, status: 'canceled' } : r
//         )
//       );
//     } catch (err) {
//       console.error('Cancel error', err);
//       toast.error(err?.response?.data?.message || 'Cancellation failed');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>My Events</h2>
//       {registrations.length === 0 ? (
//         <p>You have not registered for any events.</p>
//       ) : (
//         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//           <thead>
//             <tr style={{ backgroundColor: '#f4f4f4' }}>
//               <th style={thStyle}>No.</th>
//               <th style={thStyle}>Event Name</th>
//               <th style={thStyle}>Date</th>
//               <th style={thStyle}>Venue</th>
//               <th style={thStyle}>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {registrations.map((r, index) => {
//               const eventDate = r.event?.date ? new Date(r.event.date) : null;
//               return (
//                 <tr key={r._id} style={{ textAlign: 'center' }}>
//                   <td style={tdStyle}>{index + 1}</td>
//                   <td style={tdStyle}>{r.event?.title}</td>
//                   <td style={tdStyle}>{eventDate ? eventDate.toLocaleDateString() : ''}</td>
//                   <td style={tdStyle}>{r.event?.location}</td>
//                   <td style={tdStyle}>
//                     {r.status === 'canceled' ? (
//                       <span style={{ color: 'red', fontWeight: 'bold' }}>Canceled</span>
//                     ) : (
//                       <button
//                         onClick={() => handleCancel(r._id)}
//                         style={{
//                           padding: '6px 12px',
//                           backgroundColor: '#e74c3c',
//                           color: '#fff',
//                           border: 'none',
//                           borderRadius: '4px',
//                           cursor: 'pointer'
//                         }}
//                       >
//                         Cancel
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// const thStyle = {
//   padding: '10px',
//   border: '1px solid #ddd'
// };

// const tdStyle = {
//   padding: '8px',
//   border: '1px solid #ddd'
// };

// export default MyEvents;

















import React, { useEffect, useState } from 'react';
import { getMyRegistrations } from '../../services/registrationService';
import { toast } from 'react-toastify';

const MyEvents = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMyRegistrations();
  }, []);

  const fetchMyRegistrations = async () => {
    setLoading(true);
    try {
      const { registrations } = await getMyRegistrations();
      setRegistrations(registrations || []);
    } catch (err) {
      console.error('Failed to fetch my registrations', err);
      toast.error('Could not load your events');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Events</h2>

      {loading ? (
        <p>Loading...</p>
      ) : registrations.length === 0 ? (
        <p>You have not registered for any events.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4' }}>
              <th style={thStyle}>No.</th>
              <th style={thStyle}>Event Name</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Venue</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((r, index) => {
              const eventDate = r.event?.date ? new Date(r.event.date) : null;
              return (
                <tr key={r._id} style={{ textAlign: 'center' }}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>{r.event?.title}</td>
                  <td style={tdStyle}>{eventDate ? eventDate.toLocaleDateString() : ''}</td>
                  <td style={tdStyle}>{r.event?.location}</td>
                  <td style={tdStyle}>
                    {r.status === 'canceled' ? (
                      <span style={{ color: 'red', fontWeight: 'bold' }}>Canceled</span>
                    ) : (
                      <span style={{ color: 'green', fontWeight: 'bold' }}>Active</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

const thStyle = {
  padding: '10px',
  border: '1px solid #ddd'
};

const tdStyle = {
  padding: '8px',
  border: '1px solid #ddd'
};

export default MyEvents;







// // ✅ src/pages/user/MyEvents.jsx
// import React, { useEffect, useState } from 'react';
// import { getUserRegistrations } from '../../services/registrationService';
// import useAuth from '../../hooks/useAuth';

// const MyEvents = () => {
//   const { user } = useAuth();
//   const [myEvents, setMyEvents] = useState([]);

//   useEffect(() => {
//     const fetchRegistrations = async () => {
//       try {
//         const data = await getUserRegistrations(user._id);
//         setMyEvents(data);
//       } catch (err) {
//         console.error('Error loading my events', err);
//       }
//     };

//     if (user?._id) fetchRegistrations();
//   }, [user]);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">📋 My Registered Events</h1>

//       {myEvents.length > 0 ? (
//         <div className="overflow-x-auto rounded-lg shadow-lg">
//           <table className="min-w-full bg-white text-sm border border-gray-200">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="px-4 py-3 text-left">#</th>
//                 <th className="px-4 py-3 text-left">Event Name</th>
//                 <th className="px-4 py-3 text-left">Date</th>
//                 <th className="px-4 py-3 text-left">Time</th>
//                 <th className="px-4 py-3 text-left">Venue</th>
//               </tr>
//             </thead>
//             <tbody>
//               {myEvents.map((reg, index) => (
//                 <tr
//                   key={reg._id}
//                   className="border-t border-gray-100 hover:bg-blue-50 transition"
//                 >
//                   <td className="px-4 py-2 font-medium">{index + 1}</td>
//                   <td className="px-4 py-2">{reg.event?.title}</td>
//                   <td className="px-4 py-2">
//                     {new Date(reg.event?.date).toLocaleDateString()}
//                   </td>
//                   <td className="px-4 py-2">{reg.event?.time}</td>
//                   <td className="px-4 py-2">{reg.event?.location}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p className="text-center text-gray-600 mt-8">You have not registered for any events yet.</p>
//       )}
//     </div>
//   );
// };

// export default MyEvents;




// import React, { useEffect, useState } from 'react';
// import { getUserRegistrations, cancelUserRegistration } from '../../services/registrationService';
// import useAuth from '../../hooks/useAuth';
// import { toast } from 'react-toastify';

// const MyEvents = () => {
//   const { user, token } = useAuth();
//   const [myEvents, setMyEvents] = useState([]);

//   const fetchRegistrations = async () => {
//     try {
//       const data = await getUserRegistrations(user._id);
//       setMyEvents(data);
//     } catch (err) {
//       console.error('Error loading my events', err);
//     }
//   };

//   useEffect(() => {
//     if (user?._id) fetchRegistrations();
//   }, [user]);

//   const handleCancel = async (registrationId) => {
//     if (!window.confirm('Are you sure you want to cancel this registration?')) return;

//     try {
//       await cancelUserRegistration(registrationId, token);
//       toast.success('❌ Registration cancelled!');
//       fetchRegistrations(); // Refresh the list
//     } catch (err) {
//       toast.error('Failed to cancel registration');
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">📋 My Registered Events</h1>

//       {myEvents.length > 0 ? (
//         <div className="overflow-x-auto rounded-lg shadow-lg">
//           <table className="min-w-full bg-white text-sm border border-gray-200">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="px-4 py-3 text-left">#</th>
//                 <th className="px-4 py-3 text-left">Event Name</th>
//                 <th className="px-4 py-3 text-left">Date</th>
//                 <th className="px-4 py-3 text-left">Time</th>
//                 <th className="px-4 py-3 text-left">Venue</th>
//                 <th className="px-4 py-3 text-left">Registered On</th>
//                 <th className="px-4 py-3 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {myEvents.map((reg, index) => (
//                 <tr
//                   key={reg._id}
//                   className="border-t border-gray-100 hover:bg-blue-50 transition"
//                 >
//                   <td className="px-4 py-2 font-medium">{index + 1}</td>
//                   <td className="px-4 py-2">{reg.event?.title}</td>
//                   <td className="px-4 py-2">{new Date(reg.event?.date).toLocaleDateString()}</td>
//                   <td className="px-4 py-2">{reg.event?.time}</td>
//                   <td className="px-4 py-2">{reg.event?.location}</td>
//                   <td className="px-4 py-2">{new Date(reg.createdAt).toLocaleDateString()}</td>
//                   <td className="px-4 py-2">
//                     <button
//                       onClick={() => handleCancel(reg._id)}
//                       className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded"
//                     >
//                       Cancel
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p className="text-center text-gray-600 mt-8">You have not registered for any events yet.</p>
//       )}
//     </div>
//   );
// };

// export default MyEvents;



// import React, { useEffect, useState } from 'react';
// import { getUserRegistrations, cancelRegistration } from '../../services/registrationService';
// import useAuth from '../../hooks/useAuth';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const MyEvents = () => {
//   const { user } = useAuth();
//   const [myEvents, setMyEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cancellingId, setCancellingId] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const data = await getUserRegistrations(user._id);
//         setMyEvents(data);
//       } catch (err) {
//         toast.error('Failed to load your events');
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (user?._id) fetchData();
//   }, [user]);

//   const handleCancel = async (registrationId) => {
//     if (!window.confirm('Are you sure you want to cancel registration?')) return;
//     try {
//       setCancellingId(registrationId);
//       await cancelRegistration(registrationId);
//       toast.success('Registration canceled successfully!');
//       setMyEvents((prev) => prev.filter((r) => r._id !== registrationId));
//     } catch (err) {
//       toast.error('Failed to cancel registration');
//     } finally {
//       setCancellingId(null);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">My Registered Events</h1>

//       {loading ? (
//         <div className="text-center text-lg">Loading...</div>
//       ) : myEvents.length === 0 ? (
//         <p>No registered events found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300 rounded-md">
//             <thead className="bg-gray-200 text-left">
//               <tr>
//                 <th className="p-3 border">#</th>
//                 <th className="p-3 border">Event Name</th>
//                 <th className="p-3 border">Date</th>
//                 <th className="p-3 border">Time</th>
//                 <th className="p-3 border">Venue</th>
//                 <th className="p-3 border">Registration Date</th>
//                 <th className="p-3 border">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {myEvents.map((reg, index) => {
//                 const eventDate = new Date(reg.event?.date);
//                 const isPast = eventDate < new Date();

//                 return (
//                   <tr key={reg._id} className="bg-white hover:bg-gray-50 transition">
//                     <td className="p-3 border">{index + 1}</td>
//                     <td className="p-3 border">{reg.event?.title}</td>
//                     <td className="p-3 border">{eventDate.toLocaleDateString()}</td>
//                     <td className="p-3 border">{eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
//                     <td className="p-3 border">{reg.event?.location}</td>
//                     <td className="p-3 border">{new Date(reg.createdAt).toLocaleDateString()}</td>
//                     <td className="p-3 border">
//                       <button
//                         disabled={isPast || cancellingId === reg._id}
//                         onClick={() => handleCancel(reg._id)}
//                         className={`px-3 py-1 rounded text-white text-sm ${
//                           isPast
//                             ? 'bg-gray-400 cursor-not-allowed'
//                             : 'bg-red-500 hover:bg-red-600'
//                         }`}
//                       >
//                         {cancellingId === reg._id ? 'Cancelling...' : 'Cancel'}
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyEvents;





























// import React, { useEffect, useState } from 'react';
// import { getUserRegistrations, cancelRegistration } from '../../services/registrationService';
// import useAuth from '../../hooks/useAuth';
// import { toast } from 'react-toastify';
// import { format, isPast } from 'date-fns';
// import 'react-toastify/dist/ReactToastify.css';

// const MyEvents = () => {
//   const { user } = useAuth();
//   const [myEvents, setMyEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cancellingId, setCancellingId] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const data = await getUserRegistrations(user._id);
//         setMyEvents(data);
//       } catch (err) {
//         toast.error('Failed to load your events');
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (user?._id) fetchData();
//   }, [user]);

//   const handleCancel = async (registrationId) => {
//     if (!window.confirm('Are you sure you want to cancel registration?')) return;
//     try {
//       setCancellingId(registrationId);
//       await cancelRegistration(registrationId);
//       toast.success('Registration canceled successfully!');
//       setMyEvents((prev) => prev.filter((r) => r._id !== registrationId));
//     } catch (err) {
//       toast.error('Failed to cancel registration');
//     } finally {
//       setCancellingId(null);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">My Registered Events</h1>

//       {loading ? (
//         <div className="text-center text-lg">Loading...</div>
//       ) : myEvents.length === 0 ? (
//         <p>No registered events found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300 rounded-md">
//             <thead className="bg-gray-200 text-left">
//               <tr>
//                 <th className="p-3 border">#</th>
//                 <th className="p-3 border">Event Name</th>
//                 <th className="p-3 border">Date</th>
//                 <th className="p-3 border">Time</th>
//                 <th className="p-3 border">Venue</th>
//                 <th className="p-3 border">Registration Date</th>
//                 <th className="p-3 border">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {myEvents.map((reg, index) => {
//                 if (!reg?.event) return null; // skip incomplete data

//                 const eventDate = new Date(reg.event.date);
//                 const registrationDate = new Date(reg.registeredAt || reg.createdAt);
//                 const isEventPast = isPast(eventDate);

//                 return (
//                   <tr key={reg._id || index} className="bg-white hover:bg-gray-50 transition">
//                     <td className="p-3 border">{index + 1}</td>
//                     <td className="p-3 border">{reg.event.title}</td>
//                     <td className="p-3 border">{format(eventDate, 'PPP')}</td>
//                     <td className="p-3 border">{format(eventDate, 'p')}</td>
//                     <td className="p-3 border">{reg.event.location || 'N/A'}</td>
//                     <td className="p-3 border">{format(registrationDate, 'PPP')}</td>
//                     <td className="p-3 border">
//                       <button
//                         disabled={isEventPast || cancellingId === reg._id}
//                         onClick={() => handleCancel(reg._id)}
//                         className={`px-3 py-1 rounded text-white text-sm ${
//                           isEventPast ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
//                         }`}
//                       >
//                         {cancellingId === reg._id ? 'Cancelling...' : 'Cancel'}
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyEvents;































// import React, { useEffect, useState } from 'react';
// import { getUserRegistrations, cancelRegistration } from '../../services/registrationService';
// import useAuth from '../../hooks/useAuth';
// import { toast } from 'react-toastify';
// import { format, isPast } from 'date-fns';
// import 'react-toastify/dist/ReactToastify.css';

// const MyEvents = () => {
//   const { user } = useAuth();
//   const [myEvents, setMyEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cancellingId, setCancellingId] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const data = await getUserRegistrations(user._id);

//         // Filter out any registration with missing event data
//         const validEvents = data?.filter((reg) => reg?.event) || [];

//         setMyEvents(validEvents);
//       } catch (err) {
//         toast.error('Failed to load your events');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (user?._id) fetchData();
//   }, [user]);

//   const handleCancel = async (registrationId) => {
//     if (!window.confirm('Are you sure you want to cancel registration?')) return;
//     try {
//       setCancellingId(registrationId);
//       await cancelRegistration(registrationId);
//       toast.success('Registration canceled successfully!');
//       setMyEvents((prev) => prev.filter((r) => r._id !== registrationId));
//     } catch (err) {
//       toast.error('Failed to cancel registration');
//     } finally {
//       setCancellingId(null);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">My Registered Events</h1>

//       {loading ? (
//         <div className="text-center text-lg">Loading...</div>
//       ) : myEvents.length === 0 ? (
//         <p>No registered events found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300 rounded-md">
//             <thead className="bg-gray-200 text-left">
//               <tr>
//                 <th className="p-3 border">#</th>
//                 <th className="p-3 border">Event Name</th>
//                 <th className="p-3 border">Date</th>
//                 <th className="p-3 border">Time</th>
//                 <th className="p-3 border">Venue</th>
//                 <th className="p-3 border">Registration Date</th>
//                 <th className="p-3 border">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {myEvents.map((reg, index) => {
//                 const event = reg.event;
//                 const eventDate = new Date(event.date);
//                 const registrationDate = new Date(reg.registeredAt || reg.createdAt);
//                 const isEventPast = isPast(eventDate);

//                 return (
//                   <tr key={reg._id} className="bg-white hover:bg-gray-50 transition">
//                     <td className="p-3 border">{index + 1}</td>
//                     <td className="p-3 border">{event.title}</td>
//                     <td className="p-3 border">{format(eventDate, 'PPP')}</td>
//                     <td className="p-3 border">{format(eventDate, 'p')}</td>
//                     <td className="p-3 border">{event.location || 'N/A'}</td>
//                     <td className="p-3 border">{format(registrationDate, 'PPP')}</td>
//                     <td className="p-3 border">
//                       <button
//                         disabled={isEventPast || cancellingId === reg._id}
//                         onClick={() => handleCancel(reg._id)}
//                         className={`px-3 py-1 rounded text-white text-sm ${
//                           isEventPast ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
//                         }`}
//                       >
//                         {cancellingId === reg._id ? 'Cancelling...' : 'Cancel'}
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyEvents;








































// // ✅ MyEvents.jsx
// import React, { useEffect, useState } from 'react';
// import { getMyRegistrations, cancelRegistration } from '../../services/registrationService';
// import useAuth from '../../hooks/useAuth';
// import { toast } from 'react-toastify';
// import { format, isPast } from 'date-fns';
// import 'react-toastify/dist/ReactToastify.css';

// const MyEvents = () => {
//   const { user, token } = useAuth();
//   const [myEvents, setMyEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cancellingId, setCancellingId] = useState(null);

//   useEffect(() => {
//     const fetchMyRegistrations = async () => {
//       try {
//         setLoading(true);
//         const data = await getMyRegistrations(token);

//         const validRegistrations = data.filter((reg) => reg?.event);
//         setMyEvents(validRegistrations);
//       } catch (err) {
//         toast.error('Failed to load registered events');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (token) fetchMyRegistrations();
//   }, [token]);

//   const handleCancel = async (registrationId) => {
//     if (!window.confirm('Are you sure you want to cancel this registration?')) return;
//     try {
//       setCancellingId(registrationId);
//       await cancelRegistration(registrationId, token);
//       toast.success('Registration cancelled');
//       setMyEvents((prev) => prev.filter((r) => r._id !== registrationId));
//     } catch (err) {
//       toast.error('Failed to cancel registration');
//     } finally {
//       setCancellingId(null);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">My Registered Events</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : myEvents.length === 0 ? (
//         <p>No registered events found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="p-3 border">#</th>
//                 <th className="p-3 border">Event</th>
//                 <th className="p-3 border">Date</th>
//                 <th className="p-3 border">Time</th>
//                 <th className="p-3 border">Location</th>
//                 <th className="p-3 border">Registered On</th>
//                 <th className="p-3 border">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {myEvents.map((reg, index) => {
//                 const { event } = reg;
//                 const eventDate = new Date(event.date);
//                 const regDate = new Date(reg.createdAt);

//                 return (
//                   <tr key={reg._id} className="bg-white hover:bg-gray-50">
//                     <td className="p-3 border">{index + 1}</td>
//                     <td className="p-3 border">{event.title}</td>
//                     <td className="p-3 border">{format(eventDate, 'PPP')}</td>
//                     <td className="p-3 border">{format(eventDate, 'p')}</td>
//                     <td className="p-3 border">{event.location || 'N/A'}</td>
//                     <td className="p-3 border">{format(regDate, 'PPP')}</td>
//                     <td className="p-3 border">
//                       <button
//                         onClick={() => handleCancel(reg._id)}
//                         disabled={isPast(eventDate) || cancellingId === reg._id}
//                         className={`px-3 py-1 rounded text-white text-sm ${
//                           isPast(eventDate)
//                             ? 'bg-gray-400 cursor-not-allowed'
//                             : 'bg-red-500 hover:bg-red-600'
//                         }`}
//                       >
//                         {cancellingId === reg._id ? 'Cancelling...' : 'Cancel'}
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyEvents;

















// import React, { useEffect, useState } from 'react';
// import { getUserRegistrations, cancelRegistration } from '../../services/registrationService';
// import useAuth from '../../hooks/useAuth';
// import { toast } from 'react-toastify';
// import { format, isPast, parseISO } from 'date-fns';
// import 'react-toastify/dist/ReactToastify.css';

// const MyEvents = () => {
//   const { user } = useAuth();
//   const [myEvents, setMyEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cancellingId, setCancellingId] = useState(null);

//   // Fetch registered events
//   useEffect(() => {
//     const fetchRegistrations = async () => {
//       try {
//         setLoading(true);
//         const data = await getUserRegistrations(user._id);

//         const valid = data.filter(reg => reg.event); // Ensure event is populated
//         setMyEvents(valid);
//       } catch (err) {
//         toast.error('Failed to fetch your registered events');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (user?._id) fetchRegistrations();
//   }, [user]);

//   const handleCancel = async (registrationId) => {
//     if (!window.confirm('Are you sure you want to cancel this registration?')) return;

//     try {
//       setCancellingId(registrationId);
//       await cancelRegistration(registrationId);
//       toast.success('Successfully cancelled registration');
//       setMyEvents((prev) => prev.filter((reg) => reg._id !== registrationId));
//     } catch (err) {
//       toast.error('Failed to cancel registration');
//     } finally {
//       setCancellingId(null);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">My Registered Events</h2>

//       {loading ? (
//         <div className="text-center text-lg">Loading...</div>
//       ) : myEvents.length === 0 ? (
//         <p>No events found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300 rounded">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="p-3 border">#</th>
//                 <th className="p-3 border">Event Title</th>
//                 <th className="p-3 border">Date</th>
//                 <th className="p-3 border">Time</th>
//                 <th className="p-3 border">Location</th>
//                 <th className="p-3 border">Registered At</th>
//                 <th className="p-3 border">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {myEvents.map((reg, index) => {
//                 const event = reg.event;
//                 const eventDate = parseISO(event.date);
//                 const isEventOver = isPast(eventDate);
//                 const registeredAt = parseISO(reg.registeredAt || reg.createdAt);

//                 return (
//                   <tr key={reg._id} className="bg-white hover:bg-gray-50 transition">
//                     <td className="p-3 border">{index + 1}</td>
//                     <td className="p-3 border">{event.title}</td>
//                     <td className="p-3 border">{format(eventDate, 'PPP')}</td>
//                     <td className="p-3 border">{format(eventDate, 'p')}</td>
//                     <td className="p-3 border">{event.location || 'N/A'}</td>
//                     <td className="p-3 border">{format(registeredAt, 'PPP')}</td>
//                     <td className="p-3 border">
//                       <button
//                         disabled={isEventOver || cancellingId === reg._id}
//                         onClick={() => handleCancel(reg._id)}
//                         className={`px-3 py-1 rounded text-white text-sm ${
//                           isEventOver ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
//                         }`}
//                       >
//                         {cancellingId === reg._id ? 'Cancelling...' : 'Cancel'}
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyEvents;






















// // import React, { useEffect, useState, useContext } from 'react';
// // import { getMyRegistrations, cancelRegistration } from '../../services/registrationService';
// // import { AuthContext } from '../../context/AuthContext';
// // import { toast } from 'react-toastify';
// // import { format, isPast } from 'date-fns';
// // import 'react-toastify/dist/ReactToastify.css';

// // const MyEvents = () => {
// //   const { token } = useContext(AuthContext);
// //   const [myEvents, setMyEvents] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [cancellingId, setCancellingId] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         setLoading(true);
// //         const data = await getMyRegistrations(token);
// //         setMyEvents(data);
// //       } catch (err) {
// //         toast.error('Failed to load your events');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchData();
// //   }, [token]);

// //   const handleCancel = async (registrationId) => {
// //     if (!window.confirm('Are you sure you want to cancel registration?')) return;
// //     try {
// //       setCancellingId(registrationId);
// //       await cancelRegistration(registrationId, token);
// //       toast.success('Registration canceled successfully!');
// //       setMyEvents((prev) => prev.filter((r) => r._id !== registrationId));
// //     } catch (err) {
// //       toast.error('Failed to cancel registration');
// //     } finally {
// //       setCancellingId(null);
// //     }
// //   };

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-6">My Registered Events</h1>

// //       {loading ? (
// //         <div className="text-center text-lg">Loading...</div>
// //       ) : myEvents.length === 0 ? (
// //         <p>No registered events found.</p>
// //       ) : (
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full border border-gray-300 rounded-md">
// //             <thead className="bg-gray-200 text-left">
// //               <tr>
// //                 <th className="p-3 border">#</th>
// //                 <th className="p-3 border">Event Name</th>
// //                 <th className="p-3 border">Date</th>
// //                 <th className="p-3 border">Time</th>
// //                 <th className="p-3 border">Venue</th>
// //                 <th className="p-3 border">Registration Date</th>
// //                 <th className="p-3 border">Action</th>
// //               </tr>
// //             </thead>
// //             {/* <tbody>
// //               {myEvents.map((reg, index) => {
// //                 const eventDate = new Date(reg.event?.date);
// //                 const registrationDate = new Date(reg.registeredAt);
// //                 const isEventPast = isPast(eventDate);

// //                 return (
// //                   <tr key={reg._id} className="bg-white hover:bg-gray-50 transition">
// //                     <td className="p-3 border">{index + 1}</td>
// //                     <td className="p-3 border">{reg.event?.title || 'Untitled Event'}</td>
// //                     <td className="p-3 border">{format(eventDate, 'PPP')}</td>
// //                     <td className="p-3 border">{format(eventDate, 'p')}</td>
// //                     <td className="p-3 border">{reg.event?.location || 'N/A'}</td>
// //                     <td className="p-3 border">{format(registrationDate, 'PPP')}</td>
// //                     <td className="p-3 border">
// //                       <button
// //                         disabled={isEventPast || cancellingId === reg._id}
// //                         onClick={() => handleCancel(reg._id)}
// //                         className={`px-3 py-1 rounded text-white text-sm ${
// //                           isEventPast
// //                             ? 'bg-gray-400 cursor-not-allowed'
// //                             : 'bg-red-500 hover:bg-red-600'
// //                         }`}
// //                       >
// //                         {cancellingId === reg._id ? 'Cancelling...' : 'Cancel'}
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 );
// //               })}
// //             </tbody> */}
// //             <tbody>
// //               {myEvents.map((reg, index) => {
// //                 if (!reg?.event) return null; // skip if event data missing

// //                 const eventDate = new Date(reg.event.date);
// //                 const registrationDate = new Date(reg.registeredAt);
// //                 const isEventPast = isPast(eventDate);

// //                 return (
// //                   <tr key={reg._id || index} className="bg-white hover:bg-gray-50 transition">
// //                     <td className="p-3 border">{index + 1}</td>
// //                     <td className="p-3 border">{reg.event.title}</td>
// //                     <td className="p-3 border">{format(eventDate, 'PPP')}</td>
// //                     <td className="p-3 border">{format(eventDate, 'p')}</td>
// //                     <td className="p-3 border">{reg.event.location || 'N/A'}</td>
// //                     <td className="p-3 border">{format(registrationDate, 'PPP')}</td>
// //                     <td className="p-3 border">
// //                       <button
// //                         disabled={isEventPast || cancellingId === reg._id}
// //                         onClick={() => handleCancel(reg._id)}
// //                         className={`px-3 py-1 rounded text-white text-sm ${isEventPast ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
// //                           }`}
// //                       >
// //                         {cancellingId === reg._id ? 'Cancelling...' : 'Cancel'}
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 );
// //               })}
// //             </tbody>

// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MyEvents;
