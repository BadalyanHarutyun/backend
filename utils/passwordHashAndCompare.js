const bcrypt = require("bcrypt");
const saltRounds = 10;

class Password {
    static async hash(password) {
        try {
        return await bcrypt.hash(password, saltRounds)
        } catch(err) {
            return {err:err}
        }
    }
    static async compare(password, hashedPassword) {
       return await bcrypt.compare(password, hashedPassword);
    }

}
module.exports = {Password};