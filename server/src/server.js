// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Tailor E-commerce API Running");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// server/src/server.js


const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve React frontend from client/build
app.use(express.static(path.join(__dirname, '../../client/build')));

// Fallback to React for all other routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;