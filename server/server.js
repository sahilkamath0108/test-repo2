const express = require('express');
const movieRoutes = require('./routes/movieRoutes'); // Import the new routes

const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// A simple root message
app.get('/', (req, res) => {
  res.send('Welcome to the Netflix Clone Backend!');
});

// Use the movie routes for any path starting with /api/movies
app.use('/api/movies', movieRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
