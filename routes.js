module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index');
	});
	// JOSH's code here ------------------------

	// Create image
	Image.create({
		image: 'sunglass.png',
		url: 'sdfhsdfsdf'
	});

	// RESTFUL Routes
	app.get("/images", function(req,res){
		res.render('images');
	})

	//NEW Route
	app.get("/new", function(req,res){
		//Render pug template new
		res.render("new");
	})
	//CREATE Route
	app.post("/images", function(req,res){
		// create image
		images.create(req.body.imageArea, function(err, newImage){
			if(err){
				// render the upload image page
				res.render("new");
			}else{
				res.redirect("/images");
			}
		})
		// then, redirect to the generated url
	})

	// SHOW Route
	app.get("/:id", function(req,res){
		images.findById(req.params.id, function(err,foundImage){
			if(err){
				res.redirect("/404");
			}else{
				res.render("show", {something: foundImage});
			} 
		})
	})

	// end ------------------------------------

};
