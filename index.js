const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const Task = require('./models/task');

//setting the views directory
app.set('views', path.join(__dirname,'views'));
//setting the view engine as ejs
app.set('view engine','ejs');

//Middleware to use views folder
app.use(express.static('views'));

//Middleware to parse incoming requests to req.body in json form
app.use(express.urlencoded());

//Routes HTTP GET requests to '/' path with the specified callback function.
app.get('/', function(req,res){
    //fetches all the tasks(documents) in the model Task and renders it to the home page.
    Task.find({}, function(err,tasks){
        if(err){
            console.log("Error: ",err);
            return;
        }
        //bgcolor array is used to render different bgcolors for different properties.
        let bgcolor = [];
        for(task of tasks){
            if(task.category=='Personel'){
                bgcolor.push('red');
            }
            else if(task.category =='Work'){
                bgcolor.push('blue');
            }
            else if(task.category =='School'){
                bgcolor.push('purple');
            }
            else if(task.category =='Cleaning'){
                bgcolor.push('green');
            }
            else{
                bgcolor.push('yellow');
            }
        }
        
        //Renders a view and sends the rendered HTML string to the client(browser)
        return res.render('home',{
            tasks_list:tasks,
            bgcolors:bgcolor
        })

    })
    
})

//Routes HTTP POST requests to the specified path('/add-task') with the specified callback function.
app.post('/add-task', function(req,res){
    Task.create({
        des: req.body.description,
        category: req.body.category,
        due_date: req.body.date
    }, function(err,NewTask){
        if(err){
            console.log("Error: ",err);
            return;
        }
        
        //Redirects to the URL derived from the specified paths
        //A back redirection redirects the request back to the referer, defaulting to / when the referer is missing.
        return res.redirect('back');

    })
    
});

//Routes HTTP POST requests to the specified path('/delete-task') with the specified callback function.
app.post('/delete-task', function(req,res){
    //ids contain all the ids of checked tasks which needs to be deleted. 
    let ids = Object.keys(req.body).slice(1);
    
    for(id of ids){
        Task.findByIdAndDelete({
            _id:id
        },function(err){
            if(err){
                console.log("Error: ",err);
                return;
            }
            
        })
    }
    return res.redirect('back');
})

//Binds and listens for connections on the specified host and port
app.listen(port, function(err){
    if(err){
        console.log('Server not started: ',err);
    }
    console.log("Server is up and running on port : ",port);
})
