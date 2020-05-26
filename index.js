const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const Task = require('./models/task');

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static('views'));
app.use(express.urlencoded());


app.get('/', function(req,res){
    Task.find({}, function(err,tasks){
        if(err){
            console.log("Error: ",err);
            return;
        }
        console.log(tasks[0].get('due_date').toString().slice(0,15));
        return res.render('home',{
            tasks_list:tasks
        })

    })
    
})

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
        console.log(NewTask);

        return res.redirect('back');

    })
    // console.log(req.body);
});

app.post('/delete-task', function(req,res){
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

app.listen(port, function(err){
    if(err){
        console.log('Server not started: ',err);
    }
    console.log("Server is up and running on port : ",port);
})
