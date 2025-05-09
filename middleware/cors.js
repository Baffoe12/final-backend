const cors = require('cors');

const cors = require('cors');

const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? ['https://safedrive-pro.netlify.app']  // Updated to actual frontend domain
    : ['http://localhost:3000', 'http://localhost:3001'], // Allow both 3000 and 3001 for development
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

module.exports = cors(corsOptions);


module.exports = cors(corsOptions);