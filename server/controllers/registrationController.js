// const Registration = require('../models/Registration');
// const Event = require('../models/Event');
// const { validateRegistration } = require('../utils/validators');

// // @desc    Register for an event
// // @route   POST /api/registrations
// // @access  User
// const registerForEvent = async (req, res) => {
//   const errors = validateRegistration(req.body);
//   if (errors.length > 0) {
//     return res.status(400).json({ errors });
//   }

//   try {
//     const { eventId } = req.body;

//     const existing = await Registration.findOne({
//       user: req.user._id,
//       event: eventId,
//     });

//     if (existing) {
//       return res.status(400).json({ message: 'Already registered for this event' });
//     }

//     const registration = new Registration({
//       user: req.user._id,
//       event: eventId,
//     });

//     const saved = await registration.save();
//     res.status(201).json(saved);
//   } catch (error) {
//     res.status(500).json({ message: 'Registration failed' });
//   }
// };

// // @desc    Get registrations of the logged-in user
// // @route   GET /api/registrations/my
// // @access  User
// const getMyRegistrations = async (req, res) => {
//   try {
//     const registrations = await Registration.find({ user: req.user._id }).populate('event');
//     res.json(registrations);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch registrations' });
//   }
// };

// // @desc    Get all registrations (admin)
// // @route   GET /api/registrations
// // @access  Admin
// const getAllRegistrations = async (req, res) => {
//   try {
//     const registrations = await Registration.find()
//       .populate('user', 'name email')
//       .populate('event', 'title');
//     res.json(registrations);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch all registrations' });
//   }
// };

// // @desc    Get event registrations for organizer
// // @route   GET /api/registrations/organizer
// // @access  Organizer
// const getOrganizerRegistrations = async (req, res) => {
//   try {
//     const events = await Event.find({ createdBy: req.user._id }).select('_id');
//     const eventIds = events.map((event) => event._id);

//     const registrations = await Registration.find({ event: { $in: eventIds } })
//       .populate('user', 'name email')
//       .populate('event', 'title');

//     res.json(registrations);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch registrations' });
//   }
// };

// // @desc    Get users registered for a specific event
// // @route   GET /api/registrations/event/:id
// // @access  Organizer/Admin
// const getUsersForEvent = async (req, res) => {
//   try {
//     const registrations = await Registration.find({ event: req.params.id }).populate('user', 'name email');
//     res.json(registrations);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// };

// // @desc    Get all events a user has registered for
// // @route   GET /api/registrations/user/:id
// // @access  Admin/Organizer
// const getEventsForUser = async (req, res) => {
//   try {
//     const registrations = await Registration.find({ user: req.params.id }).populate('event', 'title');
//     res.json(registrations);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// };

// module.exports = {
//   registerForEvent,
//   getMyRegistrations,
//   getAllRegistrations,
//   getOrganizerRegistrations,
//   getUsersForEvent,
//   getEventsForUser,
// };





// const Registration = require('../models/Registration');
// const Event = require('../models/Event');




// const registerUserForEvent = async (req, res) => {
//   const user = req.user;

//   if (user.role !== 'student') {
//     return res.status(403).json({ message: 'Access denied: insufficient permissions' });
//   }

//   const { eventId } = req.body;

//   try {
//     const event = await Event.findById(eventId);
//     if (!event) return res.status(404).json({ message: 'Event not found' });

//     const alreadyRegistered = await Registration.findOne({
//       event: eventId,
//       user: user._id,
//     });

//     if (alreadyRegistered) {
//       return res.status(400).json({ message: 'Already registered' });
//     }

//     const registration = await Registration.create({
//       event: eventId,
//       user: user._id,
//     });

//     res.status(201).json({ message: 'Registered successfully', registration });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };




// // @desc    Get registrations of the logged-in user
// // @route   GET /api/registrations/my
// const getMyRegistrations = async (req, res) => {
//   try {
//     const registrations = await Registration.find({ user: req.user._id }).populate('event');
//     res.json(registrations);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch registrations' });
//   }
// };


// // Example: registrationController.js
// const getUserRegistrations = async (req, res) => {
//   try {
//     const registrations = await Registration.find({ user: req.user._id })
//       .populate('event') // 💡 this is crucial
//       .sort({ registeredAt: -1 });

//     res.status(200).json(registrations);
//   } catch (err) {
//     console.error('Error fetching registrations:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };




// // @desc    Get all registrations (admin)
// // @route   GET /api/registrations
// const getAllRegistrations = async (req, res) => {
//   try {
//     const registrations = await Registration.find()
//       .populate('user', 'name email')
//       .populate('event', 'title');
//     res.json(registrations);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch all registrations' });
//   }
// };

// // @desc    Get registrations for organizer's events
// // @route   GET /api/registrations/organizer
// const getOrganizerRegistrations = async (req, res) => {
//   try {
//     const events = await Event.find({ createdBy: req.user._id }).select('_id');
//     const eventIds = events.map((event) => event._id);

//     const registrations = await Registration.find({ event: { $in: eventIds } })
//       .populate('user', 'name email')
//       .populate('event', 'title');

//     res.json(registrations);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch registrations' });
//   }
// };

// // @desc    Get users registered for a specific event
// // @route   GET /api/registrations/event/:id
// const getUsersForEvent = async (req, res) => {
//   try {
//     const registrations = await Registration.find({ event: req.params.id }).populate('user', 'name email');
//     res.json(registrations);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// };

// // @desc    Get all events a user has registered for
// // @route   GET /api/registrations/user/:id
// // const getEventsForUser = async (req, res) => {
// //   try {
// //     const registrations = await Registration.find({ user: req.params.id }).populate('event', 'title');
// //     res.json(registrations);
// //   } catch (err) {
// //     res.status(500).json({ message: 'Server error', error: err.message });
// //   }
// // };


// // @desc    Get all events a user has registered for
// // @route   GET /api/registrations/user/:id
// const getEventsForUser = async (req, res) => {
//   try {
//     const registrations = await Registration.find({ user: req.params.id })
//       .populate('event', 'title date time location'); // ✅ Include all required fields
//     res.json(registrations);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// };


// module.exports = {
//   // registerForEvent,
//   getMyRegistrations,
//   getAllRegistrations,
//   getUserRegistrations,
//   getOrganizerRegistrations,
//   getUsersForEvent,
//   getEventsForUser,
//  registerUserForEvent
// };







// ===========================================================================================================


// const Registration = require('../models/Registration');
// const Event = require('../models/Event');

// // @desc Register a user for an event
// // @route POST /api/registrations
// // @access Private (student)
// // const registerUserForEvent = async (req, res) => {
// //   try {
// //     const user = req.user;

// //     if (user.role !== 'student') {
// //       return res.status(403).json({ message: 'Only students can register for events' });
// //     }

// //     const { eventId } = req.body;
// //     if (!eventId) {
// //       return res.status(400).json({ message: 'Event ID is required' });
// //     }

// //     const event = await Event.findById(eventId);
// //     if (!event) {
// //       return res.status(404).json({ message: 'Event not found' });
// //     }

// //     const alreadyRegistered = await Registration.findOne({
// //       event: eventId,
// //       user: user._id
// //     });

// //     if (alreadyRegistered) {
// //       return res.status(400).json({ message: 'Already registered for this event' });
// //     }

// //     const registration = await Registration.create({
// //       event: eventId,
// //       user: user._id
// //     });

// //     res.status(201).json({
// //       message: 'Registered successfully',
// //       registration
// //     });
// //   } catch (err) {
// //     console.error('Register event error:', err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };

// const registerUserForEvent = async (req, res) => {
//   const user = req.user;

//   if (user.role !== 'student') {
//     return res.status(403).json({ message: 'Access denied: insufficient permissions' });
//   }

//   const { eventId } = req.body;

//   try {
//     const event = await Event.findById(eventId);
//     if (!event) {
//       return res.status(404).json({ message: 'Event not found' });
//     }

//     // Check if already registered
//     const existing = await Registration.findOne({
//       event: eventId,
//       user: user._id
//     });

//     if (existing) {
//       return res.status(400).json({ message: 'Already registered for this event' });
//     }

//     const registration = new Registration({
//       event: eventId,
//       user: user._id
//     });

//     await registration.save();

//     res.status(201).json({ message: 'Registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };


// // @desc Get logged-in user's registered events
// // @route GET /api/registrations/my
// // @access Private (student)
// const getMyRegistrations = async (req, res) => {
//   try {
//     const registrations = await Registration.find({ user: req.user._id })
//       .populate('event') // fetch full event details
//       .sort({ createdAt: -1 });

//     res.status(200).json(registrations);
//   } catch (error) {
//     console.error('Fetch my registrations error:', error);
//     res.status(500).json({ message: 'Failed to fetch registrations' });
//   }
// };

// // @desc Get all registrations (admin)
// // @route GET /api/registrations
// // @access Private (admin)
// const getAllRegistrations = async (req, res) => {
//   try {
//     const registrations = await Registration.find()
//       .populate('user', 'name email')
//       .populate('event', 'title date');

//     res.status(200).json(registrations);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to fetch all registrations' });
//   }
// };

// // @desc Get registrations for organizer's events
// // @route GET /api/registrations/organizer
// // @access Private (organizer)
// const getOrganizerRegistrations = async (req, res) => {
//   try {
//     const events = await Event.find({ createdBy: req.user._id }).select('_id');
//     const eventIds = events.map(event => event._id);

//     const registrations = await Registration.find({ event: { $in: eventIds } })
//       .populate('user', 'name email')
//       .populate('event', 'title date');

//     res.status(200).json(registrations);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to fetch organizer registrations' });
//   }
// };

// // @desc Get users registered for a specific event
// // @route GET /api/registrations/event/:id
// // @access Private (admin/organizer)
// const getUsersForEvent = async (req, res) => {
//   try {
//     const registrations = await Registration.find({ event: req.params.id })
//       .populate('user', 'name email');

//     res.status(200).json(registrations);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // @desc Cancel a registration
// // @route DELETE /api/registrations/:id
// // @access Private (student)
// const cancelRegistration = async (req, res) => {
//   try {
//     const registration = await Registration.findById(req.params.id);

//     if (!registration) {
//       return res.status(404).json({ message: 'Registration not found' });
//     }

//     if (registration.user.toString() !== req.user._id.toString()) {
//       return res.status(403).json({ message: 'Unauthorized' });
//     }

//     await registration.deleteOne();
//     res.status(200).json({ message: 'Registration cancelled successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// module.exports = {
//   registerUserForEvent,
//   getMyRegistrations,
//   getAllRegistrations,
//   getOrganizerRegistrations,
//   getUsersForEvent,
//   cancelRegistration
// };

// =======================================================================================================







const Registration = require('../models/Registration');
const Event = require('../models/Event');
const User = require('../models/User');



exports.registerUserForEvent = async (req, res) => {
  try {
    console.log('Register request body:', req.body);
    console.log('Auth user:', req.user && req.user._id);

    const user = req.user;
    if (!user) return res.status(401).json({ message: 'Not authenticated' });

    // Optional: only students allowed
    if (user.role && user.role !== 'student') {
      return res.status(403).json({ message: 'Access denied: insufficient permissions' });
    }

    const { eventId } = req.body;
    if (!eventId) return res.status(400).json({ message: 'Missing eventId' });

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const existing = await Registration.findOne({ event: eventId, user: user._id });
    if (existing) return res.status(400).json({ message: 'Already registered for this event' });

    const registration = new Registration({ event: eventId, user: user._id });
    await registration.save();

    // Optionally populate event details to return to frontend
    const populated = await registration.populate({ path: 'event', select: 'title date location' }).execPopulate?.() || await Registration.findById(registration._id).populate('event', 'title date location');

    res.status(201).json({ message: 'Registered successfully', registration: populated });
  } catch (error) {
    console.error('registerUserForEvent error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUserRegistrations = async (req, res) => {
  try {
    const user = req.user;
    if (!user) return res.status(401).json({ message: 'Not authenticated' });

    const regs = await Registration.find({ user: user._id })
      .populate('event', 'title date location description')
      .sort({ createdAt: -1 });

    res.json({ registrations: regs });
  } catch (error) {
    console.error('getUserRegistrations error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// exports.getParticipantsForOrganizer = async (req, res) => {

//   try {
//     const organizerId = req.user.id; // from authMiddleware

//     // Find events created by this organizer
//     const events = await Event.find({ organizer: organizerId }).select('_id');

//     console.log("Organizer from token:", organizerId);
//     console.log("Events found:", events);


//     if (!events.length) {
//       return res.status(200).json({ participants: [] });
//     }

//     const eventIds = events.map(event => event._id);

//     // Find registrations for these events and populate user and event
//     const registrations = await Registration.find({ event: { $in: eventIds } })
//       .populate('user', 'name email') // only fetch needed fields
//       .populate('event', 'title date');

//     res.status(200).json({ participants: registrations });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error fetching participants' });
//   }
// };



// exports.getParticipantsForOrganizer = async (req, res) => {
//   try {
//     const organizerId = req.user.id;
//     console.log("Organizer from token:", organizerId);

//     const events = await Event.find({ organizer: organizerId }).select('_id title');
//     console.log("Events found for organizer:", events);

//     if (!events.length) {
//       return res.status(200).json({ participants: [] });
//     }

//     const eventIds = events.map(event => event._id);

//     const registrations = await Registration.find({ event: { $in: eventIds } })
//       .populate('user', 'name email')
//       .populate('event', 'title date');

//     console.log("Registrations found:", registrations);

//     res.status(200).json({ participants: registrations });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error fetching participants' });
//   }
// };




// controllers/registrationController.js

// exports.getParticipantsByOrganizer = async (req, res) => {
//   try {
//     const organizerId = req.user._id; // assuming organizer is authenticated

//     const participants = await Registration.find()
//       .populate({
//         path: 'event',
//         match: { organizer: organizerId }, // only events created by this organizer
//         select: 'name date', // select fields from event
//       })
//       .populate({
//         path: 'user',
//         select: 'name email', // participant details
//       });

//     // Remove null events (because match can cause nulls)
//     const filtered = participants.filter(p => p.event !== null);

//     res.status(200).json(filtered);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// controllers/registrationController.js


// exports.getParticipantsByOrganizer = async (req, res) => {
//   try {
//     const organizerId = req.user._id; // logged-in organizer's ID

//     const participants = await Registration.aggregate([
//       // Join registrations → events
//       {
//         $lookup: {
//           from: 'events',
//           localField: 'event',
//           foreignField: '_id',
//           as: 'eventData'
//         }
//       },
//       { $unwind: '$eventData' },

//       // Filter only events created by current organizer
//       {
//         $match: {
//           'eventData.organizer': new mongoose.Types.ObjectId(organizerId)
//         }
//       },

//       // Join → users (participants)
//       {
//         $lookup: {
//           from: 'users',
//           localField: 'user',
//           foreignField: '_id',
//           as: 'userData'
//         }
//       },
//       { $unwind: '$userData' },

//       // Select only fields you need
//       {
//         $project: {
//           _id: 0,
//           participantName: '$userData.name',
//           participantEmail: '$userData.email',
//           eventName: '$eventData.name',
//           eventDate: '$eventData.date'
//         }
//       }
//     ]);

//     res.status(200).json(participants);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };






// exports.getOrganizerParticipants = async (req, res) => {
//   try {
//     // Organizer ID from logged-in user (JWT)
//     const organizerId = req.user._id; // make sure protect middleware sets req.user

//     const participants = await Registration.aggregate([
//       {
//         $lookup: {
//           from: "events",
//           localField: "event",
//           foreignField: "_id",
//           as: "event"
//         }
//       },
//       { $unwind: "$event" },
//       {
//         $lookup: {
//           from: "users",
//           localField: "user",
//           foreignField: "_id",
//           as: "user"
//         }
//       },
//       { $unwind: "$user" },
//       {
//         $match: {
//           "event.createdBy": new mongoose.Types.ObjectId(organizerId)
//         }
//       },
//       {
//         $project: {
//           _id: 1,
//           "user.name": 1,
//           "user.email": 1,
//           "event.title": 1,
//           "event.date": 1,
//           createdAt: 1
//         }
//       }
//     ]);

//     res.json({ participants });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };






// exports.getOrganizerParticipants = async (req, res) => {
//   try {
//     const organizerId = req.user?._id;
//     if (!organizerId) {
//       return res.status(400).json({ participants: [], message: "Organizer ID missing" });
//     }

//     const participants = await Registration.aggregate([
//       {
//         $lookup: {
//           from: "events",
//           localField: "event",
//           foreignField: "_id",
//           as: "event"
//         }
//       },
//       { $unwind: "$event" },
//       {
//         $lookup: {
//           from: "users",
//           localField: "user",
//           foreignField: "_id",
//           as: "user"
//         }
//       },
//       { $unwind: "$user" },
//       {
//         $match: {
//           "event.createdBy": new mongoose.Types.ObjectId(organizerId)
//         }
//       },
//       {
//         $project: {
//           _id: 1,
//           "user.name": 1,
//           "user.email": 1,
//           "event.title": 1,
//           "event.date": 1,
//           createdAt: 1
//         }
//       }
//     ]);

//     res.json({ participants: participants || [] }); // ✅ always array
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ participants: [], message: "Server error" });
//   }
// };





// exports.getParticipantsByOrganizer = async (req, res) => {
//   try {
//     const organizerId = req.user._id; // from auth middleware

//     const participants = await Registration.aggregate([
//       // Step 1: Join with events
//       {
//         $lookup: {
//           from: "events",
//           localField: "event",
//           foreignField: "_id",
//           as: "event"
//         }
//       },
//       { $unwind: "$event" },

//       // Step 2: Join with users
//       {
//         $lookup: {
//           from: "users",
//           localField: "user",
//           foreignField: "_id",
//           as: "user"
//         }
//       },
//       { $unwind: "$user" },

//       // Step 3: Match only events created by this organizer
//       {
//         $match: {
//           $expr: {
//             $or: [
//               { $eq: ["$event.createdBy", mongoose.Types.ObjectId(organizerId)] },
//               { $eq: ["$event.createdBy", organizerId.toString()] }
//             ]
//           }
//         }
//       },

//       // Step 4: Select only needed fields
//       {
//         $project: {
//           _id: 1,
//           "user.name": 1,
//           "user.email": 1,
//           "event.title": 1,
//           "event.date": 1,
//           createdAt: 1
//         }
//       }
//     ]);

//     res.status(200).json({ participants });
//   } catch (error) {
//     console.error("Error fetching participants:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };




// export const getParticipantsByOrganizer = async (req, res) => {
//   try {
//     const organizerId = req.user._id;

//     // Find events created by this organizer
//     const events = await Event.find({ organizerId }).select("_id name");

//     if (!events.length) {
//       return res.status(200).json([]);
//     }

//     const eventIds = events.map(e => e._id);

//     // Find participants registered for those events
//     const registrations = await Registration.find({ eventId: { $in: eventIds } })
//       .populate("userId", "name email")
//       .populate("eventId", "name date");

//     res.status(200).json(registrations);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error fetching participants" });
//   }
// };

// Get registrations count per event for an organizer
exports.getRegistrationsPerEvent = async (req, res) => {
  try {
    const organizerId = req.user._id; // assuming authMiddleware attaches organizer
    const result = await Registration.aggregate([
      {
        $lookup: {
          from: "events",
          localField: "event",
          foreignField: "_id",
          as: "eventDetails",
        },
      },
      { $unwind: "$eventDetails" },
      { $match: { "eventDetails.organizer": organizerId } },
      {
        $group: {
          _id: "$eventDetails._id",
          title: { $first: "$eventDetails.title" },
          count: { $sum: 1 },
        },
      },
    ]);

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
