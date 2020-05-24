const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('assets'));
app.use(express.urlencoded());

app.set('view engine','ejs');

app.get('/', function(req,res){
    return res.render('home');
})

app.listen(port, function(err){
    if(err){
        console.log('Server not started: ',err);
    }
    console.log("Server is up and running on port : ",port);
})
