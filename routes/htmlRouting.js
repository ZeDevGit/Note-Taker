const router = require('express').Router();
const path = require('path');

// GET requests for HTML files
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// GET request for notes.html file
router.get('/notes', (req, res) => {    
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Wildcard route to direct users back to the index.html file
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;