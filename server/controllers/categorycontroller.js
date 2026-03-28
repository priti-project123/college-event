const Category = require('../models/Category');

// @desc    Create a new category
// @route   POST /api/categories
// @access  Admin only

const createCategory = async (req, res) => {
  // Validate category input
  const errors = validateCategory(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const { name } = req.body;

    const categoryExists = await Category.findOne({ name });
    if (categoryExists) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const category = new Category({ name });
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create category' });
  }
};

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
};

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Admin only
const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    await category.remove();
    res.json({ message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete category' });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  deleteCategory,
};
