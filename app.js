//External modules
var express = require("express");

//Setup
var app = express();
var port = process.env.PORT;

app.listen(port, function(){
	console.log("Application running at port " + port);
});