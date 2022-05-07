
const CarModelService = require("../services/carModelService")


class CarModelController {
    static async getModelByBrand(req, res, next) {
        const {brandId} = req.query
        let message = await CarModelService.getModelByBrand(brandId);
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
    static async adminAddModel(req, res, next) {
        const {name,brandId} = req.body;
        let message = await CarModelService.addModel(name,brandId);
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
    
    static async adminDeleteModel(req, res, next) {
        const {id} = req.body;
        let message = await CarModelService.deleteModel(id);
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
    
    static async adminUpdateModel(req, res, next) {
        const {name,id} = req.body;
        let message = await CarModelService.adminUpdateModel(name,id);
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
}
module.exports = CarModelController;