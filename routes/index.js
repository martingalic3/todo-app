var Item = require('../models/item.js');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var items = require('../controller/items.js');


router.get('/item', items.getItems);
router.post('/item', items.createTodoItem);
router.get('/item/:id', items.getTodoItem);
router.delete('/item/:item_id', items.deleteTodoItem);
router.put('/item/:id', items.updateTodoItem);

module.exports = router;
