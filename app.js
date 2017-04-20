//Internal modules
var path = require("path");

//External modules
var express = require("express");
var pug = require("pug");
var multer = require("multer");
var mongoose = require("mongoose");

//Local modules
var routes = require("./routes.js");

//Setup
var app = express();
var port = process.env.PORT || 3000;

// bodyParser >>
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// setting up database >>
mongoose.connect('mongodb://josh:josh@ds163020.mlab.com:63020/imgup');


// Schema
var images = new mongoose.Schema({
  image: String,
  url: String
});


// Create Model
var Image = mongoose.model('imageId', images);


// Multer setup, check multerjs for the code
var multerSet = require('./multer.js');
multerSet(multer, app, Image);



app.get("/image/:id", function(req, res){
  var imageUrl = req.params.id;
  Image.findOne({
    url: imageUrl
  }, function(err, image){

      if(err){
        console.log(err);
        return;
      }

      else{
        var location = image.image;
        location = path.resolve(__dirname, "uploads", "images", location);
        res.sendFile(location);
      }
  });
});



// Static files
app.use(express.static(path.resolve(__dirname, "css")));
app.use(express.static(path.resolve(__dirname, "js")));
app.use(express.static(path.resolve(__dirname, "img")));

//set the view folder
app.set("views", path.resolve(__dirname, "pug"));

//set the view engine
app.set("view engine", "pug");

var routes = require('./routes.js');
routes(app);

app.listen(port, function(){
  console.log("Application running at port " + port);
});
