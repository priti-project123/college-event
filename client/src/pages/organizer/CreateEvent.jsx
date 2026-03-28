// // src/pages/organizer/CreateEvent.jsx
// import React, { useState } from 'react';
// import InputField from '../../compnents/forms/InputField';
// import DatePicker from '../../compnents/forms/DatePicker';
// import TimePicker from '../../compnents/forms/TimePicker';
// import FileUpload from '../../compnents/forms/FileUpload';
// import TextArea from '../../compnents/forms/TextArea';
// import Dropdown from '../../compnents/forms/Dropdown';
// import { createEvent } from '../../services/eventService';
// import useAuth from '../../hooks/useAuth';
// import { Toaster, toast } from 'react-hot-toast';
// import notificationService from '../../services/notificationService';

// const CreateEvent = () => {
//   const { user } = useAuth();
//   const [eventName, setEventName] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [poster, setPoster] = useState(null);
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');

//   const categoryOptions = ['Cultural', 'Technical', 'Sports'];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!eventName || !date || !time || !description || !category || !poster) {
//       toast.error('Please fill all fields before submitting.', {
//         duration: 3000,
//         style: { background: '#fee2e2', color: '#991b1b' },
//       });
//       return;
//     }

//     const formData = new FormData();
//     formData.append('name', eventName);
//     formData.append('date', date);
//     formData.append('time', time);
//     formData.append('description', description);
//     formData.append('category', category);
//     formData.append('poster', poster);

//     try {
//       const data = await createEvent(formData, user.token);

//       // 🔔 Show toast
//       toast.success('Event created successfully!', {
//         duration: 2500,
//         style: { background: '#d1fae5', color: '#065f46' },
//       });

//       // 📨 Log notification in DB
//       await notificationService.createNotification(
//         {
//           message: `New event "${eventName}" created.`,
//           type: 'success',
//         },
//         user.token
//       );

//       // Reset form
//       setEventName('');
//       setDate('');
//       setTime('');
//       setDescription('');
//       setCategory('');
//       setPoster(null);
//     } catch (err) {
//       console.error('Error creating event:', err.response?.data || err.message);
//       toast.error('Failed to create event.', {
//         duration: 3000,
//         style: { background: '#fee2e2', color: '#991b1b' },
//       });
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded shadow">
//       <Toaster position="top-right" />

//       <h2 className="text-xl font-bold mb-4">Create New Event</h2>

//       <form onSubmit={handleSubmit}>
//         <InputField
//           label="Event Name"
//           value={eventName}
//           onChange={(e) => setEventName(e.target.value)}
//           name="eventName"
//           placeholder="Enter event name"
//         />

//         <DatePicker
//           label="Event Date"
//           selectedDate={date}
//           onChange={(date) => setDate(date)}
//         />


//         <TimePicker
//           label="Event Time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           name="time"
//         />

//         <TextArea
//           label="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           name="description"
//           placeholder="Enter event details"
//         />

//         <Dropdown
//           label="Category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           name="category"
//           options={categoryOptions}
//         />

//         <FileUpload
//           label="Upload Poster"
//           name="poster"
//           onChange={(e) => setPoster(e.target.files[0])}
//         />

//         <button
//           type="submit"
//           className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 mt-4"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateEvent;



// import React, { useState } from 'react';
// import InputField from '../../compnents/forms/InputField';
// import DatePicker from '../../compnents/forms/DatePicker';
// import TimePicker from '../../compnents/forms/TimePicker';
// import FileUpload from '../../compnents/forms/FileUpload';
// import TextArea from '../../compnents/forms/TextArea';
// import Dropdown from '../../compnents/forms/Dropdown';
// import { createEvent } from '../../services/eventService';
// import useAuth from '../../hooks/useAuth';
// import { Toaster, toast } from 'react-hot-toast';
// import notificationService from '../../services/notificationService';

// const CreateEvent = () => {
//   const { user } = useAuth();
//   const [eventName, setEventName] = useState('');
//   const [date, setDate] = useState(null); 
//   const [time, setTime] = useState('');
//   const [poster, setPoster] = useState(null);
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');

//   const categoryOptions = ['Cultural', 'Technical', 'Sports'];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!eventName || !date || !time || !description || !category || !poster) {
//       toast.error('Please fill all fields before submitting.', {
//         duration: 3000,
//         style: { background: '#fee2e2', color: '#991b1b' },
//       });
//       return;
//     }

//     const formData = new FormData();
//     formData.append('name', eventName);
//     formData.append('date', date.toISOString().split('T')[0]); 
//     formData.append('time', time);
//     formData.append('description', description);
//     formData.append('category', category);
//     formData.append('poster', poster);

//     try {
//       const data = await createEvent(formData, user.token);

//       toast.success('Event created successfully!', {
//         duration: 2500,
//         style: { background: '#d1fae5', color: '#065f46' },
//       });

//       await notificationService.createNotification(
//         {
//           message: `New event "${eventName}" created.`,
//           type: 'success',
//         },
//         user.token
//       );

//       // Reset form
//       setEventName('');
//       setDate(null);
//       setTime('');
//       setDescription('');
//       setCategory('');
//       setPoster(null);
//     } catch (err) {
//       console.error('Error creating event:', err.response?.data || err.message);
//       toast.error('Failed to create event.', {
//         duration: 3000,
//         style: { background: '#fee2e2', color: '#991b1b' },
//       });
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded shadow">
//       <Toaster position="top-right" />

//       <h2 className="text-xl font-bold mb-4">Create New Event</h2>

//       <form onSubmit={handleSubmit}>
//         <InputField
//           label="Event Name"
//           value={eventName}
//           onChange={(e) => setEventName(e.target.value)}
//           name="eventName"
//           placeholder="Enter event name"
//         />

//         <DatePicker
//           label="Event Date"
//           selectedDate={date}
//           onChange={(date) => setDate(date)}
//         />

//         <TimePicker
//           label="Event Time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           name="time"
//         />

//         <TextArea
//           label="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           name="description"
//           placeholder="Enter event details"
//         />

//         <Dropdown
//           label="Category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           name="category"
//           options={categoryOptions}
//         />

//         <FileUpload
//           label="Upload Poster"
//           name="poster"
//           onChange={(e) => setPoster(e.target.files[0])}
//         />

//         <button
//           type="submit"
//           className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 mt-4"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateEvent;


// import React, { useState } from 'react';
// import InputField from '../../compnents/forms/InputField';
// import DatePicker from '../../compnents/forms/DatePicker';
// import TimePicker from '../../compnents/forms/TimePicker';
// import FileUpload from '../../compnents/forms/FileUpload';
// import TextArea from '../../compnents/forms/TextArea';
// import Dropdown from '../../compnents/forms/Dropdown';
// import { createEvent } from '../../services/eventService';
// import useAuth from '../../hooks/useAuth';
// import { Toaster, toast } from 'react-hot-toast';
// import notificationService from '../../services/notificationService';

// const CreateEvent = () => {
//   const { user } = useAuth();

//   const [eventName, setEventName] = useState('');
//   const [date, setDate] = useState(null);
//   const [time, setTime] = useState('');
//   const [poster, setPoster] = useState(null);
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [location, setLocation] = useState(''); // ✅ added location

//   const categoryOptions = ['Cultural', 'Technical', 'Sports'];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!eventName || !date || !time || !description || !category || !poster || !location) {
//       toast.error('Please fill all fields before submitting.', {
//         duration: 3000,
//         style: { background: '#fee2e2', color: '#991b1b' },
//       });
//       return;
//     }

//     const formData = new FormData();
//     formData.append('title', eventName); // ✅ renamed to match backend
//     formData.append('date', date.toISOString().split('T')[0]); // format as 'YYYY-MM-DD'
//     formData.append('time', time); // optional; only if used in backend
//     formData.append('description', description);
//     formData.append('category', category);
//     formData.append('poster', poster);
//     formData.append('location', location); // ✅ required by backend

//     try {
//       const data = await createEvent(formData, user.token);

//       toast.success('Event created successfully!', {
//         duration: 2500,
//         style: { background: '#d1fae5', color: '#065f46' },
//       });

//       await notificationService.createNotification(
//         {
//           message: `New event "${eventName}" created.`,
//           type: 'success',
//         },
//         user.token
//       );

//       // Reset form
//       setEventName('');
//       setDate(null);
//       setTime('');
//       setDescription('');
//       setCategory('');
//       setPoster(null);
//       setLocation('');
//     } catch (err) {
//       console.error('Error creating event:', err.response?.data || err.message);
//       toast.error('Failed to create event.', {
//         duration: 3000,
//         style: { background: '#fee2e2', color: '#991b1b' },
//       });
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded shadow">
//       <Toaster position="top-right" />

//       <h2 className="text-xl font-bold mb-4">Create New Event</h2>

//       <form onSubmit={handleSubmit}>
//         <InputField
//           label="Event Name"
//           value={eventName}
//           onChange={(e) => setEventName(e.target.value)}
//           name="eventName"
//           placeholder="Enter event name"
//         />

//         <DatePicker
//           label="Event Date"
//           selectedDate={date}
//           onChange={(newDate) => setDate(newDate)}
//           name="date"
//         />

//         <TimePicker
//           label="Event Time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           name="time"
//         />

//         <InputField
//           label="Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           name="location"
//           placeholder="Enter location (e.g., Auditorium)"
//         />

//         <TextArea
//           label="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           name="description"
//           placeholder="Enter event details"
//         />

//         <Dropdown
//           label="Category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           name="category"
//           options={categoryOptions}
//         />

//         <FileUpload
//           label="Upload Poster"
//           name="poster"
//           onChange={(e) => setPoster(e.target.files[0])}
//         />

//         <button
//           type="submit"
//           className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 mt-4"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateEvent;


import React, { useState } from 'react';
import InputField from '../../compnents/forms/InputField';
import DatePicker from '../../compnents/forms/DatePicker';
import TimePicker from '../../compnents/forms/TimePicker';
import FileUpload from '../../compnents/forms/FileUpload';
import TextArea from '../../compnents/forms/TextArea';
import DropDown from '../../compnents/forms/DropDown';
import { createEvent } from '../../services/eventService';
import useAuth from '../../hooks/useAuth';
import { Toaster, toast } from 'react-hot-toast';
import notificationService from '../../services/notificationService';

const CreateEvent = () => {
  const { user } = useAuth();

  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [poster, setPoster] = useState(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  const categoryOptions = ['Cultural', 'Technical', 'Sports'];

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!eventName || !date || !time || !description || !category || !poster || !location) {
  //     toast.error('Please fill all fields before submitting.', {
  //       duration: 3000,
  //       style: { background: '#fee2e2', color: '#991b1b' },
  //     });
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('title', eventName);
  //   formData.append('date', date.toISOString().split('T')[0]);
  //   formData.append('time', time);
  //   formData.append('description', description);
  //   formData.append('category', category);
  //   formData.append('image', poster); // ✅ Changed 'poster' → 'image'
  //   formData.append('location', location);

  //   try {
  //     const data = await createEvent(formData, user.token);

  //     toast.success('Event created successfully!', {
  //       duration: 2500,
  //       style: { background: '#d1fae5', color: '#065f46' },
  //     });

  //     await notificationService.createNotification(
  //       {
  //         message: `New event "${eventName}" created.`,
  //         type: 'success',
  //       },
  //       user.token
  //     );

  //     // Reset form
  //     setEventName('');
  //     setDate(null);
  //     setTime('');
  //     setDescription('');
  //     setCategory('');
  //     setPoster(null);
  //     setLocation('');
  //   } catch (err) {
  //     console.error('Error creating event:', err.response?.data || err.message);
  //     // console.error('Event creation failed:', error);
  //     res.status(500).json({ message: 'Failed to create event' });
  //     toast.error('Failed to create event.', {
  //       duration: 3000,
  //       style: { background: '#fee2e2', color: '#991b1b' },
  //     });
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!eventName || !date || !time || !description || !category || !poster || !location) {
    toast.error('Please fill all fields before submitting.');
    return;
  }

  const formData = new FormData();
  formData.append('title', eventName);
  formData.append('date', date.toISOString().split('T')[0]);
  formData.append('time', time); // ✅ Time added
  formData.append('description', description);
  formData.append('category', category);
  formData.append('location', location);
  formData.append('image', poster); // ✅ use 'image'

  try {
    const data = await createEvent(formData); // No need to pass user.token, handled in axiosInstance

    toast.success('Event created successfully!');
    await notificationService.createNotification({
      message: `New event "${eventName}" created.`,
      type: 'success',
    });

    // Reset form
    setEventName('');
    setDate(null);
    setTime('');
    setDescription('');
    setCategory('');
    setPoster(null);
    setLocation('');
  } catch (err) {
    console.error('Error creating event:', error);
    toast.error('Failed to create event.');
  }
};

  return (
    <div className="p-6 bg-white rounded shadow">
      <Toaster position="top-right" />

      <h2 className="text-xl font-bold mb-4">Create New Event</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          name="eventName"
          placeholder="Enter event name"
        />

        <DatePicker
          label="Event Date"
          selectedDate={date}
          onChange={(newDate) => setDate(newDate)}
          name="date"
        />

        <TimePicker
          label="Event Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          name="time"
        />

        <InputField
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          name="location"
          placeholder="Enter location (e.g., Auditorium)"
        />

        <TextArea
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          placeholder="Enter event details"
        />

        <DropDown
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          options={categoryOptions}
        />

        <FileUpload
          label="Upload Poster"
          name="image" // ✅ Changed to match backend field
          onChange={(e) => setPoster(e.target.files[0])}
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
