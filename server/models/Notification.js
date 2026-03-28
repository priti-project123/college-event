// const mongoose = require('mongoose');

// const notificationSchema = new mongoose.Schema({
//   message: {
//     type: String,
//     required: true,
//   },
//   read: {
//     type: Boolean,
//     default: false,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('Notification', notificationSchema);


const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  isRead: {
    type: Boolean,
    default: false
  }
}, { timestamps: true }); // automatically adds createdAt & updatedAt

module.exports = mongoose.model('Notification', notificationSchema);
