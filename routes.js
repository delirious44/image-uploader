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
        if(req.user){
            app.set('view engine', 'ejs');
            image.find({'owner': req.user.username }, function(err, allImages){
                if(err){console.log(err);}
                else{
                    res.render("dashboard", {userImages: allImages});
                    console.log(allImages);
                }
            });
        }else{
            app.set('view engine', 'ejs');
            res.redirect("/login");
        }

    });

};
