// import express and routing files
const express = require('express');
const htmlRouting = require('./routes/htmlRouting.js');
const apiRouting = require('./routes/apiRouting.js');

// set PORT to 3001 for local server
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRouting);
app.use('/', htmlRouting);

// Starts the server to logs to console
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));