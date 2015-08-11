'use strict';

var mongoose = require('mongoose'),
  Todo = require('../models/todo'),
  User = require('../models/user')

/**
 * Populates the database with seed data.
 * @param overwrite Overwrite existing database even if it is not empty.
 */
function* seed(overwrite) {
  if (overwrite) {
    yield Todo.remove();
    yield User.remove();
    console.log('Clear all existing data');
  }

  yield User.create(users);
  yield Todo.create(todos);
}

// declare seed data
var users = [{
  firstname: 'jie',
  lastname: 'jia'
}, {
  firstname: 'new',
  lastname: 'jet'
}];

var todos = [{
  content: 'eat breakfast',
  isDone: false
}, {
  content: 'eat lunch',
  isDone: false
}, {
  content: 'eat dinner',
  isDone: false
}, ];

// export seed data and seed function
seed.users = users;
seed.todos = todos;
module.exports = seed;