var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  isDone: Boolean,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Todo', todoSchema);