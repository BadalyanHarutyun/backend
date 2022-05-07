const express = require('express');

const adminLoginRoute = express.Router();
const {Auth} = require("../middlewares/authvalidation")
const AuthController = require("../controllers/authController")
adminLoginRoute.post("/admin/login",Auth.loginValdiation(),AuthController.adminLogin)

module.exports = adminLoginRoute;