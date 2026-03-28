// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center w-full">
//       {/* Logo */}
//       <div className="text-3xl font-bold text-blue-600">
//         <Link to="/">🎓 CollegeFest</Link>
//       </div>

//       {/* Navigation Links */}
//       <ul className="flex space-x-6 text-blue-600 font-medium">
//         <li>
//           <Link to="/" className="hover:text-blue-600">Home</Link>
//         </li>
//         <li>
//           <Link to="/stored-events" className="hover:text-blue-600">Stored Events</Link>
//         </li>
//         <li>
//           <Link to="/about" className="hover:text-blue-600">About</Link>
//         </li>
//         <li>
//           <Link to="/contact" className="hover:text-blue-600">Contact</Link>
//         </li>
//         <li>
//           <Link to="/login" className="hover:text-blue-600">Login</Link> / <Link to="/register" className="hover:text-blue-600">Register</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }


import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center w-full">
      {/* Logo */}
      <div className="text-3xl font-bold text-blue-600">
        <Link to="/">🎓 CollegeFest</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 items-center text-blue-600 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600">Home</Link>
        </li>
        <li>
          <Link to="/stored-events" className="hover:text-blue-600">Stored Events</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </li>
        <li className="flex space-x-2">
          <Link to="/login">
            <button className="px-4 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-4 py-1 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
              Register
            </button>

          </Link>
        </li>
      </ul>
    </nav>
  );
}
