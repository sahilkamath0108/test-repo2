// server/index.js
const express = require('express');
const app = express();
const port = 5000; // You can choose any port

app.get('/', (req, res) => {
  res.send('Hello from the Netflix clone server!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});