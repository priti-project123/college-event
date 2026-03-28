// import React from 'react';
// import DatePicker from 'react-datepicker';

// const CustomDatePicker = ({ label, selectedDate, onChange }) => {
//   return (
//     <div className="mb-4">
//       {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
//       <DatePicker
//         selected={selectedDate}
//         onChange={onChange}
//         dateFormat="yyyy-MM-dd"
//         className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       />
//     </div>
//   );
// };

// export default CustomDatePicker;


import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ label, selectedDate, onChange }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="yyyy-MM-dd"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default CustomDatePicker;
