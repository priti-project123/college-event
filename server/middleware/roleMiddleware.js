// const checkRole = (allowedRoles) => {
//   return (req, res, next) => {
//     if (!req.user) {
//       return res.status(401).json({ message: 'Not authenticated' });
//     }

//     if (!allowedRoles.includes(req.user.role)) {
//       return res.status(403).json({ message: 'Access denied: insufficient permissions' });
//     }

//     next();
//   };
// };

// module.exports = { checkRole };

// // ✅ Middleware to check if user has one of the allowed roles
// const checkRole = (allowedRoles) => {
//   return (req, res, next) => {
//     if (!req.user) {
//       return res.status(401).json({ message: 'Not authenticated' });
//     }

//     if (!allowedRoles.includes(req.user.role)) {
//       return res.status(403).json({ message: 'Access denied: insufficient permissions' });
//     }

//     next();
//   };
// };

// module.exports = { checkRole };


const jwt = require('jsonwebtoken');
const User = require('../models/User');

// 🔐 General token verification and attach full user object
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) return res.status(404).json({ message: 'User not found' });

    req.user = user;
    next();
  } catch (error) {
    console.error('JWT error:', error.message);
    res.status(403).json({ message: 'Invalid token' });
  }
};

// ✅ Role-based check using checkRole
const checkRole = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied: insufficient permissions' });
    }

    next();
  };
};

// ✅ Alternative quick middlewares
const verifyAdmin = [verifyToken, checkRole(['admin'])];
const verifyOrganizer = [verifyToken, checkRole(['organizer'])];
const verifyUser = [verifyToken, checkRole(['user', 'admin', 'organizer'])]; // allows all

module.exports = {
  verifyToken,
  verifyAdmin,
  verifyOrganizer,
  verifyUser,
  checkRole
};
