// // Dashboard.jsx
// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { chartData, chartOptions } from '../../compnents/charts/UserEventStat';

// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register chart components
// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const Dashboard = ({ stats, recentEvents }) => {
//   return (
//     <div className="p-6">
//       {/* Top Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//         <StatCard title="Total Events" count={stats.total} />
//         <StatCard title="Registered Events" count={stats.registered} />
//         <StatCard title="Upcoming Events" count={stats.upcoming} />
//         <StatCard title="Outdated Events" count={stats.outdated} />
//       </div>

//       {/* Recent Events & Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Recent Events Section */}
//         <div className="bg-white rounded-xl p-4 shadow-md">
//           <h2 className="text-xl font-bold mb-4">Recent Events</h2>
//           <ul>
//             {recentEvents && recentEvents.length > 0 ? (
//               recentEvents.map((event) => (
//                 <li key={event.id} className="mb-2 border-b pb-2">
//                   <p className="font-semibold">{event.name}</p>
//                   <p className="text-sm text-gray-500">
//                     {event.date} · {event.category}
//                   </p>
//                 </li>
//               ))
//             ) : (
//               <p className="text-gray-500">No recent events.</p>
//             )}
//           </ul>
//         </div>

//         {/* Event Registration Stats Chart */}
//         <div className="bg-white rounded-xl p-4 shadow-md">
//           <h2 className="text-xl font-bold mb-4">Event Registration Stats</h2>
//           <Bar data={chartData} options={chartOptions} />
//         </div>
//       </div>
//     </div>
//   );
// };

// // Stat Card Component
// const StatCard = ({ title, count }) => (
//   <div className="bg-white p-6 rounded-xl shadow-md text-center">
//     <h3 className="text-gray-600 text-sm mb-2">{title}</h3>
//     <p className="text-3xl font-bold text-indigo-600">{count}</p>
//   </div>
// );

// export default Dashboard;










// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const StatCard = ({ title, count }) => (
//   <div className="bg-white rounded-xl p-6 shadow-md">
//     <p className="text-sm text-gray-500">{title}</p>
//     <h2 className="text-2xl font-bold">{count}</h2>
//   </div>
// );

// const Dashboard = () => {
//   const [stats, setStats] = useState(null);
//   const [recentEvents, setRecentEvents] = useState([]);
//   const [chartData, setChartData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         // Replace these with your actual API endpoints
//         const statsRes = await fetch("http://localhost:5000/api/stats");
//         const eventsRes = await fetch("http://localhost:5000/api/recent-events");
//         const chartRes = await fetch("http://localhost:5000/api/chart-data");

//         const statsData = await statsRes.json();
//         const eventsData = await eventsRes.json();
//         const chart = await chartRes.json();

//         setStats(statsData);
//         setRecentEvents(eventsData);
//         setChartData(chart);
//         setLoading(false);
//       } catch (error) {
//         console.error("Failed to load dashboard data", error);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   if (loading || !stats || !chartData) {
//     return <div className="p-6 text-lg">Loading Dashboard...</div>;
//   }

//   return (
//     <div className="p-6">
//       {/* Stat Summary */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         <StatCard title="Total Events" count={stats.total} />
//         <StatCard title="Registered Events" count={stats.registered} />
//         <StatCard title="Upcoming Events" count={stats.upcoming} />
//         <StatCard title="Outdated Events" count={stats.outdated} />
//       </div>

//       {/* Recent + Chart */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Recent Events */}
//         <div className="bg-white rounded-xl p-4 shadow-md">
//           <h2 className="text-xl font-bold mb-4">Recent Events</h2>
//           <ul>
//             {recentEvents.map((event) => (
//               <li key={event.id} className="mb-2 border-b pb-2">
//                 <p className="font-semibold">{event.name}</p>
//                 <p className="text-sm text-gray-500">
//                   {event.date} · {event.category}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Chart */}
//         <div className="bg-white rounded-xl p-4 shadow-md">
//           <h2 className="text-xl font-bold mb-4">Registered Event Stats</h2>
//           <Bar data={chartData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





// import React, { useEffect, useState } from "react";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const Dashboard = () => {
//   const [stats, setStats] = useState(null);
//   const [recentEvents, setRecentEvents] = useState([]);
//   const [chartData, setChartData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Automatically redirect to dashboard if /home
//     navigate("/user/home/dashboard");
//   }, []);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const [statsRes, recentRes, chartRes] = await Promise.all([
//           fetch("http://localhost:5000/api/stats"),
//           fetch("http://localhost:5000/api/recent-events"),
//           fetch("http://localhost:5000/api/chart-data"),
//         ]);

//         // If any route returns 404, this will prevent parse errors
//         if (!statsRes.ok || !recentRes.ok || !chartRes.ok) {
//           console.error("API routes missing or failed.");
//           return;
//         }

//         const statsData = await statsRes.json();
//         const recentData = await recentRes.json();
//         const chartJson = await chartRes.json();

//         setStats(statsData);
//         setRecentEvents(recentData);
//         setChartData(chartJson);
//       } catch (err) {
//         console.error("Failed to load dashboard data", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
//       <div className="w-64 bg-gradient-to-b from-indigo-600 to-blue-500 text-white p-4">
//         <h1 className="text-3xl font-bold mb-6">College<span className="text-gray-300">Fest</span></h1>

//         <nav className="space-y-2">
//           <NavLink to="/user/home/notifications" className={({ isActive }) =>
//             isActive ? "bg-indigo-700 p-2 rounded flex gap-2 items-center" : "p-2 hover:bg-indigo-600 rounded flex gap-2 items-center"}>
//             🔔 Notifications
//           </NavLink>
//           <NavLink to="/user/home/dashboard" className={({ isActive }) =>
//             isActive ? "bg-indigo-700 p-2 rounded flex gap-2 items-center" : "p-2 hover:bg-indigo-600 rounded flex gap-2 items-center"}>
//             📊 Dashboard
//           </NavLink>
//           <NavLink to="/user/home" className={({ isActive }) =>
//             isActive ? "bg-indigo-700 p-2 rounded flex gap-2 items-center" : "p-2 hover:bg-indigo-600 rounded flex gap-2 items-center"}>
//             📅 Upcoming Events
//           </NavLink>
//           <NavLink to="/user/home/my-events" className={({ isActive }) =>
//             isActive ? "bg-indigo-700 p-2 rounded flex gap-2 items-center" : "p-2 hover:bg-indigo-600 rounded flex gap-2 items-center"}>
//             📁 My Events
//           </NavLink>
//           <NavLink to="/user/home/profile" className={({ isActive }) =>
//             isActive ? "bg-indigo-700 p-2 rounded flex gap-2 items-center" : "p-2 hover:bg-indigo-600 rounded flex gap-2 items-center"}>
//             👤 Profile
//           </NavLink>
//           <button className="w-full text-left p-2 hover:bg-red-600 rounded flex gap-2 items-center mt-10">
//             🚪 Logout
//           </button>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-auto">
//         {loading ? (
//           <p className="text-xl font-semibold text-gray-600">Loading Dashboard...</p>
//         ) : (
//           <>
//             <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

//             {stats && (
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                 <div className="bg-white shadow p-4 rounded">
//                   <h3 className="text-lg font-semibold text-gray-700">Total Events</h3>
//                   <p className="text-2xl font-bold">{stats.total}</p>
//                 </div>
//                 <div className="bg-white shadow p-4 rounded">
//                   <h3 className="text-lg font-semibold text-gray-700">Registered</h3>
//                   <p className="text-2xl font-bold">{stats.registered}</p>
//                 </div>
//                 <div className="bg-white shadow p-4 rounded">
//                   <h3 className="text-lg font-semibold text-gray-700">Upcoming</h3>
//                   <p className="text-2xl font-bold">{stats.upcoming}</p>
//                 </div>
//                 <div className="bg-white shadow p-4 rounded">
//                   <h3 className="text-lg font-semibold text-gray-700">Outdated</h3>
//                   <p className="text-2xl font-bold">{stats.outdated}</p>
//                 </div>
//               </div>
//             )}

//             {chartData && (
//               <div className="bg-white shadow p-4 rounded mb-6">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Registration Chart</h3>
//                 <Bar data={chartData} />
//               </div>
//             )}

//             {recentEvents.length > 0 && (
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Events</h3>
//                 <ul className="space-y-2">
//                   {recentEvents.map((event) => (
//                     <li key={event.id} className="border-b pb-2">
//                       <div className="font-semibold">{event.name}</div>
//                       <div className="text-sm text-gray-600">{event.date} • {event.category}</div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const Dashboard = () => {
//   const [stats, setStats] = useState(null);
//   const [recentEvents, setRecentEvents] = useState([]);
//   const [chartData, setChartData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const [statsRes, recentRes, chartRes] = await Promise.all([
//           fetch("http://localhost:5000/api/stats"),
//           fetch("http://localhost:5000/api/recent-events"),
//           fetch("http://localhost:5000/api/chart-data"),
//         ]);

//         if (!statsRes.ok || !recentRes.ok || !chartRes.ok) {
//           console.error("API routes missing or failed.");
//           return;
//         }

//         const statsData = await statsRes.json();
//         const recentData = await recentRes.json();
//         const chartJson = await chartRes.json();

//         setStats(statsData);
//         setRecentEvents(recentData);
//         setChartData(chartJson);
//       } catch (err) {
//         console.error("Failed to load dashboard data", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   return (
//     <div className="p-6 overflow-auto">
//       {loading ? (
//         <p className="text-xl font-semibold text-gray-600">Loading Dashboard...</p>
//       ) : (
//         <>
//           <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

//           {stats && (
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="text-lg font-semibold text-gray-700">Total Events</h3>
//                 <p className="text-2xl font-bold">{stats.total}</p>
//               </div>
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="text-lg font-semibold text-gray-700">Registered</h3>
//                 <p className="text-2xl font-bold">{stats.registered}</p>
//               </div>
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="text-lg font-semibold text-gray-700">Upcoming</h3>
//                 <p className="text-2xl font-bold">{stats.upcoming}</p>
//               </div>
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="text-lg font-semibold text-gray-700">Outdated</h3>
//                 <p className="text-2xl font-bold">{stats.outdated}</p>
//               </div>
//             </div>
//           )}

//           {chartData && (
//             <div className="bg-white shadow p-4 rounded mb-6">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Registration Chart</h3>
//               <Bar data={chartData} />
//             </div>
//           )}

//           {recentEvents.length > 0 && (
//             <div className="bg-white shadow p-4 rounded">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Events</h3>
//               <ul className="space-y-2">
//                 {recentEvents.map((event) => (
//                   <li key={event.id} className="border-b pb-2">
//                     <div className="font-semibold">{event.name}</div>
//                     <div className="text-sm text-gray-600">{event.date} • {event.category}</div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const Dashboard = () => {
//   const [stats, setStats] = useState(null);
//   const [recentEvents, setRecentEvents] = useState([]);
//   const [chartData, setChartData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const [statsRes, recentRes, chartRes] = await Promise.all([
//           fetch("http://localhost:5000/api/stats"),
//           fetch("http://localhost:5000/api/recent-events"),
//           fetch("http://localhost:5000/api/chart-data"),
//         ]);

//         if (!statsRes.ok || !recentRes.ok || !chartRes.ok) {
//           console.error("API routes missing or failed.");
//           return;
//         }

//         const statsData = await statsRes.json();
//         const recentData = await recentRes.json();
//         const chartJson = await chartRes.json();

//         setStats(statsData);
//         setRecentEvents(recentData);
//         setChartData(chartJson);
//       } catch (err) {
//         console.error("Failed to load dashboard data", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   return (
//     <div className="p-6 overflow-auto">
//       {loading ? (
//         <p className="text-xl font-semibold text-gray-600">Loading Dashboard...</p>
//       ) : (
//         <>
//           <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

//           {/* Stats and Recent Events in One Row */}
//           {(stats || recentEvents.length > 0) && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               {/* Statistics Cards */}
//               {stats && (
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="bg-white shadow p-4 rounded">
//                     <h3 className="text-lg font-semibold text-gray-700">Total Events</h3>
//                     <p className="text-2xl font-bold">{stats.total}</p>
//                   </div>
//                   <div className="bg-white shadow p-4 rounded">
//                     <h3 className="text-lg font-semibold text-gray-700">Registered</h3>
//                     <p className="text-2xl font-bold">{stats.registered}</p>
//                   </div>
//                   <div className="bg-white shadow p-4 rounded">
//                     <h3 className="text-lg font-semibold text-gray-700">Upcoming</h3>
//                     <p className="text-2xl font-bold">{stats.upcoming}</p>
//                   </div>
//                   <div className="bg-white shadow p-4 rounded">
//                     <h3 className="text-lg font-semibold text-gray-700">Outdated</h3>
//                     <p className="text-2xl font-bold">{stats.outdated}</p>
//                   </div>
//                 </div>
//               )}

//               {/* Recent Events */}
//               {recentEvents.length > 0 && (
//                 <div className="bg-white shadow p-4 rounded h-fit">
//                   <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Events</h3>
//                   <ul className="space-y-2">
//                     {recentEvents.map((event) => (
//                       <li key={event.id} className="border-b pb-2">
//                         <div className="font-semibold">{event.name}</div>
//                         <div className="text-sm text-gray-600">
//                           {event.date} • {event.category}
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Chart Section */}
//           {chartData && (
//             <div className="bg-white shadow p-4 rounded mb-6">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Registration Chart</h3>
//               <Bar data={chartData} />
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;




// =============================================================
// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const Dashboard = () => {
//   const [stats, setStats] = useState(null);
//   const [recentEvents, setRecentEvents] = useState([]);
//   const [chartData, setChartData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const [statsRes, recentRes, chartRes] = await Promise.all([
//           fetch("http://localhost:5000/api/stats"),
//           fetch("http://localhost:5000/api/recent-events"),
//           fetch("http://localhost:5000/api/chart-data"),
//         ]);

//         if (!statsRes.ok || !recentRes.ok || !chartRes.ok) {
//           console.error("API routes missing or failed.");
//           return;
//         }

//         const statsData = await statsRes.json();
//         const recentData = await recentRes.json();
//         const chartJson = await chartRes.json();

//         setStats(statsData);
//         setRecentEvents(recentData);
//         setChartData(chartJson);
//       } catch (err) {
//         console.error("Failed to load dashboard data", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   return (
//     <div className="p-6 overflow-auto">
//       {loading ? (
//         <p className="text-xl font-semibold text-gray-600">Loading Dashboard...</p>
//       ) : (
//         <>
//           <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

//           {/* 4 Statistic Cards in a Row */}
//           {stats && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="text-lg font-semibold text-gray-700">Total Events</h3>
//                 <p className="text-2xl font-bold">{stats.total}</p>
//               </div>
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="text-lg font-semibold text-gray-700">Registered</h3>
//                 <p className="text-2xl font-bold">{stats.registered}</p>
//               </div>
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="text-lg font-semibold text-gray-700">Upcoming</h3>
//                 <p className="text-2xl font-bold">{stats.upcoming}</p>
//               </div>
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="text-lg font-semibold text-gray-700">Outdated</h3>
//                 <p className="text-2xl font-bold">{stats.outdated}</p>
//               </div>
//             </div>
//           )}

//           {/* Chart and Recent Events Side-by-Side */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Chart: spans 2 columns */}
//             {chartData && (
//               <div className="bg-white shadow p-4 rounded lg:col-span-2">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Registration Chart</h3>
//                 <Bar data={chartData} />
//               </div>
//             )}

//             {/* Recent Events: single column */}
//             {recentEvents.length > 0 && (
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Events</h3>
//                 <ul className="space-y-2">
//                   {recentEvents.map((event) => (
//                     <li key={event.id} className="border-b pb-2">
//                       <div className="font-semibold">{event.name}</div>
//                       <div className="text-sm text-gray-600">
//                         {event.date} • {event.category}
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
// ====================================================


import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { getMyRegistrations } from "../../services/registrationService"; // adjust path if needed

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [recentEvents, setRecentEvents] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [myRegistrationsCount, setMyRegistrationsCount] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Get general stats, recent events, and chart data
        const [statsRes, recentRes, chartRes] = await Promise.all([
          fetch("http://localhost:5000/api/stats"),
          fetch("http://localhost:5000/api/recent-events"),
          fetch("http://localhost:5000/api/chart-data"),
        ]);

        if (!statsRes.ok || !recentRes.ok || !chartRes.ok) {
          console.error("API routes missing or failed.");
          return;
        }

        const statsData = await statsRes.json();
        const recentData = await recentRes.json();
        const chartJson = await chartRes.json();

        setStats(statsData);
        setRecentEvents(recentData);
        setChartData(chartJson);

        // Get logged-in user's registrations count
        const myRegs = await getMyRegistrations();
        setMyRegistrationsCount(myRegs.registrations.length);

      } catch (err) {
        console.error("Failed to load dashboard data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="p-6 overflow-auto">
      {loading ? (
        <p className="text-xl font-semibold text-gray-600">
          Loading Dashboard...
        </p>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

          {/* 4 Statistic Cards in a Row */}
          {stats && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-white shadow p-4 rounded">
                <h3 className="text-lg font-semibold text-gray-700">Total Events</h3>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
              <div className="bg-white shadow p-4 rounded">
                <h3 className="text-lg font-semibold text-gray-700">Registered</h3>
                <p className="text-2xl font-bold">{myRegistrationsCount}</p>
              </div>
              <div className="bg-white shadow p-4 rounded">
                <h3 className="text-lg font-semibold text-gray-700">Upcoming</h3>
                <p className="text-2xl font-bold">{stats.upcoming}</p>
              </div>
              <div className="bg-white shadow p-4 rounded">
                <h3 className="text-lg font-semibold text-gray-700">Outdated</h3>
                <p className="text-2xl font-bold">{stats.outdated}</p>
              </div>
            </div>
          )}

          {/* Chart and Recent Events Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart: spans 2 columns */}
            {chartData && (
              <div className="bg-white shadow p-4 rounded lg:col-span-2">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Registration Chart</h3>
                <Bar data={chartData} />
              </div>
            )}

            {/* Recent Events: single column */}
            {recentEvents.length > 0 && (
              <div className="bg-white shadow p-4 rounded">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Events</h3>
                <ul className="space-y-2">
                  {recentEvents.map((event) => (
                    <li key={event.id} className="border-b pb-2">
                      <div className="font-semibold">{event.name}</div>
                      <div className="text-sm text-gray-600">
                        {event.date} • {event.category}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
