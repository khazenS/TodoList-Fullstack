const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    name: {type:String,required:[true,"Please enter a todo!"]},
    created_at: {type: Date,default:Date.now}
    
});

module.exports = mongoose.model("Todo",TodoSchema);