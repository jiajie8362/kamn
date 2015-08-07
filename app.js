var koa = require('koa.io');
var mongo = require('./server/config/mongo');
var co = require('co');
var koaConfig = require('./server/config/koa');
var app = koa();
var port = process.env.PORT || 3000;
module.exports = app;

app.init = co.wrap(function*() {
	// koa config
	koaConfig(app);

	app.listen(port);
	console.log('kamn server listen on ' + port);
})

app.init();