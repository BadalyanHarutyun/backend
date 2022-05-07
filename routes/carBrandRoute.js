const express = require('express');
const adminPermissionMiddleware = require("../middlewares/adminPermisson");
const {Add} = require("../middlewares/addValidation")
const CarBrandController = require("../controllers/carBrandController")
const adminCarBrandRoute = express.Router();
adminCarBrandRoute.get("/admin/carbrand", CarBrandController.getAllBrand )
adminCarBrandRoute.post("/admin/carbrand",adminPermissionMiddleware,Add.brandValidation(), CarBrandController.adminAddBrand )
adminCarBrandRoute.put("/admin/carbrand",adminPermissionMiddleware, CarBrandController.adminUpdateBrand )
adminCarBrandRoute.delete("/admin/carbrand",adminPermissionMiddleware, CarBrandController.adminDeleteBrand )
module.exports = adminCarBrandRoute;