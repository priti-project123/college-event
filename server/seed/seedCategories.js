const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('../models/Category');
const connectDB = require('../config/db');

dotenv.config();
connectDB();

const seedCategories = async () => {
  try {
    const categories = [
      { name: 'Technical' },
      { name: 'Cultural' },
      { name: 'Sports' },
      { name: 'Workshop' },
    ];

    await Category.deleteMany(); // Clear existing
    await Category.insertMany(categories);

    console.log('✅ Categories seeded successfully');
    process.exit();
  } catch (error) {
    console.error('❌ Failed to seed categories:', error);
    process.exit(1);
  }
};

seedCategories();
