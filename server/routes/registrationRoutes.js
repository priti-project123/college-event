// const express = require('express');
// const router = express.Router();
// const registrationController = require('../controllers/registrationController');
// const {
//   registerForEvent,
//   getMyRegistrations,
//   getAllRegistrations,
//   getOrganizerRegistrations,
// } = require('../controllers/registrationController');

// const protect = require('../middleware/authMiddleware');
// const {checkRole} = require('../middleware/roleMiddleware');







// // @route   POST /api/registrations
// // @desc    Register for an event
// router.post('/', protect, checkRole(['user']), registerForEvent);

// // @route   GET /api/registrations/my
// // @desc    Get user's registrations
// router.get('/my', protect, checkRole(['user']), getMyRegistrations);

// // @route   GET /api/registrations
// // @desc    Get all registrations (admin)
// router.get('/', protect, checkRole(['admin']), getAllRegistrations);

// // @route   GET /api/registrations/organizer
// // @desc    Get registrations for events created by organizer
// router.get('/organizer', protect, checkRole(['organizer']), getOrganizerRegistrations);
// router.get('/event/:id', registrationController.getUsersForEvent);
// router.get('/user/:id', registrationController.getEventsForUser);
// module.exports = router;





// const express = require('express');
// const router = express.Router();
// const {
//   registerForEvent,
//   getMyRegistrations,
//   getAllRegistrations,
//   getOrganizerRegistrations,
//   getUsersForEvent,
//   getEventsForUser,
//   registerUserForEvent
// } = require('../controllers/registrationController');

// const protect = require('../middleware/authMiddleware');
// const { checkRole } = require('../middleware/roleMiddleware');

// // Routes for Users
// router.post('/', protect, checkRole(['user']), registerForEvent);
// router.get('/my', protect, checkRole(['user']), getMyRegistrations);
// router.post('/registrations', protect, checkRole(['user']), registerUserForEvent);

// // Routes for Admin
// router.get('/', protect, checkRole(['admin']), getAllRegistrations);
// router.get('/user/:id', protect, checkRole(['admin', 'organizer']), getEventsForUser);

// // Routes for Organizers
// router.get('/organizer', protect, checkRole(['organizer']), getOrganizerRegistrations);
// router.get('/event/:id', protect, checkRole(['admin', 'organizer']), getUsersForEvent);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const {
//   registerUserForEvent,
//   getMyRegistrations,
//   getAllRegistrations,
//   getOrganizerRegistrations,
//   getUsersForEvent,
//   getEventsForUser,
// } = require('../controllers/registrationController');



// const protect = require('../middleware/authMiddleware');
// const { checkRole } = require('../middleware/roleMiddleware');

// // Routes for Users
// // router.post('/', protect, checkRole(['user']), registerUserForEvent);
// router.post('/', protect, registerUserForEvent);
// router.get('/my', protect, checkRole(['user']), getMyRegistrations);

// // Routes for Admin
// router.get('/', protect, checkRole(['admin']), getAllRegistrations);
// router.get('/user/:id', protect, checkRole(['admin', 'organizer']), getEventsForUser);

// // Routes for Organizers
// router.get('/organizer', protect, checkRole(['organizer']), getOrganizerRegistrations);
// router.get('/event/:id', protect, checkRole(['admin', 'organizer']), getUsersForEvent);



// // Cancel a registration by ID (only for that user)
// // router.delete('/:id', protect, checkRole(['student']), async (req, res) => {
// //   try {
// //     const registration = await Registration.findById(req.params.id);

// //     if (!registration) {
// //       return res.status(404).json({ message: 'Registration not found' });
// //     }

// //     // Only allow user to cancel their own registration
// //     if (registration.user.toString() !== req.user._id.toString()) {
// //       return res.status(403).json({ message: 'Unauthorized' });
// //     }

// //     await registration.deleteOne();
// //     res.json({ message: 'Registration cancelled successfully' });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Server error', error: error.message });
// //   }
// // });
// router.delete('/:registrationId', async (req, res) => {
//   const { registrationId } = req.params;
//   await Registration.findByIdAndDelete(registrationId);
//   res.status(200).json({ message: 'Registration cancelled' });
// });

// // get all events register by user
// router.get('/my-registrations', protect, async (req, res) => {
//   try {
//     const registrations = await Registration.find({ user: req.user._id })
//       .populate('event'); // This will fetch event details

//     res.status(200).json(registrations);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });




// module.exports = router;



// ========================================================================================================
// const express = require('express');
// const router = express.Router();
// const {
//   registerUserForEvent,
//   getMyRegistrations,
//   getAllRegistrations,
//   getOrganizerRegistrations,
//   getUsersForEvent,
//   cancelRegistration
// } = require('../controllers/registrationController');

// const protect = require('../middleware/authMiddleware');
// const { checkRole } = require('../middleware/roleMiddleware');

// // Student routes
// router.post('/', protect, checkRole(['student']), registerUserForEvent);
// router.get('/my', protect, checkRole(['student']), getMyRegistrations);
// router.delete('/:id', protect, checkRole(['student']), cancelRegistration);

// // Admin routes
// router.get('/', protect, checkRole(['admin']), getAllRegistrations);
// router.get('/event/:id', protect, checkRole(['admin', 'organizer']), getUsersForEvent);

// // Organizer routes
// router.get('/organizer', protect, checkRole(['organizer']), getOrganizerRegistrations);

// module.exports = router;
// ========================================================================================================





const express = require('express');
const mongoose = require("mongoose"); 
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const { registerUserForEvent, getUserRegistrations,getRegistrationsPerEvent  } = require('../controllers/registrationController');
const Registration = require("../models/Registration");
const Event = require("../models/Event");
const User = require("../models/User");
const { checkRole } = require('../middleware/roleMiddleware');



router.get("/by-organizer", async (req, res) => {
  try {
    const organizerId = req.user?._id || req.query.organizerId;
    if (!organizerId) {
      return res.status(400).json({ message: "Organizer ID required" });
    }

    console.log("👉 OrganizerId received:", organizerId);

    const data = await Registration.aggregate([
      {
        $lookup: {
          from: "events",
          localField: "event",
          foreignField: "_id",
          as: "event",
        },
      },
      { $unwind: "$event" },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $match: {
          "event.createdBy": mongoose.Types.ObjectId.isValid(organizerId)
            ? new mongoose.Types.ObjectId(organizerId)
            : organizerId, // fallback if stored as string
        },
      },
      {
        $project: {
          _id: 1,
          "user.name": 1,
          "user.email": 1,
          "event.title": 1,
          "event.date": 1,
          createdAt: 1,
        },
      },
    ]);

    console.log("👉 Participants query result:", data);
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching participants:", err);
    res.status(500).json({ message: "Server error" });
  }
});


router.post('/', protect, registerUserForEvent); // ✅ no ()
router.get('/mine', protect, getUserRegistrations);
router.get("/registrations-per-event", protect, checkRole("organizer"), getRegistrationsPerEvent);


// routes/registrations.js
router.delete('/:id', protect, async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    // Optional: Check if the current user owns it
    if (registration.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    // Instead of deleting, mark as canceled
    registration.status = 'canceled';
    await registration.save();

    res.json({ message: 'Registration canceled', registration });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;
