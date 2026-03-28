// const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: String,
//   date: { type: Date, required: true },
//   location: String,
//   image: String,
//   category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
//   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   status: {
//     type: String,
//     enum: ['pending', 'approved', 'rejected'],
//     default: 'pending',
//   }
// }, { timestamps: true });

// module.exports = mongoose.model('Event', eventSchema);

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  time: { type: String },
  location: String,
  image: String,
  
  // Category can be a string or linked to a Category model later
  category: { type: String, required: true }, // or: ref: 'Category'

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  // NEW: Status for approval workflow
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
