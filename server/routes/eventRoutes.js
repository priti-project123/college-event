// // server/routes/eventRoutes.js
// const express = require('express');
// const router = express.Router();
// const upload = require('../middleware/upload');
// const Event = require('../models/Event'); // Make sure the path is correct
// const {
//   createEvent,
//   getAllEvents,
//   getEventById,
//   updateEvent,
//   deleteEvent,
// } = require('../controllers/eventController');

// const protect = require('../middleware/authMiddleware');
// const { checkRole } = require('../middleware/roleMiddleware');



// //dashboard
// router.get('/', async (req, res) => {
//   try {
//     const events = await Event.find().sort({ date: -1 });
//     res.json(events);
//   } catch (err) {
//     console.error('Error fetching events:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });


// // @route   GET /api/events
// // @desc    Get all events
// // @access  Public
// router.get('/', getAllEvents);

// // @route   GET /api/events/:id
// // @desc    Get single event by ID
// // @access  Public
// router.get('/:id', getEventById);

// // @route   POST /api/events
// // @desc    Create a new event
// // @access  Admin/Organizer
// router.post('/', protect, checkRole(['admin', 'organizer']), upload.single('poster'), createEvent);

// // @route   PUT /api/events/:id
// // @desc    Update event
// // @access  Admin/Organizer
// router.put('/:id', protect, checkRole(['admin', 'organizer']), upload.single('poster'), updateEvent);

// // @route   DELETE /api/events/:id
// // @desc    Delete event
// // @access  Admin/Organizer
// router.delete('/:id', protect, checkRole(['admin', 'organizer']), deleteEvent);

// module.exports = router;





// const express = require('express');
// const router = express.Router();
// const upload = require('../middleware/upload');
// const Event = require('../models/Event');
// const {
//   createEvent,
//   getAllEvents,
//   getEventById,
//   updateEvent,
//   deleteEvent,
// } = require('../controllers/eventController');

// const protect = require('../middleware/authMiddleware');
// const { checkRole } = require('../middleware/roleMiddleware');

// // ✅ Get all events (handled in controller)
// router.get('/', getAllEvents);

// // ✅ Get single event by ID
// router.get('/:id', getEventById);

// // ✅ Create new event (Admin/Organizer only)
// router.post(
//   '/',
//   protect,
//   checkRole(['admin', 'organizer']),
//   upload.single('image'), 
//   createEvent
// );


// // ✅ Update event
// router.put(
//   '/:id',
//   protect,
//   checkRole(['admin', 'organizer']),
//   upload.single('poster'),
//   updateEvent
// );

// // ✅ Delete event
// router.delete(
//   '/:id',
//   protect,
//   checkRole(['admin', 'organizer']),
//   deleteEvent
// );

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// const upload = require('../middleware/upload');
// const {
//   createEvent,
//   getAllEvents,
//   getEventById,
//   updateEvent,
//   deleteEvent,
// } = require('../controllers/eventController');

// const protect = require('../middleware/authMiddleware');
// const { checkRole } = require('../middleware/roleMiddleware');

// // ✅ GET all events
// router.get('/', getAllEvents);

// //craeted by organizer (logged in)
// router.get('/my-events', protect, checkRole(['organizer', 'admin']), getEventsByCreator);


// // ✅ GET single event
// router.get('/:id', getEventById);

// // ✅ CREATE event
// router.post(
//   '/',
//   protect,
//   checkRole(['admin', 'organizer']),
//   upload.single('image'), // ✅ should match frontend
//   createEvent
// );

// // ✅ UPDATE event
// router.put(
//   '/:id',
//   protect,
//   checkRole(['admin', 'organizer']),
//   upload.single('image'), // ✅ should also be 'image'
//   updateEvent
// );

// // ✅ DELETE event
// router.delete(
//   '/:id',
//   protect,
//   checkRole(['admin', 'organizer']),
//   deleteEvent
// );

// module.exports = router;




const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const eventController = require('../controllers/eventController');
const protect = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');
const Registration = require('../models/Registration');
const Event = require('../models/Event');

// 🟢 PUBLIC: Get approved events only
router.get('/public', eventController.getPublicEvents);

// 🔒 ORGANIZER: Get all my events (approved/rejected/pending)
router.get('/my-all', protect, checkRole(['organizer']), eventController.getMyAllEvents);

// 🔒 ORGANIZER/ADMIN: Get events created by me (already exists in your code)
router.get('/my-events', protect, checkRole(['organizer', 'admin']), eventController.getEventsByCreator);

// 🔒 ADMIN: View pending events
router.get('/pending', protect, checkRole(['admin']), eventController.getPendingEvents);

// 🔒 ADMIN: Approve/Reject event
router.put('/:id/status', protect, checkRole(['admin']), eventController.updateEventStatus);

// 🔓 PUBLIC: Get all events (likely for admin usage or debug)
router.get('/', eventController.getAllEvents);

// 🔓 PUBLIC: Get event by ID
router.get('/:id', eventController.getEventById);

// ✅ Get completed events with participant user data from Registration model
router.get('/completed', async (req, res) => {
  try {
    // Step 1: Get all completed events
    const completedEvents = await Event.find({ status: 'completed' });

    // Step 2: For each event, get participants from Registration model
    const eventsWithParticipants = await Promise.all(
      completedEvents.map(async (event) => {
        const registrations = await Registration.find({ event: event._id }).populate('user');

        return {
          ...event.toObject(),
          participants: registrations.map((reg) => reg.user), // just the user data
        };
      })
    );

    res.status(200).json(eventsWithParticipants);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching completed events', error: err.message });
  }
});

// 🔒 ORGANIZER/ADMIN: Create event
router.post(
  '/',
  protect,
  checkRole(['organizer', 'admin']),
  upload.single('image'),
  eventController.createEvent
);

// 🔒 ORGANIZER/ADMIN: Update event
router.put(
  '/:id',
  protect,
  checkRole(['organizer', 'admin']),
  upload.single('image'),
  eventController.updateEvent
);

// 🔒 ORGANIZER/ADMIN: Delete event
router.delete(
  '/:id',
  protect,
  checkRole(['organizer', 'admin']),
  eventController.deleteEvent
);

module.exports = router;
