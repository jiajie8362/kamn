'use strict';

/**
 * Users controller for user profile relation operations.
 */

var route = require('koa-route');

// register koa routes
exports.init = function(app) {
	app.use(route.get('/api/list', list));
};

function* list() {
	this.body = 'hello world';
}