// Server dependencies
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

// Database dependencies
const db = require('./database/index');
const dbRouter = require('./database/api_routes');

// Initialize server
const app = express();
const api_port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json())

// Connect to database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Serve frontend
app.use(express.static(path.join(__dirname, 'build')));
if (process.env.NODE_ENV === 'production') {
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

console.log('current node env: ', process.env.NODE_ENV);
app.use('/api', dbRouter);
app.listen(api_port, () => console.log(`Server running on port ${api_port}`));
