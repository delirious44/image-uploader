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

// function loggedIn(req, res, next) {
//         if (req.user) {
//             setOwner = req.user.username;
//         } else {
//             res.redirect('/login');
//             // setOwner = 'Anonymous';
//         }
//       }
  app.post('/', upload.any(), function(req, res, next){
      var imageUrl = req.body.imageUrl.substr(14);
      var imageName = req.files[0].originalname; //Change to correct logic 

      // For setting expire
      // Since this is only called when the image
      // is uploaded, expireDate will persist.
      var now = new Date();
      var expirationDate = new Date();
      expirationDate.setMonth(now.getMonth() + 1);

      // If user loggedin, setOwner to username
      var setOwner;
<<<<<<< HEAD
      if(req.user != undefined)
      {
        // setOwner = req.user;
        setOwner = req.user.username;
      }else{
        setOwner = 'Anonymous';
      }

      console.log(Image);

      var imageOne = new Image({
        image: imageName,
        url: "/image/" + imageUrl,
        path: imageUrl,
        uploadDate: now,
        expireDate: expirationDate,
        owner: setOwner
      });

      imageOne.save(function(err){
        console.log("Here");
        if(err)
          return err;
        
          console.log("Uploaded Image");
          res.redirect("/image/" + imageUrl);
      })


      // Path logic here path should be
      // `images/uploads/sdhfsdf`
      // `or image/uploads/user/sidfhsdf`
      var path = 'uploads/images/' + imageName;

=======
      console.log(req.user);
      if(req.user){ setOwner = req.user.username; }
      else{ setOwner = 'Anonymous'; }
      
      var uploadImage = Image({
        image: imageName,
        url: imageUrl,
        path: 'uploads/images/' + imageName,
        uploadDate: now,
        expireDate: expirationDate,
        owner: setOwner
      }).save(function(err){
        if(err) throw err;
        console.log('Image Uploaded: name: ' + imageName + ' url: ' + imageUrl);
        console.log("Done :)");
        res.redirect('/' + 'image/' + imageUrl);
      });
>>>>>>> 94958e42aec52df72da7f72207f37d03f9f8694f
  });
}
