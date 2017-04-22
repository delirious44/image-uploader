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

  var mongoose = require("mongoose");
  var Image = require("./models/image");

  var upload = multer({ storage: storage });


  app.post('/', upload.any(), function(req, res, next){
      var imageUrl = req.body.imageUrl.substr(14);
      var imageName = req.files[0].originalname; //Change to correct logic 

      // For setting expire
      var now = new Date();
      var expirationDate = {
        month: now+1,
        date: 1
      }
      // If user loggedin, setOwner to username
      var setOwner;
      // undefined is not correct here... 
      if(req.user != undefined)
      {
        setOwner = req.user.username;
      }else{
        setOwner = 'Anonymous';
      }

      var uploadImage = Image({
        image: imageName,
        url: imageUrl,
        path: 'uploads/images/' + imageName,
        uploadDate: now,
        // expireationDate causes error
        // expireDate: expirationDate,
        owner: setOwner
      }).save(function(err){
        if(err) throw err;
        console.log('Image Uploaded: name: ' + imageName + ' url: ' + imageUrl);
        console.log("Done :)");
        res.redirect('/' + 'image/' + imageUrl);
      });
  });
}