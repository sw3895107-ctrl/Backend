const express = require('express');
const cors = require('cors');
const stories = require('./stories');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Get all stories or filter by category
app.get('/stories', (req, res) => {
  const { cat } = req.query;
  if (cat) {
    const filtered = stories.filter(s => s.cat.toLowerCase() === cat.toLowerCase());
    return res.json(filtered);
  }
  res.json(stories);
});

// Get single story by ID
app.get('/stories/:id', (req, res) => {
  const story = stories.find(s => s.id === parseInt(req.params.id));
  if (!story) return res.status(404).json({ message: 'Story not found' });
  res.json(story);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
