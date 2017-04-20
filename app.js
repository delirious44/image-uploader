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

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// JOSH's code begins --------------------------------------------

// ##### DATABASE SECTION MOVE THIS LATER
// Connect to the database
mongoose.connect('mongodb://josh:josh@ds163020.mlab.com:63020/imgup');
// Create schema
var images = new mongoose.Schema({
image: String,
url: String
});
// Create Model
var Image = mongoose.model('imageId', images);


// Multer setup
var storage = multer.diskStorage({
    // Set file destination
    destination: function(req,file,cb){
        cb(null, 'uploads/images')
    },
    // Name the file
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });
app.post('/', upload.any(), function(req, res, next){
    var imageUrl = req.body.imageUrl.substr(14);
    var imageName = req.files[0].originalname

    // ##### DATABASE SECTION MOVE THIS LATER
    //Add a image to database
    var sunglasses = Image({
    image: imageName,
    url: imageUrl
    }).save(function(err){
        if(err) throw err;
        console.log('Image Uploaded: name: ' + imageName + ' url: ' + imageUrl);
        console.log("DOne :)");
        res.redirect('/');
    });
});


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






// -------------------------------END Josh's Code



// bodyParser add , note: bodyParser should be near the top - before the routing, the comments can be cleared afterwards
// npm install body-parser / saved at package.json .. >> code from kastri

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
