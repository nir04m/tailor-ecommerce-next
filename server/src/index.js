// server/src/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Your API route(s)
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express API' });
});

// Start the API server
app.listen(port, () => {
  console.log(`✅ API server running at http://localhost:${port}`);
});
