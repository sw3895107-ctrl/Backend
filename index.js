const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Get all stories, filter by category or search term
app.get('/stories', (req, res) => {
  const { cat, search } = req.query;
  let results = stories;

  if (cat) {
    results = results.filter(s => s.cat.toLowerCase() === cat.toLowerCase());
  }

  if (search) {
    const term = search.toLowerCase();
    results = results.filter(
      s => s.title.toLowerCase().includes(term) || s.code.toLowerCase().includes(term)
    );
  }

  res.json(results);
});

// Get single story by ID
app.get('/stories/:id', (req, res) => {
  const story = stories.find(s => s.id === parseInt(req.params.id));
  if (!story) return res.status(404).json({ message: 'Story not found' });
  res.json(story);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
