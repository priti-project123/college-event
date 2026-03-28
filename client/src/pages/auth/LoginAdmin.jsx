// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginAdmin = () => {
//   const [email, setEmail]     = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError]     = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/login-admin', {
//         email,
//         password
//       });

//       const { token, user } = response.data;
//       localStorage.setItem('token', token);

//       if (user.role === 'admin') {
//         navigate('/admin/dashboard');
//       } else {
//         setError('Access denied');
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Admin Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Admin Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         /><br/>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         /><br/>
//         <button type="submit">Login</button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default LoginAdmin;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginAdmin = () => {
//   const [email, setEmail]       = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError]       = useState('');
//   const [loading, setLoading]   = useState(false);

//   const navigate = useNavigate();

//   // const handleLogin = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setError('');

//   //   try {
//   //     const response = await axios.post('http://localhost:5000/api/login-admin', {
//   //       email,
//   //       password,
//   //     });

//   //     const { token, user } = response.data;

//   //     // Save token and user info in localStorage
//   //     localStorage.setItem('token', token);
//   //     localStorage.setItem('user', JSON.stringify(user));

//   //     if (user.role === 'admin') {
//   //       navigate('/admin/dashboard'); // ✅ Auto-redirect to admin dashboard
//   //     } else {
//   //       setError('Access denied: Not an admin.');
//   //     }
//   //   } catch (err) {
//   //     setError(err.response?.data?.message || 'Login failed');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };


//   const handleLogin = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setError('');

//   try {
//     const response = await axios.post('http://localhost:5000/api/login-admin', {
//       email: email.toLowerCase(), // ✅ ensure lowercase
//       password,
//     });

//     const { token, user } = response.data;

//     localStorage.setItem('token', token);
//     localStorage.setItem('user', JSON.stringify(user));

//     if (user.role === 'admin') {
//       navigate('/admin/dashboard');
//     } else {
//       setError('Access denied: Not an admin.');
//     }
//   } catch (err) {
//     setError(err.response?.data?.message || 'Login failed');
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <div className="login-container">
//       <h2>Admin Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Admin Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         /><br />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         /><br />

//         <button type="submit" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>

//       {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
//     </div>
//   );
// };

// export default LoginAdmin;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginAdmin = () => {
//   const [email, setEmail]       = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError]       = useState('');
//   const [loading, setLoading]   = useState(false);

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.post('http://localhost:5000/api/login-admin', {
//         email: email.toLowerCase(),
//         password,
//       });

//       const { token, user } = response.data;

//       localStorage.setItem('token', token);
//       localStorage.setItem('user', JSON.stringify(user));

//       if (user.role === 'admin') {
//         navigate('/admin/dashboard');
//       } else {
//         setError('Access denied: Not an admin.');
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Admin Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         {error && (
//           <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginAdmin;









// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginAdmin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const res = await axios.post('http://localhost:5000/api/login-admin', {
//         email: email.toLowerCase(),
//         password,
//       });

//       const { token, user } = res.data;
//       localStorage.setItem('token', token);
//       localStorage.setItem('user', JSON.stringify(user));

//       if (user.role === 'admin') {
//         navigate('/admin/dashboard');
//       } else {
//         setError('Access denied: Not an admin.');
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Admin Login</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:border-blue-300"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:border-blue-300"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>

//         {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default LoginAdmin;




import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/login-admin', {
        email: email.toLowerCase(),
        password,
      });

      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        setError('Access denied: Not an admin.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default LoginAdmin;
