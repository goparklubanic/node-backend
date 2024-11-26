const express = require("express");
const { getStones, addStone, test, testQuery } = require("./stoneController");

const app = express();
app.use(express.json());

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
