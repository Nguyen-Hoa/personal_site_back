const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Message = new Schema (
    {
        text: {type: String, required: true},
        date: {type: Date, required: true},
    },
    {collection: 'messages'},
)

module.exports = mongoose.model('messages', Message);