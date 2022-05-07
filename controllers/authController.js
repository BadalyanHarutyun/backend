const AuthService = require("../services/authService")
class AuthController {
    static async adminLogin(req, res, next) {
        const {email, password} = req.body
        let message = await await AuthService.adminLogin(email, password);
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
}
module.exports = AuthController;