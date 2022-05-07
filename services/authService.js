const {Password} = require("../utils/passwordHashAndCompare");
const {Token} = require("../utils/tokens");

const {Admin} = require("../database/models/index");


class AuthService {
    static async adminLogin(email, password) {
        try {
            const admin =  await Admin.findOne({raw: true, where:{email}})
            if(!admin) {
                throw "Invalid email or password"
            }
            const match = await Password.compare(password, admin.password);
            if(!match) {
                throw "Invalid email or password"
            }
            return {msg: "success", accessToken: Token.createAccessToken({id:admin.id,isAdmin:true})};
        } catch(err) {
            console.log(err)
            return {err:err};
        }
    }
}
module.exports = AuthService;