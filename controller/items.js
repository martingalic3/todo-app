var Item = require('../models/item.js');
var mongoose = require('mongoose');
var mongodb = require('mongodb');

function getAll(res){ 
    Item.find({}, function (err, items) {
            if (err)
                res.send(400);
            else{ 
                res.json(items);
            }
                
        });
}

module.exports = {

    getItems: function (req, res) {
        getAll(res);
    },

    createTodoItem: function(req, res, next){ 
        Item.create({
            text: req.body.text,
            done: false,
            date: Date.now()
        }, function (err, todo) {
            if (err)
                res.send(err);

            getAll(res);
        });
    },

    getTodoItem: function(req, res){ 
        Item.findById(req.params.id, function(err, item){
            if(err)
                res.send(err);
            else
                res.send(item);
        });
    },

    deleteTodoItem: function(req, res, next){ 
        Item.remove({ 
            _id: req.params.item_id
        }, function(err, item){ 
             if(err)
                res.send(err);
            else
                getAll(res);
        });
    },

    updateTodoItem: function(req, res){
        var id = req.params.id;
        var update = req.body;

        Item.update({
            _id: id
        }, update, 
        function(err, item){ 
            if(err)
                res.send(err);
            else
                getAll(res);
        });
    }
} 
