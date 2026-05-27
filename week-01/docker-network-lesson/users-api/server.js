const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);
});

app.listen(PORT, () => {
  console.log(`[users-api] listening on ${PORT}`);
});
