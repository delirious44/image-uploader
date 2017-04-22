module.exports = function(app){

       var auth = require('./auth.js');
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

    var image = require('./models/image');
    // User Dashboard
    app.get('/dashboard', function(req, res){
        app.set('view engine', 'ejs');
        // Render the dashboard & define current user
        image.find({'owner': 'Anonymous'}, function(err, allImages){
            // req.user.username is the user replace anonymous with it
            if(err){
                console.log(err);
            }else{
                res.render("dashboard", {userImages: allImages});
                console.log(allImages);
            }
        });
    });

};
