// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'student', // default role
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       await axios.post('/api/auth/register', form);
//       navigate('/login'); // redirect to login after successful register
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Full Name"
//           className="w-full mb-3 px-4 py-2 border rounded"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="w-full mb-3 px-4 py-2 border rounded"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className="w-full mb-4 px-4 py-2 border rounded"
//           required
//         />
//         <select
//           name="role"
//           value={form.role}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 border rounded"
//         >
//           <option value="student">Student</option>
//           <option value="organizer">Organizer</option>
//         </select>
//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student', // default role
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const apiUrl = `http://localhost:5000/api/auth/register`;
      console.log("apiUrl", apiUrl)
      await axios.post(apiUrl, form);
      navigate('/login'); // redirect to login after successful register
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full mb-3 px-4 py-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />
        {/* <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
        >
          <option value="student">Student</option>
          <option value="organizer">Organizer</option>
        </select> */}
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
        >
          <option value="student">Student</option>
          <option value="organizer">Organizer</option>

        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
