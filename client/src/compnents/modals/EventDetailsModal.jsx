// src/components/modals/EventDetailsModal.jsx
import React from 'react';
import { Dialog } from '@headlessui/react';
import { X, Pencil } from 'lucide-react';

const EventDetailsModal = ({ isOpen, onClose, event, onEdit }) => {
  if (!event) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />

        <div className="relative bg-white rounded-2xl p-6 w-full max-w-xl shadow-xl z-50">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>

          <Dialog.Title className="text-xl font-semibold mb-4 flex justify-between items-center">
            {event.title}
            <button onClick={() => onEdit(event)} className="text-blue-600 hover:underline text-sm flex items-center gap-1">
              <Pencil size={16} /> Edit
            </button>
          </Dialog.Title>

          <div className="space-y-2 text-gray-700">
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Organized by:</strong> {event.organizer}</p>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default EventDetailsModal;