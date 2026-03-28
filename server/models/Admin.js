// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const adminSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   role: {
//     type: String,
//     default: 'admin'
//   }
// });

// // Hash password before saving
// adminSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Compare password
// adminSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// module.exports = mongoose.model('Admin', adminSchema);




// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs'); // use bcryptjs for better compatibility

// const adminSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   role: {
//     type: String,
//     default: 'admin'
//   }
// });

// // Pre-save hook to hash password
// adminSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Method to compare entered password with hashed password
// adminSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// module.exports = mongoose.model('Admin', adminSchema);



// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs'); // use bcryptjs for compatibility

// const adminSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   role: {
//     type: String,
//     default: 'admin'
//   }
// });

// // // Hash password before saving, but only if it’s not already hashed
// // adminSchema.pre('save', async function (next) {
// //   if (!this.isModified('password')) return next();

// //   const password = this.password;

// //   // If already hashed (starts with $2), skip hashing again
// //   if (password.startsWith('$2a$') || password.startsWith('$2b$')) {
// //     return next();
// //   }

// //   const salt = await bcrypt.genSalt(10);
// //   this.password = await bcrypt.hash(password, salt);
// //   next();
// // });

// // // Password comparison method
// // adminSchema.methods.matchPassword = async function (enteredPassword) {
// //   return await bcrypt.compare(enteredPassword, this.password);
// // };


// // adminSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();

//   const password = this.password;

//   // If already hashed (starts with $2), skip hashing again
//   if (password.startsWith('$2a$') || password.startsWith('$2b$')) {
//     return next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(password, salt);
//   next();
// // });

// module.exports = mongoose.model('Admin', adminSchema);


// const mongoose = require('mongoose');

// const adminSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, default: 'admin' }
// });

// module.exports = mongoose.model('Admin', adminSchema);



// models/Admin.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' }
});

// 🔐 Add this middleware to hash password before saving
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Skip if password is unchanged
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('Admin', adminSchema);
