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


// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World from Express.js!');
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });



// server/src/server.js
const express = require('express');
const next = require('next');        // ← no “.default” here
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;
const dev  = process.env.NODE_ENV !== 'production';

// point this at the folder containing your Next.js project (where package.json & next.config.js live)
const nextApp = next({
  dev,
  dir: path.join(__dirname, '../../client'),
});

const handle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(() => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    // any API routes you need
    app.get('/api', (req, res) => {
      res.json({ message: 'Hello from Express API' });
    });

    // serve your Next.js pages (including the “/” page)
    app.all('*', (req, res) => {
      return handle(req, res);
    });

    app.listen(port, () => {
      console.log(`✅ Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  });




