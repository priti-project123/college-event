// // server/controllers/notificationController.js
// import Notification from '../models/Notification.js';

// export const getNotifications = async (req, res) => {
//   try {
//     const notifications = await Notification.find({ user: req.user._id }).sort({ createdAt: -1 });
//     res.json(notifications);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch notifications' });
//   }
// };

// export const createNotification = async (req, res) => {
//   try {
//     const notification = new Notification({ ...req.body, user: req.user._id });
//     await notification.save();
//     res.status(201).json(notification);
//   } catch (err) {
//     res.status(400).json({ error: 'Failed to create notification' });
//   }
// };

// export const markAllAsRead = async (req, res) => {
//   try {
//     await Notification.updateMany({ user: req.user._id, read: false }, { $set: { read: true } });
//     res.json({ message: 'All notifications marked as read' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to update notifications' });
//   }
// };


// const Notification = require('../models/Notification');

// // ✅ Get all notifications for the logged-in user
// const getMyNotifications = async (req, res) => {
//   try {
//     const notifications = await Notification.find({ user: req.user._id }).sort({ createdAt: -1 });
//     res.json(notifications);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch notifications' });
//   }
// };

// // ✅ Create a new notification (manually or from other actions)
// const createNotification = async (req, res) => {
//   try {
//     const notification = new Notification({
//       ...req.body,
//       user: req.user._id
//     });
//     await notification.save();
//     res.status(201).json(notification);
//   } catch (err) {
//     res.status(400).json({ error: 'Failed to create notification' });
//   }
// };

// // ✅ Mark all notifications as read
// const markAllAsRead = async (req, res) => {
//   try {
//     await Notification.updateMany(
//       { user: req.user._id, isRead: false },
//       { $set: { isRead: true } }
//     );
//     res.json({ message: 'All notifications marked as read' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to update notifications' });
//   }
// };

// module.exports = {
//   getMyNotifications,
//   createNotification,
//   markAllAsRead
// };


const Notification = require('../models/Notification');

// GET /api/notifications
const getMyNotifications = async (req, res) => {
  try {
    const notifications = await Notification
      .find({ user: req.user._id })
      .sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
};

// POST /api/notifications
const createNotification = async (req, res) => {
  try {
    const notification = new Notification({
      ...req.body,
      user: req.user._id
    });
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create notification' });
  }
};

// PUT /api/notifications/mark-all-read
const markAllAsRead = async (req, res) => {
  try {
    await Notification.updateMany(
      { user: req.user._id, isRead: false },
      { $set: { isRead: true } }
    );
    res.json({ message: 'All notifications marked as read' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to mark notifications' });
  }
};

module.exports = {
  getMyNotifications,
  createNotification,
  markAllAsRead
};
