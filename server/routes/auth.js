// // const express = require('express');
// // const bcrypt = require('bcryptjs');
// // const User = require('../models/User'); // adjust path if needed
// // const router = express.Router();

// // router.post('/register-admin', async (req, res) => {
// //   const { name, email, password } = req.body;

// //   try {
// //     // Check if user already exists
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: 'Admin already exists' });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const adminUser = new User({
// //       name,
// //       email,
// //       password: hashedPassword,
// //       role: 'admin',
// //       createdAt: new Date(),
// //       updatedAt: new Date()
// //     });

// //     await adminUser.save();
// //     res.status(201).json({ message: '✅ Admin registered successfully' });

// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ message: 'Something went wrong' });
// //   }
// // });

// // module.exports = router;


// const express = require('express');
// const bcrypt = require('bcryptjs');
// const User = require('../models/User'); // Adjust path if needed
// const router = express.Router();

// router.post('/register-admin', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // Basic validation
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     if (password.length < 6) {
//       return res.status(400).json({ message: 'Password must be at least 6 characters' });
//     }

//     const normalizedEmail = email.toLowerCase();

//     // Check if user already exists
//     const existingUser = await User.findOne({ email: normalizedEmail });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Admin already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const adminUser = new User({
//       name,
//       email: normalizedEmail,
//       password: hashedPassword,
//       role: 'admin',
//       createdAt: Date.now(),
//       updatedAt: Date.now()
//     });

//     await adminUser.save();
//     res.status(201).json({ message: '✅ Admin registered successfully' });

//   } catch (err) {
//     console.error('Admin registration error:', err);
//     res.status(500).json({ message: 'Something went wrong on the server' });
//   }
// });

// module.exports = router;






// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User'); // Adjust the path to your User model
// const router = express.Router();

// // ========================
// // 🚀 Admin Registration
// // ========================
// router.post('/register-admin', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // Validate input
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     if (password.length < 6) {
//       return res.status(400).json({ message: 'Password must be at least 6 characters' });
//     }

//     const normalizedEmail = email.toLowerCase();

//     // Check for existing admin
//     const existingUser = await User.findOne({ email: normalizedEmail });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Admin already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const adminUser = new User({
//       name,
//       email: normalizedEmail,
//       password: hashedPassword,
//       role: 'admin',
//       createdAt: Date.now(),
//       updatedAt: Date.now()
//     });

//     await adminUser.save();
//     res.status(201).json({ message: '✅ Admin registered successfully' });

//   } catch (err) {
//     console.error('Admin registration error:', err);
//     res.status(500).json({ message: 'Something went wrong on the server' });
//   }
// });

// // ========================
// // 🔐 Admin Login
// // ========================
// router.post('/login-admin', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     if (!email || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     const normalizedEmail = email.toLowerCase();
//     const user = await User.findOne({ email: normalizedEmail });

//     if (!user) {
//       return res.status(401).json({ message: 'No admin found with this email' });
//     }

//     if (user.role !== 'admin') {
//       return res.status(403).json({ message: 'User is not an admin' });
//     }

//     console.log('Entered password:', password);
//     console.log('Hashed password in DB:', user.password);

//     const isMatch = await bcrypt.compare(password, user.password);
//     console.log("ismatch :",isMatch)
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Incorrect password' });
//     }

//     // ✅ Token without expiration
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       'JWT_SECRET' // Don't use in production
//     );

//     // ✅ Return full user data
//     res.status(200).json({
//       message: '✅ Admin login successful',
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         createdAt: user.createdAt,
//         updatedAt: user.updatedAt
//       }
//     });

//   } catch (err) {
//     console.error('Admin login error:', err);
//     res.status(500).json({ message: 'Server error during login' });
//   }
// });

// module.exports = router;




const express = require('express');
const bcrypt = require('bcrypt'); // ✅ updated from bcryptjs to bcrypt
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // adjust path as needed
const router = express.Router();

// ========================
// 🚀 Admin Registration
// ========================
router.post('/register-admin', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    const normalizedEmail = email.toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // ✅ hash with bcrypt

    const adminUser = new User({
      name,
      email: normalizedEmail,
      password: hashedPassword,
      role: 'admin',
      createdAt: Date.now(),
      updatedAt: Date.now()
    });

    await adminUser.save();
    res.status(201).json({ message: '✅ Admin registered successfully' });

  } catch (err) {
    console.error('Admin registration error:', err);
    res.status(500).json({ message: 'Something went wrong on the server' });
  }
});

// ========================
// 🔐 Admin Login
// ========================
router.post('/login-admin', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const normalizedEmail = email.toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(401).json({ message: 'No admin found with this email' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'User is not an admin' });
    }

    console.log('Entered password:', password);
    console.log('Hashed password in DB:', user.password);

    const isMatch = await bcrypt.compare(password, user.password); // ✅ compare with bcrypt
    console.log("ismatch:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      'JWT_SECRET' // use process.env.JWT_SECRET in production
    );

    res.status(200).json({
      message: '✅ Admin login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    });

  } catch (err) {
    console.error('Admin login error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
});

module.exports = router;
