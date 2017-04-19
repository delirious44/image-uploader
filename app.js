//Internal modules
var path = require("path");

//External modules
var express = require("express");
var pug = require("pug");
var multer = require("multer");

//Local modules
var routes = require("./routes.js");

//Setup
var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// JOSH's code begins --------------------------------------------
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
		console.log(req.files);
        console.log(req.body);
        // res.send(req.files);
        var testurl = req.body.imageUrl;
        function GenerateURL(){
            var length = 16;
            var randomString = siteURL + Array(length+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, length);
            return randomString;
        }
        // Here we need to get the #url element 
        // and change its innerHTML into GenerateURL
        // 
        var fileObject = req.files[0];
		var imageName = req.body.imageUrl.substr(14);
        var extension = fileObject.originalname.substr(fileObject.originalname.lastIndexOf("."));
        fileObject.originalname = imageName + extension;
        console.log(fileObject.originalname);
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
