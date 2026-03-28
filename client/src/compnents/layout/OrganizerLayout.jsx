// src/components/layout/OrganizerLayout.jsx
// import React from 'react';
// import OrganizerSidebar from './OrganizerSidebar';
// import { Outlet } from 'react-router-dom';

// const OrganizerLayout = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <OrganizerSidebar />

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-y-auto">
//         <Outlet /> {/* Renders child routes like Dashboard, MyEvents, etc. */}
//       </main>
//     </div>
//   );
// };

// export default OrganizerLayout;


// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import OrganizerSidebar from './OrganizerSidebar';

// const OrganizerLayout = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <OrganizerSidebar />
//       <div className="flex-1 p-6 overflow-y-auto">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default OrganizerLayout;


import React from 'react';
import { Outlet } from 'react-router-dom';
import OrganizerSidebar from './OrganizerSidebar';
import OrganizerTopbar from './OrganizerTopbar';

const OrganizerLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <OrganizerSidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* ✅ Topbar added globally */}
        <OrganizerTopbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default OrganizerLayout;
