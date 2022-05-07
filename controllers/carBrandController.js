const CarBrandService = require("../services/carBrandService")

class CarBrandController {
    
    static async getAllBrand(req, res, next) {
        let message = await CarBrandService.getAllBrand();
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
    static async adminAddBrand(req, res, next) {
        const {name} = req.body;
        let message = await CarBrandService.addBrand(name);
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
    
    static async adminDeleteBrand(req, res, next) {
        const {name} = req.body;
        let message = await CarBrandService.deleteBrand(name);
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
    
    static async adminUpdateBrand(req, res, next) {
        const {name,id} = req.body;
        let message = await CarBrandService.adminUpdateBrand(name,id);
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
    
}
module.exports = CarBrandController;