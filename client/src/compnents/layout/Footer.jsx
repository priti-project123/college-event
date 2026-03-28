// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-200 text-center py-4 mt-auto w-full">
//       <p className="text-sm">&copy; {new Date().getFullYear()} College Event System. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 border-t border-gray-300 text-center text-sm text-gray-600 py-4 mt-auto w-full">
//       <div className="container mx-auto px-4">
//         <p>
//           &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-600">College Event System</span>. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaInstagram, FaFacebookF } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-8 mt-auto w-full">
//       <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 text-sm">
        
//         {/* Navigation Links */}
//         <div>
//           <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
//           <ul className="space-y-1">
//             <li><Link to="/" className="hover:underline">Home</Link></li>
//             <li><Link to="/about" className="hover:underline">About</Link></li>
//             <li><Link to="/contact" className="hover:underline">Contact</Link></li>
//             <li><Link to="/events" className="hover:underline">Stored Events</Link></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="font-semibold text-lg mb-2">Contact</h3>
//           <p>📞 +91 98765 43210</p>
//           <p>📧 cems.college@gmail.com</p>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
//           <div className="flex space-x-4 mt-2">
//             <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
//               <FaInstagram size={20} />
//             </a>
//             <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
//               <FaFacebookF size={20} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Copyright */}
//       <div className="text-center text-gray-400 mt-6 text-xs">
//         &copy; {new Date().getFullYear()} <span className="font-semibold text-white">College Event System</span>. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-12 lg:px-20 w-full mt-auto">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-4 gap-10 text-sm">

        {/* Logo and About */}
        <div className="md:col-span-1">
          <h1 className="text-3xl font-bold text-yellow-400 mb-2">CollegeFest</h1>
          <p className="text-gray-300">
            Manage and explore all your college events – cultural, sports, technical and more. Join the festivity with ease!
          </p>
        </div>

        {/* Navigation Links */}
        <div className='mt-10 ml-6'>
          <h3 className="font-semibold text-lg mb-3 text-yellow-300">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/events" className="hover:underline">Stored Events</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='mt-10 ml-6'>
          <h3 className="font-semibold text-lg mb-3 text-yellow-300">Contact</h3>
          <p>📞 +91 98765 43210</p>
          <p>📧 cems.college@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className='mt-10 ml-6'>
          <h3 className="font-semibold text-lg mb-3 text-yellow-300">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-400 mt-8 text-xs border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-white">EventFest – College Event Management System</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
