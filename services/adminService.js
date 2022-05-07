const {Token} = require("../utils/tokens");
const {Admin} = require("../database/models/index")
class AdminService {
    static async get(id) {
        try {
        const user = await Admin.findOne({raw:true, where:{id}});
        if(!user) {
            throw "Invalid user";
        }
        console.log(user)
       const {email,firstName,lastName, ...rest} = user
       return {msg:{email,firstName,lastName}};
        } catch(err) {
            return {err};
        }


    }
    static readAccessHeader(token) {
        return Token.decodeAccessToken(token)
    }
}
module.exports = AdminService