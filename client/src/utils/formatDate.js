// src/utils/formatDate.js

export const formatDate = (dateStr) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(dateStr).toLocaleDateString('en-US', options);
};
