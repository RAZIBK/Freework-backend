const express = require("express");
const { registerUserCtrl, loginUserCtrl, getUserDataCtrl } = require("../../controllers/User/userController");
const authmidlewarres = require("../../middlewares/auth");



const clientRoutes = express.Router();

clientRoutes.post("/register", registerUserCtrl);
clientRoutes.post("/login", loginUserCtrl);
clientRoutes.get("/",authmidlewarres, getUserDataCtrl);





module.exports = clientRoutes;
