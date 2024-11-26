const { query } = require("express");
const db = require("./db");

// Fetch all stones
const getStones = async (req, res) => {
  const { style } = req.query;
  try {
    let query =
      "SELECT mp.id, mp.style_no, msi.id as msi_id, msi.diamond_id, msi.color,msi.quantity, msi.setting_level, mds.kode, mds.id as mds_id, mds.shape, mds.size, mds.weight FROM master_product mp JOIN master_stone_info msi ON msi.product_id=mp.id JOIN master_diamond_size mds ON msi.diamond_id = mds.id";
    const params = [];
    if (style) {
      // WHERE mp.style_no LIKE 'K0022E01%'
      style = `${style}`;
      query += " WHERE mp.style_no = ?";
      params.push(style);
    }
    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stones" });
  }
};

// Add a new stone
const addStone = async (req, res) => {
  const { code, type, size, shape } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO stone (code, type, size, shape) VALUES (?, ?, ?, ?)",
      [code, type, size, shape]
    );
    res.json({ id: result.insertId, code, type, size, shape });
  } catch (err) {
    res.status(500).json({ error: "Failed to add stone" });
  }
};

// Test Stone
const test = async (req, res) => {
  try {
    let query = "SELECT * FROM master_stone_info LIMIT 50,125";
    const [rows] = await db.query(query);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stones" });
  }
  // res.json({ message: 'Test Success' });
};

// Test Query
const testQuery = async (req, res) => {
  const { style } = req.params;
  const { styles } = style + "%";
  res.json({ message: "Your request for ${styles}  is success" });
};

module.exports = { getStones, addStone, test, testQuery };
