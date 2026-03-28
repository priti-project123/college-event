import React from 'react';

const Dropdown = ({ label, name, value, onChange, options }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">-- Select --</option>
        {options.map((opt) => (
          <option key={opt._id || opt} value={opt._id || opt}>
            {opt.name || opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
