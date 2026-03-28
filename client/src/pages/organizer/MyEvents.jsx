// // src/pages/organizer/MyEvents.jsx
// import React, { useEffect, useState } from 'react';
// // import eventService from '../../services/eventService';
// import { getMyEvents, deleteEvent, updateEvent } from '../../services/eventService';

// import EventCard from '../../compnents/cards/EventCard';
// import EventDetailsModal from '../../compnents/modals/EventDetailsModal';
// import ConfirmationModal from '../../compnents/modals/ConfirmationModal';
// import EditEventModal from '../../compnents/modals/EditEventModal';
// import { Toaster, toast } from 'react-hot-toast';

// const MyEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);

//   const fetchMyEvents = async () => {
//     try {
//       const data =  await getMyEvents();
//       setEvents(data);
//       toast.success('Events loaded', {
//         duration: 2000,
//         style: {
//           background: '#d1fae5',
//           color: '#065f46',
//         },
//       });
//     } catch (error) {
//       toast.error('Failed to fetch events', {
//         duration: 3000,
//         style: {
//           background: '#fee2e2',
//           color: '#991b1b',
//         },
//       });
//       console.error('Error fetching events:', error);
//     }
//   };

//   useEffect(() => {
//     fetchMyEvents();
//   }, []);

//   const handleDelete = async () => {
//     try {
//       await deleteEvent(selectedEvent._id);
//       setShowConfirmModal(false);
//       toast.success('Event deleted successfully', {
//         duration: 2500,
//         style: {
//           background: '#fef3c7',
//           color: '#92400e',
//         },
//       });
//       fetchMyEvents();
//     } catch (error) {
//       toast.error('Error deleting event', {
//         duration: 3000,
//         style: {
//           background: '#fee2e2',
//           color: '#991b1b',
//         },
//       });
//       console.error('Error deleting event:', error);
//     }
//   };

//   const handleSaveEdit = async (updatedEvent) => {
//     if (!updatedEvent.title || !updatedEvent.date || !updatedEvent.location) {
//       toast.error('Please fill in all required fields', {
//         duration: 2500,
//         style: {
//           background: '#fee2e2',
//           color: '#991b1b',
//         },
//       });
//       return;
//     }

//     try {
//       await updateEvent(updatedEvent._id, updatedEvent);
//       setShowEditModal(false);
//       setShowDetailsModal(false);
//       toast.success('Event updated successfully', {
//         duration: 2500,
//         style: {
//           background: '#ecfccb',
//           color: '#365314',
//         },
//       });
//       fetchMyEvents();
//     } catch (error) {
//       toast.error('Error updating event', {
//         duration: 3000,
//         style: {
//           background: '#fee2e2',
//           color: '#991b1b',
//         },
//       });
//       console.error('Error updating event:', error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <Toaster position="top-right" />

//       <h1 className="text-2xl font-bold mb-4">My Events</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {events.map((event) => (
//           <EventCard
//             key={event._id}
//             event={event}
//             onClick={() => {
//               setSelectedEvent(event);
//               setShowDetailsModal(true);
//             }}
//           />
//         ))}
//       </div>

//       <EventDetailsModal
//         isOpen={showDetailsModal}
//         onClose={() => setShowDetailsModal(false)}
//         event={selectedEvent}
//         onEdit={(e) => {
//           setSelectedEvent(e);
//           setShowDetailsModal(false);
//           setShowEditModal(true);
//         }}
//       />

//       <EditEventModal
//         isOpen={showEditModal}
//         onClose={() => setShowEditModal(false)}
//         event={selectedEvent}
//         onSave={handleSaveEdit}
//       />

//       <ConfirmationModal
//         isOpen={showConfirmModal}
//         onClose={() => setShowConfirmModal(false)}
//         onConfirm={handleDelete}
//         description="Are you sure you want to delete this event? This action cannot be undone."
//       />
//     </div>
//   );
// };

// export default MyEvents;



















import React, { useEffect, useState } from 'react';
import { getMyEvents, deleteEvent, updateEvent } from '../../services/eventService';
import EventDetailsModal from '../../compnents/modals/EventDetailsModal';
import ConfirmationModal from '../../compnents/modals/ConfirmationModal';
import EditEventModal from '../../compnents/modals/EditEventModal';
import { Toaster, toast } from 'react-hot-toast';

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const fetchMyEvents = async () => {
    try {
      const data = await getMyEvents();
      setEvents(data);
      toast.success('Events loaded', {
        duration: 2000,
        style: {
          background: '#d1fae5',
          color: '#065f46',
        },
      });
    } catch (error) {
      toast.error('Failed to fetch events', {
        duration: 3000,
        style: {
          background: '#fee2e2',
          color: '#991b1b',
        },
      });
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchMyEvents();
  }, []);

  const handleDelete = async () => {
    try {
      await deleteEvent(selectedEvent._id);
      setShowConfirmModal(false);
      toast.success('Event deleted successfully', {
        duration: 2500,
        style: {
          background: '#fef3c7',
          color: '#92400e',
        },
      });
      fetchMyEvents();
    } catch (error) {
      toast.error('Error deleting event', {
        duration: 3000,
        style: {
          background: '#fee2e2',
          color: '#991b1b',
        },
      });
      console.error('Error deleting event:', error);
    }
  };

  const handleSaveEdit = async (updatedEvent) => {
    if (!updatedEvent.title || !updatedEvent.date || !updatedEvent.location) {
      toast.error('Please fill in all required fields', {
        duration: 2500,
        style: {
          background: '#fee2e2',
          color: '#991b1b',
        },
      });
      return;
    }

    try {
      await updateEvent(updatedEvent._id, updatedEvent);
      setShowEditModal(false);
      setShowDetailsModal(false);
      toast.success('Event updated successfully', {
        duration: 2500,
        style: {
          background: '#ecfccb',
          color: '#365314',
        },
      });
      fetchMyEvents();
    } catch (error) {
      toast.error('Error updating event', {
        duration: 3000,
        style: {
          background: '#fee2e2',
          color: '#991b1b',
        },
      });
      console.error('Error updating event:', error);
    }
  };

  return (
    <div className="p-6">
      <Toaster position="top-right" />
      <h1 className="text-2xl font-bold mb-4">My Events</h1>

      {/* Events Table */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.length > 0 ? (
              events.map((event) => (
                <tr key={event._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{event.title}</td>
                  <td className="border px-4 py-2">
                    {new Date(event.date).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2">{event.location}</td>
                  <td className="border px-4 py-2 flex gap-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      onClick={() => {
                        setSelectedEvent(event);
                        setShowDetailsModal(true);
                      }}
                    >
                      View
                    </button>
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      onClick={() => {
                        setSelectedEvent(event);
                        setShowEditModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => {
                        setSelectedEvent(event);
                        setShowConfirmModal(true);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No events found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <EventDetailsModal
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        event={selectedEvent}
        onEdit={(e) => {
          setSelectedEvent(e);
          setShowDetailsModal(false);
          setShowEditModal(true);
        }}
      />

      <EditEventModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        event={selectedEvent}
        onSave={handleSaveEdit}
      />

      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleDelete}
        description="Are you sure you want to delete this event? This action cannot be undone."
      />
    </div>
  );
};

export default MyEvents;
