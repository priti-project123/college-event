// // controllers/adminController.js
// const Admin = require('../models/Admin');
// const jwt = require('jsonwebtoken');

// const generateToken = (id) => {
//   return jwt.sign({ id }, 'secretkey', { expiresIn: '7d' }); // replace secret key in production
// };

// exports.registerAdmin = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingAdmin = await Admin.findOne({ email: email.toLowerCase() });
//     if (existingAdmin) return res.status(400).json({ message: 'Admin already exists' });

//     const newAdmin = new Admin({ name, email: email.toLowerCase(), password });
//     await newAdmin.save();

//     res.status(201).json({ message: '✅ Admin registered successfully' });
//   } catch (err) {
//     res.status(500).json({ message: '❌ Error while registering admin' });
//   }
// };

// exports.loginAdmin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ email: email.toLowerCase() });
//     if (!admin) return res.status(401).json({ message: 'Invalid email or password' });

//     const isMatch = await admin.matchPassword(password);
//     if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });

//     const token = generateToken(admin._id);

//     res.status(200).json({
//       message: '✅ Login successful',
//       token,
//       user: {
//         id: admin._id,
//         name: admin.name,
//         email: admin.email,
//         role: admin.role
//       }
//     });
//   } catch (err) {
//     res.status(500).json({ message: '❌ Error while logging in' });
//   }
// };


const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// In production, use process.env.JWT_SECRET
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};



exports.registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: email.toLowerCase() });
    if (existingAdmin) {
      return res.status(400).json({ message: '❌ Admin already exists' });
    }

    // Create new admin
    const newAdmin = new Admin({
      name,
      email: email.toLowerCase(),
      password, // plain or already hashed — the model will handle it
    });

    await newAdmin.save(); // ✅ Model handles hashing if needed

    const token = generateToken(newAdmin._id);

    res.status(201).json({
      message: '✅ Admin registered successfully',
      token,
      user: {
        id: newAdmin._id,
        name: newAdmin.name,
        email: newAdmin.email,
        role: newAdmin.role,
      },
    });
  } catch (err) {
    console.error('Register error:', err.message);
    res.status(500).json({ message: '❌ Server error during admin registration' });
  }
};


exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email: email.toLowerCase() });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    res.status(200).json({
      token,
      user: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

