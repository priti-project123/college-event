// src/pages/shared/ErrorPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ message = "Something went wrong!" }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-800">
      <h1 className="text-4xl font-bold mb-4">🚨 Error</h1>
      <p className="text-lg mb-6">{message}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
