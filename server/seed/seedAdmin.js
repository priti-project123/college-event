
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const Admin = require('../models/Admin'); // Adjust the path

// mongoose.connect('mongodb://localhost:27017/College_Event_MS', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.once('open', async () => {
//   console.log('Connected to MongoDB');

//   try {
//     const hashedPassword = await bcrypt.hash('admin123', 10);
    
//     // Optional: Remove old admin accounts
//     await Admin.deleteMany({});

//     const admin = new Admin({
//       name: 'Super Admin',
//       email: 'admin@example.com',
//       password: hashedPassword,
//       role: 'admin',
//     });

//     await admin.save(); // Correct way
//     console.log('✅ Admin seeded successfully');
//   } catch (err) {
//     console.error('Error seeding admin:', err);
//   } finally {
//     mongoose.disconnect();
//   }
// });




// const mongoose = require('mongoose');
// const Admin = require('../models/Admin'); // Adjust the path if needed

// mongoose.connect('mongodb://localhost:27017/College_Event_MS', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.once('open', async () => {
//   console.log('Connected to MongoDB');

//   try {
//     await Admin.deleteMany({}); // Clear old data

//     const admin = new Admin({
//       name: 'Super Admin',
//       email: 'admin@example.com',
//       password: 'admin123', // Plain text; will be hashed in pre-save
//       role: 'admin',
//     });

//     await admin.save();
//     console.log('✅ Admin seeded successfully');
//   } catch (err) {
//     console.error('Error seeding admin:', err);
//   } finally {
//     mongoose.disconnect();
//   }
// });





const mongoose = require('mongoose');
const Admin = require('../models/Admin'); // Adjust the path
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/College_Event_MS')
  .then(async () => {
    const newAdmin = new Admin({
      name: 'Super Admin',
      email: 'admin@example.com',
      password: 'admin123', // plain password, will be hashed by hook
    });

    await newAdmin.save(); // 🔐 triggers hashing
    console.log('Admin created');
    process.exit();
  })
  .catch((err) => console.error(err));
