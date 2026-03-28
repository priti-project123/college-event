


import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Participants = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        // decode token (check how you signed: id or _id)
        const decoded = jwtDecode(token);
        const organizerId = decoded._id || decoded.id;

        const res = await fetch(
          `http://localhost:5000/api/registrations/by-organizer?organizerId=${organizerId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            cache: "no-store", // ✅ correct placement (not inside headers)
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch participants");
        }

        const data = await res.json();
        console.log("👉 Participants Data:", data);
        setParticipants(data);
      } catch (err) {
        console.error("❌ Error fetching participants", err);
      }
    };

    fetchParticipants();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Participants</h2>
      {participants.length === 0 ? (
        <p>No participants found.</p>
      ) : (
        <ul className="space-y-2">
          {participants.map((p) => (
            <li
              key={p._id}
              className="border rounded-lg p-3 shadow-sm bg-white"
            >
              <div className="font-medium">
                {p.user?.name}{" "}
                <span className="text-gray-500">({p.user?.email})</span>
              </div>
              <div className="text-sm text-gray-600">
                Event: <strong>{p.event?.title}</strong> on{" "}
                {new Date(p.event?.date).toLocaleDateString()}
              </div>
              <div className="text-xs text-gray-400">
                Registered: {new Date(p.createdAt).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Participants;







