// // const express = require('express');
// // const dotenv = require('dotenv');
// // const connectDB = require('./config/db');
// // const cors = require('cors');

// // dotenv.config();
// // connectDB();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // Sample route
// // app.get('/', (req, res) => res.send('API is running...'));

// // // Import routes
// // app.use('/api/auth', require('./routes/authRoutes'));
// // app.use('/api/users', require('./routes/userRoutes'));
// // app.use('/api/events', require('./routes/eventRoutes'));

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));










// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const cors = require('cors');
// const morgan = require('morgan');
// const path = require('path');
// const errorHandler = require('./middleware/errorMiddleware');

// // Load environment variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // Parse JSON bodies
// app.use(morgan('dev'));  // Log HTTP requests

// // Static folder for uploads (optional)
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Route files
// const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');
// const eventRoutes = require('./routes/eventRoutes');
// const categoryRoutes = require('./routes/categoryRoutes');
// const registrationRoutes = require('./routes/registrationRoutes');


// const notificationRoutes = require('./routes/notificationRoutes.js');

// const adminRoutes = require('./routes/adminRoutes');



// //admin routes dashboard
// app.use('/api/admin', adminRoutes);

// //organizer routes 
// app.use('/api/users/organizers',userRoutes)
// app.use('api/users/organizers/:id',userRoutes)

// //notifications
// app.use('/api/notifications', notificationRoutes);

// //auth
// app.use('/api/auth/register',authRoutes)
// app.use('/api/auth/login',authRoutes)


// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/events', eventRoutes);
// app.use('/api/categories', categoryRoutes);
// app.use('/api/registrations', registrationRoutes);

// // Root route
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });





// // Global Error Handler (optional)
// app.use(errorHandler);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const errorHandler = require('./middleware/errorMiddleware');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();



// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
console.log("JWT_SECRET:", process.env.JWT_SECRET);

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route files
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userDashRoutes = require("./routes/userDashRoutes");

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});

// user dashboard rourtes
app.use("/api", userDashRoutes);

// organizer profile
app.use('/api/organizers', userRoutes);

//profile for organizer (update)
// app.use('/api/user', userRoutes);

// ✅ Admin dashboard
app.use('/api/admin', adminRoutes);
// admin reg
app.use('/api', require('./routes/auth'));

// admin routes
app.use('/api', adminRoutes);

// ✅ Auth routes (only once)
app.use('/api/auth', authRoutes); // ✅ CORRECT
app.use('/api', require('./routes/authRoutes'));


// ✅ Users
app.use('/api/users', userRoutes); // Includes organizers/users

// ✅ Events
app.use('/api/events', eventRoutes);

// update / fetach organizer
app.use('/api/organizer',userRoutes);


// ✅ Categories
app.use('/api/categories', categoryRoutes);

// ✅ Registrations
app.use('/api/registrations', registrationRoutes);

// ✅ Notifications
app.use('/api/notifications', notificationRoutes);


// Default Route
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// Global error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
