//Internal modules
var path = require("path");

//External modules
var express = require("express");
var pug = require("pug");

//Local modules
var routes = require("./routes.js");

//Setup
var app = express();
var port = process.env.PORT || 3000;
	
app.use(express.static(path.resolve(__dirname, "css")));
app.use(express.static(path.resolve(__dirname, "js")));
app.use(express.static(path.resolve(__dirname, "img")));

//set the view folder
app.set("views", path.resolve(__dirname, "pug"));

//set the view engine
app.set("view engine", "pug");

app.use(routes);

app.listen(port, function(){
	console.log("Application running at port " + port);
});