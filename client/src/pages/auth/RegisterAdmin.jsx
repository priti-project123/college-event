// import React, { useState } from 'react';
// import axios from 'axios';

// const RegisterAdmin = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/register-admin', form);
//       setMessage(res.data.message);
//     } catch (err) {
//       console.log("registration admin",err)
//       setMessage(err.response?.data?.message || 'Error occurred');
//     }
//   };

//   return (
//     <div className="admin-register-form">
//       <h2>Register Admin</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
//         <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
//         <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
//         <button type="submit">Register Admin</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default RegisterAdmin;




// import React, { useState } from 'react';
// import axios from 'axios';

// const RegisterAdmin = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');
//     try {
//       const res = await axios.post('http://localhost:5000/api/register-admin', form);
//       setMessage(res.data.message || 'Admin registered successfully');
//       setForm({ name: '', email: '', password: '' }); // Clear form
//     } catch (err) {
//       console.log('Registration admin error:', err);
//       setMessage(err.response?.data?.message || '❌ Error occurred while registering admin');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="admin-register-form" style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
//       <h2>Register Admin</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '10px' }}>
//           <label>Name:</label><br />
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Enter name"
//             required
//             style={{ width: '100%', padding: '8px' }}
//           />
//         </div>

//         <div style={{ marginBottom: '10px' }}>
//           <label>Email:</label><br />
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Enter email"
//             required
//             style={{ width: '100%', padding: '8px' }}
//           />
//         </div>

//         <div style={{ marginBottom: '10px' }}>
//           <label>Password:</label><br />
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="Enter password"
//             required
//             style={{ width: '100%', padding: '8px' }}
//           />
//         </div>

//         <button type="submit" disabled={loading} style={{ padding: '10px 20px' }}>
//           {loading ? 'Registering...' : 'Register Admin'}
//         </button>
//       </form>

//       {message && (
//         <p style={{ marginTop: '15px', color: message.includes('success') ? 'green' : 'red' }}>
//           {message}
//         </p>
//       )}
//     </div>
//   );
// };

// export default RegisterAdmin;







// import React, { useState } from 'react';
// import axios from 'axios';

// const RegisterAdmin = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');
//     try {
//       const res = await axios.post('http://localhost:5000/api/register-admin', form);
//       setMessage(res.data.message || 'Admin registered successfully');
//       setForm({ name: '', email: '', password: '' });
//     } catch (err) {
//       console.log('Registration admin error:', err);
//       setMessage(err.response?.data?.message || '❌ Error occurred while registering admin');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register Admin</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Enter name"
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Enter email"
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="Enter password"
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
//           >
//             {loading ? 'Registering...' : 'Register Admin'}
//           </button>
//         </form>

//         {message && (
//           <p
//             className={`text-sm mt-4 text-center ${
//               message.includes('success') ? 'text-green-600' : 'text-red-500'
//             }`}
//           >
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RegisterAdmin;




// import React, { useState } from 'react';
// import axios from 'axios';

// const RegisterAdmin = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setLoading(true);

//     try {
//       const res = await axios.post('http://localhost:5000/api/register-admin', form);
//       setMessage(res.data.message || '✅ Admin registered successfully');
//       setForm({ name: '', email: '', password: '' });
//     } catch (err) {
//       setMessage(err.response?.data?.message || '❌ Registration failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Register Admin</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
//         >
//           {loading ? 'Registering...' : 'Register Admin'}
//         </button>

//         {message && (
//           <p className={`mt-4 text-sm text-center ${message.includes('success') ? 'text-green-600' : 'text-red-500'}`}>
//             {message}
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default RegisterAdmin;





import React, { useState } from 'react';
import axios from 'axios';

const RegisterAdmin = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/register-admin', form);
      setMessage(res.data.message || '✅ Registered successfully');
      setForm({ name: '', email: '', password: '' });
    } catch (err) {
      setMessage(err.response?.data?.message || '❌ Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Register Admin</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          {loading ? 'Registering...' : 'Register Admin'}
        </button>

        {message && (
          <p className={`mt-4 text-sm text-center ${message.includes('✅') ? 'text-green-600' : 'text-red-500'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default RegisterAdmin;
