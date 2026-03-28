// src/components/modals/EditEventModal.jsx
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

const EditEventModal = ({ isOpen, onClose, event, onSave }) => {
  const [form, setForm] = useState(event || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />

        <form
          onSubmit={handleSubmit}
          className="relative bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl z-50 space-y-4"
        >
          <button
            onClick={onClose}
            type="button"
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>

          <Dialog.Title className="text-xl font-bold">Edit Event</Dialog.Title>

          <input
            type="text"
            name="title"
            value={form.title || ''}
            onChange={handleChange}
            placeholder="Event Title"
            className="w-full border rounded px-3 py-2"
          />

          <input
            type="date"
            name="date"
            value={form.date || ''}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />

          <input
            type="text"
            name="location"
            value={form.location || ''}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border rounded px-3 py-2"
          />

          <textarea
            name="description"
            value={form.description || ''}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border rounded px-3 py-2"
          />

          <input
            type="text"
            name="category"
            value={form.category || ''}
            onChange={handleChange}
            placeholder="Category"
            className="w-full border rounded px-3 py-2"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default EditEventModal;