var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('User', userSchema);