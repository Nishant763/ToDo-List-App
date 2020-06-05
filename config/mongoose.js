const Mongoose = require('mongoose');
//opens the connection to local database todo-db
Mongoose.connect("mongodb://localhost/todo-db")

const db = Mongoose.connection;

db.on('error',console.error.bind(console,"db connenction error: "));

//once the connection is open, callback function is called(to verify)
db.once('open', function(){
    console.log("Successfully connected to db...");
});