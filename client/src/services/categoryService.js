// src/services/categoryService.js
import axiosInstance from './axiosInstance';

// Fetch all categories
export const getAllCategories = async () => {
  const res = await axiosInstance.get('/categories');
  return res.data;
};

// Create a new category
export const createCategory = async (categoryData) => {
  const res = await axiosInstance.post('/categories', categoryData);
  return res.data;
};

// Delete a category by ID
export const deleteCategory = async (id) => {
  const res = await axiosInstance.delete(`/categories/${id}`);
  return res.data;
};
