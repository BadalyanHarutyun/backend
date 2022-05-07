const { body, validationResult } = require('express-validator');

class Add {
    static  brandValidation() {
        return [
            body("name").not().isEmpty().withMessage("Please enter name of car brand"),
            (req, res, next) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                  next({ err: errors.array() });
                } else {
                    next()
                }
            }
        ]
    }
}
module.exports = {Add};