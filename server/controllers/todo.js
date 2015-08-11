'use strict';

/**
 * Users controller for user profile relation operations.
 */

var route = require('koa-route'),
  Todo = require('../models/todo');

// register koa routes
exports.init = function(app) {
  app.use(route.post('/api/todos', createTodo));
  app.use(route.get('/api/todos', listTodo));
  app.use(route.put('/api/todos', updateTodo));
};

/**
 * Create a new todo
 */
function* createTodo() {
  console.log(this.request.body);
  var todo = new Todo({
    content: this.request.body.content,
    isDone: false
  });
  try {
    yield todo.save();
    this.body = todo;
    this.status = 201;
  } catch (e) {
    this.throw(500, e);
  }
}

/**
 * List all todos
 */
function* listTodo() {
  var todos = yield Todo.find();
  this.body = todos;
}

/**
 * Update specifed todo item
 */
function* updateTodo() {
  console.log('updateTodo');
  var updatedTodo = this.request.body;
  console.log(updatedTodo)
  try {
    yield Todo.findOneAndUpdate({
      "_id": updatedTodo._id
    }, {
      upsert: false
    }, updatedTodo);
    this.status = 200;
  } catch (e) {
    this.throw(500, e);
  }
}