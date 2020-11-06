const express = require('express');
const MessageController = require('./visitor_wall/message_controller');
const router = express.Router();

//Routes
router.post('/visitor_wall_message', MessageController.create);
router.get('/visitor_wall_message', MessageController.read);
router.get('/visitor_wall_message/:id', MessageController.read_id);

module.exports = router;
