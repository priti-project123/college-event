// src/components/cards/EventCard.jsx
import React from 'react';

const EventCard = ({ event, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow p-4 hover:shadow-md transition cursor-pointer mb-4"
      onClick={onClick}
    >
      {/* Image at the top (if available) */}
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="rounded w-full h-60 object-cover mb-4"
        />
      )}

      {/* Title */}
      <h2 className="text-xl font-semibold text-blue-600">{event.title}</h2>

      {/* Description */}
      <p className="text-gray-600 mt-1 text-sm">{event.description}</p>

      {/* Date and Venue/Location */}
      <div className="text-sm text-gray-500 mt-2">
        <p>Date: {new Date(event.date).toLocaleDateString()}</p>
        <p>{event.venue ? `Venue: ${event.venue}` : `Location: ${event.location}`}</p>
      </div>
    </div>
  );
};

export default EventCard;
