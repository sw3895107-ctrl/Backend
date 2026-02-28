const express = require('express');
const cors = require('cors');
const stories = require('./stories');

const app = express();
const PORT = process.env.PORT || 3000;

// Allow frontend to fetch
app.use(cors());

// API route to get all stories
app.get('/stories', (req, res) => {
  res.json(stories);
});

// Optional: fetch single story by ID
app.get('/stories/:id', (req, res) => {
  const story = stories.find(s => s.id === parseInt(req.params.id));
  if (!story) return res.status(404).json({ message: 'Story not found' });
  res.json(story);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
