module.exports = function(multer, app, Image){
  // multer destination and name
  var storage = multer.diskStorage({

    // File destination
    destination: function(req, file, cb){
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

      //Add a image to database
      var sunglasses = Image({
        image: imageName,
        url: imageUrl
      }).save(function(err){
        if(err) throw err;
        console.log('Image Uploaded: name: ' + imageName + ' url: ' + imageUrl);
        console.log("Done :)");
        res.redirect('/' + 'image/' + imageUrl);
      });
  });
}
