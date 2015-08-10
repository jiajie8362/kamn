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
};

/**
 * Create a new todo
 */
function* createTodo() {
  var todo = new Todo({
    content: this.request.body.content
  });
  try {
    yield todo.save();
    this.body = {
      id: todo._id
    };
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
  todos.forEach(function(todo) {
    delete todo._id;
  });
}