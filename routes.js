module.exports = function(app, mongoose){

    var mongoose = require("mongoose");
    var Image = require("./models/image");
    
       // var auth = require('./auth.js');
    app.get('/', function(req, res){
        app.set('view engine', 'pug');
        res.render('index');
    });

    // Register
    app.get('/register', function(req, res){
        app.set('view engine', 'ejs');
        res.render('register');
    });
    
    // Login
    app.get('/login', function(req, res){
        app.set('view engine', 'ejs');
        res.render('login');
    });

    // Logout
    app.get('/logout', function(req, res){
        req.logout();
        app.set('view engine', 'pug');
        res.redirect('/');
    });

    // User Dashboard
    app.get('/dashboard', function(req, res){
        app.set('view engine', 'ejs');
        // Render the dashboard & define current user
        Image.find({'owner': req.user.username}, function(err, allImages){
            if(err){
                console.log(err);
            }else{
                res.render("dashboard", {userImages: allImages});
                console.log(allImages);
            }
        });
        // Watch currentUser
        // setInterval(function () { 
        // console.log(req.user.username);
        // }, 1000); 

    });
    // Find out the proper path for images...
    // app.get('/path', function(req, res){
    //     app.set('view engine', 'ejs');
    //     ImageModel.find({'owner': 'test'}, function(err, allImages){
    //         res.render('path', {images: allImages});
    //         });
    // });

};