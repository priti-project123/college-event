// controllers/dashboardController.js
const Event = require("../models/Event");
const Registration = require("../models/Registration");

const getStats = async (req, res) => {
  try {
    const total = await Event.countDocuments();
    const registered = await Registration.countDocuments();
    const upcoming = await Event.countDocuments({ date: { $gte: new Date() } });
    const outdated = await Event.countDocuments({ date: { $lt: new Date() } });

    res.json({ total, registered, upcoming, outdated });
  } catch (err) {
    console.error("Error in getStats:", err);
    res.status(500).json({ message: "Failed to fetch stats" });
  }
};

const getRecentEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 }).limit(5); // Latest 5
    res.json(events);
  } catch (err) {
    console.error("Error in getRecentEvents:", err);
    res.status(500).json({ message: "Failed to fetch recent events" });
  }
};

const getChartData = async (req, res) => {
  try {
    const events = await Event.find().limit(5);

    const labels = [];
    const data = [];

    for (let event of events) {
      const count = await Registration.countDocuments({ eventId: event._id });
      labels.push(event.name);
      data.push(count);
    }

    res.json({
      labels,
      datasets: [
        {
          label: "Registrations",
          data,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    });
  } catch (err) {
    console.error("Error in getChartData:", err);
    res.status(500).json({ message: "Failed to fetch chart data" });
  }
};

module.exports = {
  getStats,
  getRecentEvents,
  getChartData,
};
