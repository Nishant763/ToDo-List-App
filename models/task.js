const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    des:{
        type:String,
        required: true
    },
    due_date:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:true
    },
   
});

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;