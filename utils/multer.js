const multer = require('multer');
const fs = require("fs")
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("./uploads")){
      fs.mkdirSync("./uploads");
  }
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + '-' + file.originalname)
  }
})


const fileFilter = (req, file, cb) => {
  if (file.mimetype.indexOf('image') !== -1) {
    cb(null, true)
  } else {
    //reject file
    cb({
       err:'Unsupported file format'}
    , false)
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024
  },
  fileFilter: fileFilter
})

module.exports = upload;