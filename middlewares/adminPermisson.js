const {Token} = require("../utils/tokens")

function adminPermissionMiddleware (req, res, next) {
    try {
        const decodedData =   Token.decodeAccessToken(req.headers["x-access-token"]);
        console.log(22222,decodedData)
        if(!decodedData.data.isAdmin) {
            throw "Admin permission denied";
        } else {
            next()
        }
    } catch(err) {
        console.log("admin permission ",err)
        next({err:"Admin permission denied"})
    }
    
  }

module.exports = adminPermissionMiddleware;