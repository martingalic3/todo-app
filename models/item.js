var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = mongoose.Schema({ 
    text : {
        type: String,
        default: ''
    },
    done : {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: ''
    }
}, { collection: "item" });

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;