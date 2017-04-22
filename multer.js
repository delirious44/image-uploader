module.exports = function(multer, app){
  
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


      // For setting expire
      var now = new Date();
      var expirationDate = {
        month: now+1,
        date: 1
      }

      // If user loggedin, setOwner to username
      var auth = require('./auth.js');
      var setOwner;
      if(req.user != undefined)
      {
        setOwner = req.user;
        // setOwner = req.user.username;
      }else{
        setOwner = 'Anonymous';
      }


      // Path logic here path should be
      // `images/uploads/sdhfsdf`
      // `or image/uploads/user/sidfhsdf`
      var path = 'uploads/images/' + imageName;

  });
}
