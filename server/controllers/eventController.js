// const Event = require('../models/Event');
// const { validateEvent } = require('../utils/validators');

// // @desc    Create a new event
// // @route   POST /api/events
// // @access  Organizer/Admin
// const createEvent = async (req, res) => {
//   try {
//     const { title, description, date, location, category } = req.body;

//     const newEvent = new Event({
//       title,
//       description,
//       date,
//       location,
//       category,
//       createdBy: req.user._id,
//       poster: req.file ? req.file.path : null, // if using multer
//     });

//     const savedEvent = await newEvent.save();
//     res.status(201).json(savedEvent);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to create event' });
//   }
// };

// // @desc    Get all events
// // @route   GET /api/events
// // @access  Public
// const getAllEvents = async (req, res) => {
//   try {
//     const events = await Event.find().populate('category', 'name').populate('createdBy', 'name role');
//     res.json(events);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch events' });
//   }
// };

// // @desc    Get single event by ID
// // @route   GET /api/events/:id
// // @access  Public
// const getEventById = async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id).populate('category', 'name');

//     if (!event) return res.status(404).json({ message: 'Event not found' });

//     res.json(event);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch event' });
//   }
// };

// // @desc    Update event
// // @route   PUT /api/events/:id
// // @access  Organizer/Admin
// const updateEvent = async (req, res) => {
//   try {
//     const { title, description, date, location, category } = req.body;
//     const event = await Event.findById(req.params.id);

//     if (!event) return res.status(404).json({ message: 'Event not found' });

//     event.title = title || event.title;
//     event.description = description || event.description;
//     event.date = date || event.date;
//     event.location = location || event.location;
//     event.category = category || event.category;
//     if (req.file) {
//       event.poster = req.file.path;
//     }

//     const updated = await event.save();
//     res.json(updated);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to update event' });
//   }
// };

// // @desc    Delete event
// // @route   DELETE /api/events/:id
// // @access  Organizer/Admin
// const deleteEvent = async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id);

//     if (!event) return res.status(404).json({ message: 'Event not found' });

//     await event.remove();
//     res.json({ message: 'Event deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to delete event' });
//   }
// };

// module.exports = {
//   createEvent,
//   getAllEvents,
//   getEventById,
//   updateEvent,
//   deleteEvent,
// };



// const Event = require('../models/Event');
// const { validateEvent } = require('../utils/validators');


// // const createEvent = async (req, res) => {
// //   const errors = validateEvent(req.body);
// //   if (errors.length > 0) {
// //     return res.status(400).json({ errors });
// //   }

// //   try {
// //     const { title, description, date, location, category } = req.body;
// //     const image = req.file ? req.file.path : null;

// //     const newEvent = new Event({
// //       title,
// //       description,
// //       date,
// //       location,
// //       category,
// //       createdBy: req.user._id,
// //       image
// //     });

// //     const savedEvent = await newEvent.save();
// //     res.status(201).json(savedEvent);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Failed to create event' });
// //   }
// // };


// const createEvent = async (req, res) => {
//   const errors = validateEvent(req.body);
//   if (errors.length > 0) {
//     return res.status(400).json({ errors });
//   }

//   try {
//     const { title, description, date, time, location, category } = req.body; // ✅ time added
//     const image = req.file ? req.file.path : null;

//     const newEvent = new Event({
//       title,
//       description,
//       date,
//       time, // ✅ added
//       location,
//       category,
//       createdBy: req.user._id,
//       image
//     });

//     const savedEvent = await newEvent.save();
//     res.status(201).json(savedEvent);
//   } catch (error) {
//     console.error(error); // ✅ log for debugging
//     res.status(500).json({ message: 'Failed to create event' });
//   }
// };

// // @desc    Get all events
// // @route   GET /api/events
// // @access  Public
// const getAllEvents = async (req, res) => {
//   try {
//     const events = await Event.find()
//       .populate('category', 'name')
//       .populate('createdBy', 'name role');
//     res.json(events);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch events' });
//   }
// };

// // @desc    Get single event by ID
// // @route   GET /api/events/:id
// // @access  Public
// const getEventById = async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id).populate('category', 'name');

//     if (!event) return res.status(404).json({ message: 'Event not found' });

//     res.json(event);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch event' });
//   }
// };

// // @desc    Update event
// // @route   PUT /api/events/:id
// // @access  Organizer/Admin
// // const updateEvent = async (req, res) => {
// //   const errors = validateEvent(req.body);
// //   if (errors.length > 0) {
// //     return res.status(400).json({ errors });
// //   }

// //   try {
// //     const { title, description, date, location, category } = req.body;
// //     const event = await Event.findById(req.params.id);

// //     if (!event) return res.status(404).json({ message: 'Event not found' });

// //     event.title = title;
// //     event.description = description;
// //     event.date = date;
// //     event.location = location;
// //     event.category = category;
// //     if (req.file) {
// //       event.image = req.file.path;
// //     }
// //     console.log('Received file:', req.file);

// //     const updated = await event.save();
// //     res.json(updated);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Failed to update event' });
// //   }
// // };

// const updateEvent = async (req, res) => {
//   const errors = validateEvent(req.body);
//   if (errors.length > 0) {
//     return res.status(400).json({ errors });
//   }

//   try {
//     const { title, description, date, time, location, category } = req.body;

//     const event = await Event.findById(req.params.id);
//     if (!event) return res.status(404).json({ message: 'Event not found' });

//     event.title = title;
//     event.description = description;
//     event.date = date;
//     event.time = time; // ✅ added
//     event.location = location;
//     event.category = category;
//     if (req.file) {
//       event.image = req.file.path;
//     }

//     const updated = await event.save();
//     res.json(updated);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to update event' });
//   }
// };


// // @desc    Delete event
// // @route   DELETE /api/events/:id
// // @access  Organizer/Admin
// const deleteEvent = async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id);

//     if (!event) return res.status(404).json({ message: 'Event not found' });

//     await event.remove();
//     res.json({ message: 'Event deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to delete event' });
//   }
// };

// const getEventsByCreator = async (req, res) => {
//   try {
//     const events = await Event.find({ createdBy: req.user._id })
//       .populate('category', 'name')
//       .populate('createdBy', 'name role');
//     res.json(events);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to fetch your events' });
//   }
// };

// module.exports = {
//   createEvent,
//   getAllEvents,
//   getEventById,
//   updateEvent,
//   deleteEvent,
//   getEventsByCreator,
// };



const Event = require('../models/Event');
const Notification = require('../models/Notification');
const { validateEvent } = require('../utils/validators');

// ✅ Create Event
const createEvent = async (req, res) => {
  const errors = validateEvent(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const { title, description, date, time, location, category } = req.body;
    const image = req.file ? req.file.path : null;

    const newEvent = new Event({
      title,
      description,
      date,
      time,
      location,
      category,
      createdBy: req.user._id,
      image,
      status: 'pending' // 🔥 important
    });

    const savedEvent = await newEvent.save();

    res.status(201).json({
      message: 'Event created & pending approval',
      event: savedEvent
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create event' });
  }
};

// ✅ Get All Events (Admin use)
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find()
      .populate('category', 'name')
      .populate('createdBy', 'name role');
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch events' });
  }
};

// ✅ Get Single Event by ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('category', 'name');
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch event' });
  }
};

// ✅ Update Event
const updateEvent = async (req, res) => {
  const errors = validateEvent(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const { title, description, date, time, location, category } = req.body;
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    event.title = title;
    event.description = description;
    event.date = date;
    event.time = time;
    event.location = location;
    event.category = category;

    if (req.file) {
      event.image = req.file.path;
    }

    const updated = await event.save();
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update event' });
  }
};

// ✅ Delete Event
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    await event.remove();
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete event' });
  }
};

// ✅ Organizer: Get my created events (only for dashboard)
const getEventsByCreator = async (req, res) => {
  try {
    const events = await Event.find({ createdBy: req.user._id })
      .populate('category', 'name')
      .populate('createdBy', 'name role');
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch your events' });
  }
};

// ✅ Organizer: View ALL my events (approved, rejected, pending)
// const getMyAllEvents = async (req, res) => {
//   try {
//     const events = await Event.find({ createdBy: req.user._id });
//     res.json(events);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch events' });
//   }
// };

// ✅ Organizer: View ALL my events (approved, rejected, pending)
const getMyAllEvents = async (req, res) => {
  try {
    const events = await Event.find({ createdBy: req.user._id });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch events' });
  }
};


// ✅ Admin: View pending events
const getPendingEvents = async (req, res) => {
  try {
    const events = await Event.find({ status: 'pending' })
      .populate('createdBy', 'name email');
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch pending events' });
  }
};

// ✅ Admin: Approve/Reject event
const updateEventStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const event = await Event.findById(req.params.id).populate('createdBy');

    if (!event) return res.status(404).json({ message: 'Event not found' });

    event.status = status;
    await event.save();

    // 🔔 Create notification
    await Notification.create({
      user: event.createdBy._id,
      message: `Your event "${event.title}" has been ${status}.`
    });

    res.json({ message: `Event ${status}`, event });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update event status' });
  }
};

// ✅ Public: Get only approved events (User)
const getPublicEvents = async (req, res) => {
  try {
    const events = await Event.find({ status: 'approved' });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch public events' });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  getEventsByCreator,
  getMyAllEvents,
  getPendingEvents,
  updateEventStatus,
  getPublicEvents
};
