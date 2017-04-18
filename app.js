var fs = require('fs');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');


var app = express();

// Connect to the database
mongoose.connect('mongodb://josh:josh@ds163020.mlab.com:63020/imgup');

// Create schema
var users = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

// Create Model
var User = mongoose.model('User', users);

//Add a user to database
var josh = User({
    username: 'josh',
    password: 'josh',
    email: 'mydevaccs@gmail.com'
    }).save(function(err){
        if(err) throw err;
        console.log('User Added');
    });


// On signup modal button click
// check to see if the user email exist, 
// if not allow sign up, if it does show error
// --- This is where I am not sure how to access the document.html
// if(users.collection.find({ "fieldToCheck": { $exists: true, $ne: null } })){
//     // logic here
// }





//static files
app.use(express.static(path.join(__dirname, '.')));

app.get('/', function(req, res){
    res.sendFile(__dirname +'/index.html');
})

// Listen on port 3000
app.listen(3000);
console.log('Server listening on port: 3000...');


