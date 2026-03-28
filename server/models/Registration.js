// const mongoose = require('mongoose');

// const registrationSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
//   registeredAt: { type: Date, default: Date.now },
// });

// // Prevent duplicate registrations
// registrationSchema.index({ user: 1, event: 1 }, { unique: true });

// module.exports = mongoose.model('Registration', registrationSchema);




// const mongoose = require('mongoose');

// const registrationSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
//   registeredAt: { type: Date, default: Date.now },
// });

// // Prevent duplicate registrations
// registrationSchema.index({ user: 1, event: 1 }, { unique: true });

// module.exports = mongoose.model('Registration', registrationSchema);


// const mongoose = require('mongoose');

// const registrationSchema = new mongoose.Schema({
//   event: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Event',
//     required: true,
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   registeredAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('Registration', registrationSchema);



const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', registrationSchema);




// fetch partcipants
// db.registrations.aggregate([{$lookup:{from:"events",localField:"event",foreignField:"_id",as:"event"}},{$unwind:"$event"},{$lookup:{from:"users",localField:"user",foreignField:"_id",as:"user"}},{$unwind:"$user"},{$match:{"event.createdBy":ObjectId("6890ce161850f7671f66f058")}},{$project:{_id:1,"user.name":1,"user.email":1,"event.title":1,"event.date":1,createdAt:1}}]);
