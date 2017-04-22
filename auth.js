module.exports = function(auth, app){
  
  // For login system
  var passport = require("passport"),
      LocalStrategy = require("passport-local"),
      User = require("./models/user");

  // Passport Configuration
  app.use(require("express-session")({
    // This can be literally anything..
    secret: "Idk what the hell this is. But I had to type it. ",
    // These are two options from what I read are required.
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  // Handle Registration
  app.post('/register', function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
      if(err){
          console.log(err);
          app.set('view engine', 'ejs');
          return res.render("register");
      }
      passport.authenticate("local")(req, res, function(){ 
        console.log(err);
        app.set('view engine', 'ejs');
        res.redirect("/dashboard"); 
      });
    });
  });

  // Handle Login
  // app.post ( '/login', middleware/callback )
  app.post('/login', passport.authenticate("local", 
    { 
      successRedirect: "/dashboard",
      failureRedirect: "/login"
    }));

  // Check if user is logged in
  function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
      return next();s
    }
    res.redirect('/login');
  }
}

