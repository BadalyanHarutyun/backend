const upload = require('../utils/multer').array('image');
const multer = require("multer");
function uploadPermissonMiddleware(req, res,next) {
    upload(req, res, function (err) {
        console.log(1111,err)
        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
          
          next({err:err.message})
        } else if (err) {
          next(err)
          // An unknown error occurred when uploading.
        }
        if(!err) {
          next()
        }
      
        // Everything went fine.
      })
}
module.exports = uploadPermissonMiddleware;