const express = require('express');
const adminPermissionMiddleware = require("../middlewares/adminPermisson");
const carModelController = require("../controllers/carModelController");
const carModelRoute = express.Router();

carModelRoute.post("/admin/carmodel", adminPermissionMiddleware, carModelController.adminAddModel)
carModelRoute.delete("/admin/carmodel", adminPermissionMiddleware, carModelController.adminDeleteModel)
carModelRoute.put("/admin/carmodel", adminPermissionMiddleware, carModelController.adminUpdateModel)
carModelRoute.get("/admin/carmodel", carModelController.getModelByBrand)
module.exports = carModelRoute;