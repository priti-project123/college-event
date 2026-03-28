import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const RegistrationsPerEvent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:5000/api/registrations-per-event",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(res.data);
      } catch (error) {
        console.error("Error fetching registration stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
        Registrations Per Event
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="eventName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#4f46e5" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RegistrationsPerEvent;
