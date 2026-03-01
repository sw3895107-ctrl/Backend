const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

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
}
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
