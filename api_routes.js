const express = require('express');
const MessageController = require('./apps/database/visitor_wall/message_controller');
const MailController = require('./apps/mail_controller.js');
const router = express.Router();

// Visitor Wall Messages
router.post('/visitor_wall_message', MessageController.create);
router.get('/visitor_wall_message', MessageController.read);
router.get('/visitor_wall_message/:id', MessageController.read_id);

// Sendgrid API
router.post('/sendmail', MailController.sendMail);

module.exports = router;
