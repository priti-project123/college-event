const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const connectDB = require('../config/db');

dotenv.config();
connectDB();

const seedUsers = async () => {
  try {
    await User.deleteMany({ role: 'user' }); // Optional: Remove only users with 'user' role

    const users = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: await bcrypt.hash('Password123', 10),
        role: 'user',
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: await bcrypt.hash('Password123', 10),
        role: 'user',
      },
      {
        name: 'Event Organizer',
        email: 'organizer@example.com',
        password: await bcrypt.hash('Organizer123', 10),
        role: 'organizer',
      },
    ];

    await User.insertMany(users);
    console.log('✅ Users seeded successfully');
    process.exit();
  } catch (error) {
    console.error('❌ Failed to seed users:', error.message);
    process.exit(1);
  }
};

seedUsers();
