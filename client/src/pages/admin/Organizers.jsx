import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Organizer = () => {
  const [organizers, setOrganizers] = useState([]);
  const [modalData, setModalData] = useState({ name: '', email: '', password: '' });
  const [editMode, setEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchOrganizers();
  }, []);

  const fetchOrganizers = async () => {
    try {
      const res = await axios.get('/api/users/organizers');
      setOrganizers(res.data);
    } catch (err) {
      console.error('Error fetching organizers:', err);
    }
  };

  const handleAddEditSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`/api/users/organizers/${selectedId}`, modalData);
      } else {
        await axios.post('/api/users/organizers', modalData);
      }
      setModalData({ name: '', email: '', password: '' });
      setShowModal(false);
      setEditMode(false);
      fetchOrganizers();
    } catch (err) {
      console.error('Save failed:', err.response?.data || err.message);
    }
  };

  const handleEdit = (organizer) => {
    setEditMode(true);
    setModalData({ name: organizer.name, email: organizer.email, password: '' });
    setSelectedId(organizer._id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this organizer?')) {
      try {
        await axios.delete(`/api/users/organizers/${id}`);
        fetchOrganizers();
      } catch (err) {
        console.error('Delete failed:', err);
      }
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Organizers</h2>
        <button
          onClick={() => {
            setShowModal(true);
            setEditMode(false);
            setModalData({ name: '', email: '', password: '' });
          }}
          className="bg-green-600 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-green-700"
        >
          <FaUserPlus /> <span>Add Organizer</span>
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {organizers.length > 0 ? (
              organizers.map((user) => (
                <tr key={user._id} className="border-t">
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4 capitalize">{user.role}</td>
                  <td className="px-6 py-4 space-x-3">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-yellow-600 hover:text-yellow-800"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                  No organizers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {editMode ? 'Edit Organizer' : 'Add New Organizer'}
            </h3>
            <form onSubmit={handleAddEditSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={modalData.name}
                onChange={(e) => setModalData({ ...modalData, name: e.target.value })}
                required
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={modalData.email}
                onChange={(e) => setModalData({ ...modalData, email: e.target.value })}
                required
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="password"
                placeholder={editMode ? 'New Password (optional)' : 'Password'}
                value={modalData.password}
                onChange={(e) => setModalData({ ...modalData, password: e.target.value })}
                className="w-full px-4 py-2 border rounded"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {editMode ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Organizer;
