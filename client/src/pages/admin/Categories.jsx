import { useEffect, useState } from "react";
import { getAllCategories, createCategory, deleteCategory } from "../../services/categoryService";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (err) {
      console.error("Failed to load categories:", err);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategory.trim()) return;

    try {
      await createCategory({ name: newCategory.trim() });
      setNewCategory("");
      loadCategories();
    } catch (err) {
      console.error("Failed to add category:", err);
    }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;

    try {
      await deleteCategory(id);
      loadCategories();
    } catch (err) {
      console.error("Failed to delete category:", err);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Event Categories</h2>

      <form onSubmit={handleAddCategory} className="flex gap-2 mb-6">
        <input
          type="text"
          className="border rounded px-4 py-2 w-full"
          placeholder="Enter new category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      <div className="bg-white shadow rounded p-4">
        {categories.length === 0 ? (
          <p className="text-gray-500">No categories found.</p>
        ) : (
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li
                key={cat.id}
                className="border-b py-2 flex justify-between items-center"
              >
                <span className="text-gray-800 font-medium">{cat.name}</span>
                <button
                  onClick={() => handleDeleteCategory(cat.id)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
