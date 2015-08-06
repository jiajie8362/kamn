var koa = require('koa.io');
var app = koa();
var port = process.env.PORT || 3000;

module.exports = app;

app.init = function(){
	app.listen(port);
	console.log('kamn server listen on '+port);
}

app.init();