import React from 'react';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-6 bg-gray-100 flex flex-col">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
