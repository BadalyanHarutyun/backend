const  jwt = require('jsonwebtoken');
const {access_token_privateKey} = require("../devConfig");

class Token {
    static createAccessToken(data) {
        return jwt.sign({ data }, access_token_privateKey);
    }
    static decodeAccessToken(token) {
        return jwt.verify(token, access_token_privateKey);
    }
}

module.exports = {Token}