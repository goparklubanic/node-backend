const express = require('express');
const { getStones, addStone } = require('./stoneController');

const app = express();
app.use(express.json());

// Routes
app.get('/stones', getStones);
app.post('/stones', addStone);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
