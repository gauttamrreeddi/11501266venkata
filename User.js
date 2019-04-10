var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    product:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }

});

var User = mongoose.model('User',userSchema);
module.exports = User;