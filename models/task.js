const mongoose = require('mongoose');
//creating schema for our task model
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

//retrieving the task model to perform CRUD operation
const Task = mongoose.model('Task',taskSchema);

//exporting the task model so that it can be used by other js files.
module.exports = Task;