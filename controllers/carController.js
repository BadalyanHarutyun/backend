const CarService = require("../services/carService")


class CarController {
    static async getAllCar(req, res, next) {
        let message = await CarService.getAllCars();
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
    static async getCar(req, res, next) {
        const {id} =req.query
        let message = await CarService.getCar(id);
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
    static async adminAddCar(req, res, next) {
        const {modelId} = req.body;
        const files = req.files;
        console.log(55555,req.files,modelId)
        let message = await CarService.adminAddCar(files,Number(modelId));
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
    
    static async adminDeleteCar(req, res, next) {
        const {id} = req.body;
        let message = await CarService.deleteCar(id);
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
    
    static async adminUpdateCar(req, res, next) {
        const {modelId,id} = req.body;
        let message = await CarService.adminUpdateCar(modelId,id);
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    } 
    
    static async adminAddCarPicture(req, res, next) {
        const {id} = req.body;
        const files = req.files;
        console.log(55555,req.files,)
        let message = await CarService.adminAddCarPicture(files,id);
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
    
    static async adminDeletePicture(req, res, next) {
        const {id,carId} = req.body;
        let message = await CarService.adminDeletePicture(carId,id);
        if(!message.msg) {
            next(message)
        } else {
            res.send(message)
        }
    }
}
module.exports = CarController;