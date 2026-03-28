const express = require('express');
const router = express.Router();

const {
  createCategory,
  getAllCategories,
  deleteCategory,
} = require('../controllers/categoryController');

const protect = require('../middleware/authMiddleware');
const {checkRole} = require('../middleware/roleMiddleware');











// @route   GET /api/categories
// @desc    Get all categories
router.get('/', getAllCategories);

// @route   POST /api/categories
// @desc    Create a new category
// @access  Admin
router.post('/', protect, checkRole(['admin']), createCategory);

// @route   DELETE /api/categories/:id
// @desc    Delete category
// @access  Admin
router.delete('/:id', protect, checkRole(['admin']), deleteCategory);

module.exports = router;
