const { query } = require('express');
const db = require('./db');

// Fetch all stones
const getStones = async (req, res) => {
  const { type } = req.query;
  try{
    let query = 'SELECT * FROM stone';
    const params = [];
    if (type) {
      query += ' WHERE type = ?';
      params.push(type);
    }
    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stones' });
  }
};

// Add a new stone
const addStone = async (req, res) => {
  const { code, type, size, shape } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO stone (code, type, size, shape) VALUES (?, ?, ?, ?)',
      [code, type, size, shape]
    );
    res.json({ id: result.insertId, code, type, size, shape });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add stone' });
  }
};

module.exports = { getStones, addStone };
