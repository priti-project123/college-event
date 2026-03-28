// src/utils/statusColors.js

const statusColors = {
  pending: 'text-yellow-500 bg-yellow-100',
  approved: 'text-green-600 bg-green-100',
  rejected: 'text-red-600 bg-red-100',
};

export const getStatusColor = (status) => {
  return statusColors[status.toLowerCase()] || 'text-gray-600 bg-gray-100';
};
