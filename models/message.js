const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  author: String,
  timestamp: {type: Number, default: Date.now},
  text: String,
});

module.exports = mongoose.model('Message', MessageSchema);
