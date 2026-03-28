// // server/middleware/upload.js
// const multer = require('multer');
// const { v4: uuidv4 } = require('uuid');
// const cloudinary = require('../config/cloudinary');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// // Configure Cloudinary storage
// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: 'event-posters',
//     format: async (req, file) => 'png', // optional: jpg/png
//     public_id: (req, file) => uuidv4(),
//   },
// });

// const upload = multer({ storage });

// module.exports = upload;


// const multer = require('multer');
// const path = require('path');

// // Configure storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // make sure this folder exists
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = Date.now() + '-' + file.originalname;
//     cb(null, uniqueName);
//   }
// });

// const upload = multer({ storage });
// module.exports = upload;

// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');

// const uploadDir = path.join(__dirname, '../uploads');

// // 🔧 Ensure uploads/ folder exists
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir);
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + file.originalname.replace(/\s+/g, '_');
//     cb(null, uniqueSuffix);
//   },
// });

// const upload = multer({ storage });

// module.exports = upload;




const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'event_posters', // Your folder name in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png'],
    transformation: [{ width: 800, height: 600, crop: 'limit' }],
  },
});

const upload = multer({ storage });

module.exports = upload;
