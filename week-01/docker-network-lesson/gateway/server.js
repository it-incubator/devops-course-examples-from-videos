const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const USERS_API_URL = process.env.USERS_API_URL || 'http://users-api:4000';

app.get('/', async (req, res) => {
  try {
    const response = await fetch(`${USERS_API_URL}/users`);
    const users = await response.json();
    res.json({
      service: 'gateway',
      upstream: USERS_API_URL,
      users,
    });
  } catch (err) {
    res.status(502).json({ error: 'upstream unavailable', detail: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`[gateway] listening on ${PORT}, upstream=${USERS_API_URL}`);
});
