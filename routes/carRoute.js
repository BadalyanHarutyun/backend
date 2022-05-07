const express = require('express');
const adminPermissionMiddleware = require("../middlewares/adminPermisson");
const uploadPermissonMiddleware = require("../middlewares/uploadPermissonMiddleware")
const CarController = require("../controllers/carController")
const carRoute = express.Router()

carRoute.post("/admin/car",adminPermissionMiddleware,uploadPermissonMiddleware,CarController.adminAddCar)
carRoute.get("/admin/cars",CarController.getAllCar)
carRoute.get("/admin/car",CarController.getCar)
carRoute.put("/admin/car",adminPermissionMiddleware,CarController.adminUpdateCar)
carRoute.delete("/admin/car",adminPermissionMiddleware,CarController.adminDeleteCar)
carRoute.post("/admin/car/picture",adminPermissionMiddleware,uploadPermissonMiddleware,CarController.adminAddCarPicture)
carRoute.delete("/admin/car/picture",adminPermissionMiddleware,CarController.adminDeletePicture)
module.exports = carRoute