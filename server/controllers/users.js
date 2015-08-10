'use strict';

/**
 * Users controller for user profile relation operations.
 */

var route = require('koa-route'),
	User = require('../models/user');

// register koa routes
exports.init = function(app) {
	app.use(route.post('/api/users', createUser));
	//app.use(route.get('/api/users', listUser));
};

/**
 * Creates a new user.
 */
function* createUser() {
	var user = new User({
		firstname: this.request.body.firstname,
		lastname: this.request.body.lastname
	});
	try {
		user._id = yield mongo.getNextSequence('userId');
		yield user.save();
		this.body = {
			id: user._id
		};
		this.status = 201;
	} catch (e) {
		this.throw(500, e);
	}
}