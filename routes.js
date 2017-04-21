module.exports = function(app){

       // var auth = require('./auth.js');
    app.get('/', function(req, res){
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
        app.set('view engine', 'ejs');
        res.redirect('/');
    });

    // User Dashboard
    app.get('/dashboard', function(req, res){
        app.set('view engine', 'ejs');
        // Render the dashboard & define current user
        res.render("dashboard", {currentUser: req.user});
    });

};