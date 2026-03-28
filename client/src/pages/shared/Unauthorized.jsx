import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Unauthorized</h1>
      <p className="mb-4">You do not have permission to view this page.</p>
      <Link to="/" className="text-blue-500 underline">Go to Home</Link>
    </div>
  );
};

export default Unauthorized;
