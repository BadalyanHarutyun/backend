const { body, validationResult } = require('express-validator');

class Auth {
    static  loginValdiation() {
        return [
            body("email").isEmail(),
            body("password").isLength({ min: 5 }),
            (req, res, next) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                  next({ err: "Invalid email or password" });
                } else {
                    next()
                }
            }
        ]
    }
}
module.exports = {Auth};