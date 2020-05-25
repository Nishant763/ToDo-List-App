const Mongoose = require('mongoose');

Mongoose.connect("mongodb://localhost/todo-db")

const db = Mongoose.connection;

db.on('error',console.error.bind(console,"db connenction error: "));

db.once('open', function(){
    console.log("Successfully connected to db...");
});