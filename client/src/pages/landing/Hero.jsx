// import Navbar from './Navbar';
// import Footer from '../../compnents/layout/Footer';

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <section className="bg-gray-100 py-12 text-center">
//         <img src="/college.jpg" alt="College" className="mx-auto w-full max-w-4xl rounded-md shadow-lg" />
//         <h1 className="text-4xl mt-6 font-bold text-blue-600">Welcome to College Event Portal</h1>
//         <p className="text-lg mt-4 max-w-3xl mx-auto">Discover and manage events in one place. Join cultural, technical, sports and more!</p>
//       </section>

//       <section className="py-10 bg-white">
//         <h2 className="text-3xl text-center font-semibold text-gray-800 mb-8">Event Categories</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-10">
//           {['Cultural', 'Sports', 'Technical', 'General', 'Meetings'].map(cat => (
//             <div key={cat} className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
//               <h3 className="text-xl font-bold text-blue-700">{cat}</h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }



// import Navbar from './Navbar';
// import Footer from '../../compnents/layout/Footer'; 

// export default function Hero() {
//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <section className="bg-gray-100 py-12">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <img
//             src="/college.jpg"
//             alt="College"
//             className="mx-auto w-full max-w-4xl rounded-md shadow-lg mb-6"
//           />
//           <h1 className="text-4xl font-bold text-blue-600">
//             Welcome to College Event Portal
//           </h1>
//           <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-700">
//             Discover and manage events in one place. Join cultural, technical, sports and more!
//           </p>
//         </div>
//       </section>

//       {/* Event Categories Section */}
//       <section className="py-12 bg-white">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-8">Event Categories</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//             {['Cultural', 'Sports', 'Technical', 'General', 'Meetings'].map((category) => (
//               <div
//                 key={category}
//                 className="bg-blue-100 p-6 rounded-lg shadow-md hover:bg-blue-200 transition"
//               >
//                 <h3 className="text-xl font-bold text-blue-700">{category}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }





// import Navbar from './Navbar';
// import Footer from '../../compnents/layout/Footer';

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <section className="bg-gray-100  w-full text-center">
//         <img
//           src="/colleg_img.jpg"
//           alt="College"
//           className="mx-auto w-full h-[30vh] object-cover shadow-lg"
//         />
//         <h1 className="text-4xl mt-6 font-bold text-blue-600">
//           Welcome to College Event Portal
//         </h1>
//         <p className="text-lg mt-4 mx-auto px-6">
//           Discover and manage events in one place. Join cultural, technical, sports and more!
//         </p>
//       </section>

//       {/* Event Categories Section */}
//       <section className="py-10 bg-white w-full text-center">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-8">Event Categories</h2>
//         <div className="flex flex-wrap justify-center gap-6 px-4">
//           {['Cultural', 'Sports', 'Technical', 'General', 'Meetings'].map((category) => (
//             <div
//               key={category}
//               className="bg-blue-100 px-6 py-4 rounded-lg shadow-md text-blue-700 font-semibold text-lg hover:bg-blue-200 transition"
//             >
//               {category}
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }



import Navbar from './Navbar';
import Footer from '../../compnents/layout/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section with overlay */}
      {/* Hero Section with reduced height and overlay */}
      <section className="relative w-full">
        <div className="relative w-full" style={{ height: '70vh' }}>
          {/* Background Image */}
          <img
            src="/colleg_img.jpg"
            alt="College"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center drop-shadow-md">
              Welcome to College Event Portal
            </h1>
            <p className="text-md md:text-lg max-w-2xl text-center drop-shadow-md">
              Discover and manage events in one place. Join cultural, technical, sports and more!
            </p>

            <ul className='mt-4'>
              <li className="flex space-x-2">
                <Link to="/login">
                  <button className="px-7 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-5 py-2 rounded-md border border-blue-600 text-white">
                    Register
                  </button>

                </Link>
              </li>
            </ul>

          </div>
        </div>
      </section>


      {/* Event Categories Section */}
      <section className="py-10 bg-white w-full text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Event Categories</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {['Cultural', 'Sports', 'Technical', 'General', 'Meetings'].map((category) => (
            <div
              key={category}
              className="bg-blue-100 px-6 py-4 rounded-lg shadow-md text-blue-700 font-semibold text-lg hover:bg-blue-200 transition"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
