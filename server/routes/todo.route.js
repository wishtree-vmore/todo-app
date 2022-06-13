const express = require('express');
const route = express.Router();
const todoController = require('../controllers/todo.controller');

route.post('/add', todoController.addNew)

route.get('/all', todoController.getAll);

route.get('/:todoId', todoController.getById);

route.put('/:todoId', todoController.update);

route.delete('/:id', todoController.delete);

module.exports = route;                                             //route will get export as a module