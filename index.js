const express = require('express');
const app = express();
const port = 8000;

app.use(express.urlencoded());


app.listen(port, function(err){
    if(err){
        console.log('Server not started: ',err);
    }
    console.log("Server is up and running on port : ",port);
})
