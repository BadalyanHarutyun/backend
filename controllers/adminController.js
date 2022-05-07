const AdminService = require("../services/adminService")
class AdminController {
    static async get(req, res, next) {
        const decodedData = AdminService.readAccessHeader(req.headers["x-access-token"])
        const {id} = decodedData.data;
        const message = await AdminService.get(id)
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }

}
module.exports = AdminController