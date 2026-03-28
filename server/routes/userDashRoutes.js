// routes/dashboardRoutes.js
const express = require("express");
const router = express.Router();

const {
  getStats,
  getRecentEvents,
  getChartData,
} = require("../controllers/userDashController");

router.get("/stats", getStats);
router.get("/recent-events", getRecentEvents);
router.get("/chart-data", getChartData);

module.exports = router;
