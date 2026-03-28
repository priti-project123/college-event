// const express = require('express');
// const router = express.Router();

// const {
//   getNotifications,
//   createNotification,
//   markAllAsRead,
// } = require('../controllers/notificationController');

// const protect = require('../middleware/authMiddleware'); // ✅ if you're using `module.exports = protect`


// router.get('/', protect, getNotifications);
// router.post('/', protect, createNotification);
// router.put('/mark-all-read', protect, markAllAsRead);

// module.exports = router;


// const express = require('express');
// const router = express.Router();

// const notificationController = require('../controllers/notificationController');

// const auth = require('../middleware/roleMiddleware'); // Using verifyUser from your custom auth middleware

// // ✅ Get all notifications for the logged-in user
// router.get('/', auth.verifyUser, notificationController.getMyNotifications);

// // ✅ Create a notification manually (optional, for testing or admin use)
// router.post('/', auth.verifyUser, notificationController.createNotification);

// // ✅ Mark all notifications as read
// router.put('/mark-all-read', auth.verifyUser, notificationController.markAllAsRead);

// module.exports = router;


const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const auth = require('../middleware/roleMiddleware');  // e.g. verifyUser

router.get('/', auth.verifyUser, notificationController.getMyNotifications);
router.post('/', auth.verifyUser, notificationController.createNotification);
router.put('/mark-all-read', auth.verifyUser, notificationController.markAllAsRead);

module.exports = router;
