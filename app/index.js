const express = require("express");
const cors = require('cors');
const { getStones, addStone, test, testQuery } = require("./stoneController");
const corsOptions = {
  origin: '*', // Allow only this origin
  methods: 'GET',         // Allow only these HTTP methods
  allowedHeaders: ['Content-Type'], // Allow only specific headers
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.get("/stone/:style", getStones);
app.post("/stones", addStone);
app.get("/test", test);
app.get("/test/:style", testQuery);

// Start the server
const PORT = 3011;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
