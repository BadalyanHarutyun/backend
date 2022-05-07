const express = require('express');
const adminPermissionMiddleware = require("../middlewares/adminPermisson");
const AdminController = require("../controllers/adminController");
const adminRoute = express.Router();

adminRoute.get("/admin",adminPermissionMiddleware,AdminController.get)

module.exports = adminRoute