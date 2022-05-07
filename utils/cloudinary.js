const cloudinary = require('cloudinary');
const {cloud_name,api_key,api_secret} = require("../devConfig")

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret
})
class FilesCloud {
  static upload(file, folder)  {
    return new Promise(resolve => {
      cloudinary.uploader.upload(file, (result) => {
        resolve({
          url: result.url,
          id: result.public_id
        })
      }, {
        resource_type: "auto",
        folder: folder
      })
    })
  }
  static async delete(public_id) {
    return new Promise(function (resolve, reject) {
        cloudinary.uploader.destroy(public_id, function (error) {
            if (error.result !== "ok") {
                reject(error)
            }
            else {
                resolve(error)
            }
        })
    });

}
}
module.exports = FilesCloud