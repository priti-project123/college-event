// // src/components/Report.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// export default function Reports() {
//   const [data, setData] = useState([]);

//   // Fetch report data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get('/api/report'); // adjust endpoint
//         setData(res.data);
//       } catch (err) {
//         console.error('Error fetching report data:', err);
//       }
//     };
//     fetchData();
//   }, []);

//   // Download as PDF
//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text('Report Summary', 14, 10);
//     const tableColumn = ["Name", "Email", "Role", "Registered On"];
//     const tableRows = [];

//     data.forEach(user => {
//       const row = [
//         user.name,
//         user.email,
//         user.role,
//         new Date(user.createdAt).toLocaleDateString()
//       ];
//       tableRows.push(row);
//     });

//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 20,
//     });
//     doc.save('report.pdf');
//   };

//   // Download as CSV
//   const downloadCSV = () => {
//     const headers = ["Name,Email,Role,Registered On"];
//     const rows = data.map(user =>
//       `${user.name},${user.email},${user.role},${new Date(user.createdAt).toLocaleDateString()}`
//     );
//     const csv = [headers, ...rows].join('\n');

//     const blob = new Blob([csv], { type: 'text/csv' });
//     const href = URL.createObjectURL(blob);

//     const a = document.createElement('a');
//     a.href = href;
//     a.download = 'report.csv';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4">User Report</h2>
//       <div className="flex gap-3 mb-4">
//         <button onClick={downloadPDF} className="bg-blue-600 text-white px-4 py-2 rounded">Download PDF</button>
//         <button onClick={downloadCSV} className="bg-green-600 text-white px-4 py-2 rounded">Download CSV</button>
//       </div>

//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border border-gray-300 px-3 py-2">Name</th>
//             <th className="border border-gray-300 px-3 py-2">Email</th>
//             <th className="border border-gray-300 px-3 py-2">Role</th>
//             <th className="border border-gray-300 px-3 py-2">Registered On</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((user, idx) => (
//             <tr key={idx}>
//               <td className="border px-3 py-2">{user.name}</td>
//               <td className="border px-3 py-2">{user.email}</td>
//               <td className="border px-3 py-2">{user.role}</td>
//               <td className="border px-3 py-2">{new Date(user.createdAt).toLocaleDateString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }




import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Reports() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Replace with your backend endpoint
    axios.get('http://localhost:5000/api/events/completed')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">📋 Completed Event List</h2>
      <table className="w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Event Name</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Participants</th>
            <th className="border px-4 py-2">Download</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{event.name}</td>
              <td className="border px-4 py-2">{event.date}</td>
              <td className="border px-4 py-2">{event.participants.length}</td>
              <td className="border px-4 py-2">
                <a href={`/api/reports/event/${event._id}`} className="text-blue-600 underline">Download</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-10">👥 Participants per Event</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event, idx) => (
          <div key={idx} className="border p-4 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">{event.name}</h3>
            <ul className="list-disc list-inside space-y-1 mb-2">
              {event.participants.map((p, i) => (
                <li key={i}>{p.name}</li>
              ))}
            </ul>
            <a
              href={`http://localhost:5000/api/reports/event/${event._id}/participants`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
