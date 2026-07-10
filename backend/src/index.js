const express = require('express');
const app = express();
/** @type {NodeJS.Process} */
const _process = process;

const PORT = _process.env.PORT || 5000;

app.use(express.json());

// Example route
app.get('/', (req, res) => res.send('Backend running...'));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

