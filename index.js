// Server dependencies
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize server
const app = express();
const api_port = 3000;
app.use(cors());
app.use(bodyParser.json())

// Serve frontend
app.use(express.static(path.join(__dirname, 'build')));
if (process.env.NODE_ENV === 'production') {
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

app.listen(api_port, () => console.log(`Server running on port ${api_port}`));
