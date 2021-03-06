const mongoose = require('mongoose');

const guest_url = process.env.MONGO_URL;

mongoose
    .connect(guest_url, {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(e => {
        console.error('Connection error.', e.message)
    });

const db = mongoose.connection;
module.exports = db;