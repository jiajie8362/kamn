var koa = require('koa.io');
var mongo = require('./server/config/mongo');
var mongoSeed = require('./server/config/mongoSeed');
var co = require('co');
var koaConfig = require('./server/config/koa');
var app = koa();
var port = process.env.PORT || 3000;
module.exports = app;

app.init = co.wrap(function*() {

  yield mongoSeed(true);
  // koa config
  koaConfig(app);

  app.listen(port);
  console.log('kamn server listen on ' + port);
})

// auto init if this app is not being initialized by another module (i.e. using require('./app').init();)
if (!module.parent) {
  app.init().catch(function (err) {
    console.error(err.stack);
    process.exit(1);
  });
}