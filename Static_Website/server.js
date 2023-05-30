const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Change this to the desired port number

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
