// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import { RoleProvider } from './context/RoleContext';
// import { NotificationProvider } from './context/NotificationContext';
// import AppRoutes from './routes/AppRoutes';
// import { Toaster } from 'react-hot-toast';
// import Footer from './compnents/layout/Footer';  // ✅ FIXED: `compnents` → `components`
// import 'react-datepicker/dist/react-datepicker.css';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <AuthProvider>
//         <RoleProvider>
//           <NotificationProvider>
//             <div className="min-h-screen flex flex-col">
//               <div className="flex-1">
//                 <AppRoutes />
//               </div>
//               <Footer />
//               <Toaster position="top-right" reverseOrder={false} />
//             </div>
//           </NotificationProvider>
//         </RoleProvider>
//       </AuthProvider>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
// ❌ REMOVE this line
// import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { RoleProvider } from './context/RoleContext';
import { NotificationProvider } from './context/NotificationContext';
import AppRoutes from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast';
import Footer from './compnents/layout/Footer'; // ✅ Also fix spelling: "compnents" → "components"
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';


const App = () => {
  return (
    // ✅ NO <Router> here
    <AuthProvider>
      <RoleProvider>
        <NotificationProvider>
          <div className="min-h-screen flex flex-col">
            <div className="flex-1">
              <AppRoutes />
            </div>
            {/* <Footer /> */}
            <Toaster position="top-right" reverseOrder={false} />
            
          </div>
        </NotificationProvider>
      </RoleProvider>
    </AuthProvider>
  );
};

export default App;
