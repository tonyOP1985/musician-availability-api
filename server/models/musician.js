const mongoose = require('mongoose');



var musician = mongoose.model('Musician', {
	musician: {
		type: String,
		required: true;
		minlength: 1,
		trim: true
	},
	instruments: {
		type: []
	},
	dates: [{
		weekOne: {
			fri: {
				type: Boolean,
				default: true
			},
			sat: {
				type: Boolean,
				default: true
			}
		},
		weekTwo: {
			fri: {
				type: Boolean,
				default: true
			},
			sat: {
				type: Boolean,
				default: true
			}
		},
		weekThree: {
			fri: {
				type: Boolean,
				default: true
			},
			sat: {
				type: Boolean,
				default: true
			}
		},
		weekFour: {
			fri: {
				type: Boolean,
				default: true
			},
			sat: {
				type: Boolean,
				default: true
			}
		}
	}]
});
