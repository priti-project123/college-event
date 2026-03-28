// // controllers/authController.js
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// // Generate JWT token
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d',
//   });
// };

// // @desc    Register new user
// // @route   POST /api/auth/register
// // @access  Public
// const registerUser = async (req, res) => {
//   const { name, email, password, role } = req.body;

//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       role: role || 'user'
//     });

//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       token: generateToken(user._id)
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // @desc    Login user
// // @route   POST /api/auth/login
// // @access  Public
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       token: generateToken(user._id)
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // @desc    Get user profile
// // @route   GET /api/auth/profile
// // @access  Private
// const getUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// module.exports = {
//   registerUser,
//   loginUser,
//   getUserProfile
// };




// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// // Generate JWT token
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d',
//   });
// };

// // @desc    Register new user
// // @route   POST /api/auth/register
// // @access  Public
// // const registerUser = async (req, res) => {
// //   const { name, email, password, role } = req.body;

// //   if (!name || !email || !password || !role) {
// //     return res.status(400).json({ message: 'All fields are required' });
// //   }

// //   try {
// //     const userExists = await User.findOne({ email });
// //     if (userExists) {
// //       return res.status(400).json({ message: 'User already exists' });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const user = await User.create({
// //       name,
// //       email,
// //       password: hashedPassword,
// //       role: role || 'Student',
// //     });

// //     res.status(201).json({
// //       _id: user._id,
// //       name: user.name,
// //       email: user.email,
// //       role: user.role,
// //       token: generateToken(user._id),
// //     });
// //   } catch (err) {
// //     console.error('Register Error:', err);
// //     res.status(500).json({ message: 'Something went wrong during registration' });
// //   }
// // };




// const registerUser = async (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password || !role) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const user = new User({
//       name,
//       email,
//       password, // ✅ plain password; will be hashed by pre-save hook in model
//       role: role || 'student',
//     });

//     await user.save(); // model handles hashing

//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       token: generateToken(user._id),
//     });
//   } catch (err) {
//     console.error('Register Error:', err);
//     res.status(500).json({ message: 'Something went wrong during registration' });
//   }
// };


// // @desc    Login user
// // @route   POST /api/auth/login
// // @access  Public
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   console.log('Login request:', email, password); // debug

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log('User not found');
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       console.log('Password mismatch');
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       token: generateToken(user._id),
//     });
//   } catch (err) {
//     console.error('Login Error:', err);
//     res.status(500).json({ message: 'Something went wrong during login' });
//   }
// };


// // @desc    Get user profile
// // @route   GET /api/auth/profile
// // @access  Private
// const getUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     res.json(user);
//   } catch (err) {
//     console.error('Profile Error:', err);
//     res.status(500).json({ message: 'Failed to fetch profile' });
//   }
// };

// module.exports = {
//   registerUser,
//   loginUser,
//   getUserProfile,
// };




const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
// const registerUser = async (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password || !role) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       role: role || 'student',
//     });

//     res.status(201).json({
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//       token: generateToken(user._id),
//     });
//   } catch (err) {
//     console.error('Register Error:', err);
//     res.status(500).json({ message: 'Something went wrong during registration' });
//   }
// };

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    // ❌ DON'T hash manually here — your model handles it
    const user = new User({
      name,
      email,
      password, // plain text; model will hash it
      role: role || 'student',
    });

    await user.save();

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (err) {
    console.error('Register Error:', err);
    res.status(500).json({ message: 'Something went wrong during registration' });
  }
};


// @desc    Login user
// @route   POST /api/auth/login
// @access  Public

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     res.json({
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//       token: generateToken(user._id),
//     });
//   } catch (err) {
//     console.error('Login Error:', err);
//     res.status(500).json({ message: 'Something went wrong during login' });
//   }
// };



// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   console.log('Login request received:', email, password); // ✅ DEBUG

//   try {
//     const user = await User.findOne({ email });
//     console.log("User from DB:", user); // ✅ DEBUG

//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     console.log("Password match:", isMatch); // ✅ DEBUG

//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       token: generateToken(user._id),
//     });
//   } catch (err) {
//     console.error('Login Error:', err);
//     res.status(500).json({ message: 'Something went wrong during login' });
//   }
// };


const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request received:', email, password); // ✅ DEBUG

  try {
    const user = await User.findOne({ email });
    console.log("User from DB:", user); // ✅ DEBUG

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // ✅ Use the instance method from the User model
    const isMatch = await user.matchPassword(password);
    console.log("Password match:", isMatch); // ✅ DEBUG

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: 'Something went wrong during login' });
  }
};



// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    console.error('Profile Error:', err);
    res.status(500).json({ message: 'Failed to fetch profile' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
