// server.js
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();

app.use(bodyParser.json());

// Mock database
const users = [];

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  if (users.some(user => user.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user to "database"
  users.push({ username, email, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully' });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});