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




// Multer setup
var storage = multer.diskStorage({
    // Set file destination
    destination: function(req,file,cb){
        cb(null, 'uploads/images')
    },
    // Name the file
    filename: function(req, file, cb){
        cb(null, Date.now() + file.originalname);
    }
});
var upload = multer({ storage: storage });
app.post('/', upload.any(), function(req, res, next){
		console.log(req.files);
        res.send(req.files);
	});




// bodyParser add , note: bodyParser should be near the top - before the routing, the comments can be cleared afterwards
// npm install body-parser / saved at package.json .. >> code from kastri

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


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
