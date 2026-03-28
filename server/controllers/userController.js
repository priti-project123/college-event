// const User = require('../models/User');

// // @desc    Get all users
// // @route   GET /api/users
// // @access  Admin only
// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find().select('-password');
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // @desc    Update user role
// // @route   PUT /api/users/:id/role
// // @access  Admin only
// const updateUserRole = async (req, res) => {
//   const { role } = req.body;

//   try {
//     const user = await User.findById(req.params.id);

//     if (!user) return res.status(404).json({ message: 'User not found' });

//     user.role = role || user.role;
//     await user.save();

//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // @desc    Delete a user
// // @route   DELETE /api/users/:id
// // @access  Admin only
// const deleteUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);

//     if (!user) return res.status(404).json({ message: 'User not found' });

//     await user.remove();
//     res.json({ message: 'User removed' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// module.exports = {
//   getAllUsers,
//   updateUserRole,
//   deleteUser,
// };



const User = require('../models/User');

// @desc    Get all users
// @route   GET /api/users
// @access  Admin only
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update user role
// @route   PUT /api/users/:id/role
// @access  Admin only
const updateUserRole = async (req, res) => {
  const { role } = req.body;

  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    user.role = role || user.role;
    await user.save();

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  Admin only
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.remove();
    res.json({ message: 'User removed' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ @desc    Get organizer profile
// ✅ @route   GET /api/organizer/profile
// ✅ @access  Organizer (protected)
// const getOrganizerProfile = async (req, res) => {
//   try {
//     const organizer = await User.findById(req.user._id).select('name role email');
//     console.log('Organizer:', organizer);

//     res.json(organizer);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to load profile' });
//   }
// };



// @desc    Get organizer profile
// @route   GET /api/organizer/profile
// @access  Private (Organizer)
const getOrganizerProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'Organizer not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update organizer profile
// @route   PUT /api/organizer/profile
// @access  Private (Organizer)
const updateOrganizerProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      req.body,
      { new: true }
    ).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile' });
  }
};

module.exports = {
  getAllUsers,
  updateUserRole,
  deleteUser,
  getOrganizerProfile,
  updateOrganizerProfile, 
};
