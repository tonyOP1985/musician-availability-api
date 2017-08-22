const mongoose = require('mongoose');

var User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		minLength: 1,
		trim: true
	},
	email: {
		type: String,
		required: true,
		minLength: 1,
		trim: true
	}
});

module.exports = {User};
