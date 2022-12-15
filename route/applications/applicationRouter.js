const express = require("express");
const { createApplicationCtrl, singleApplicationCtrl,myApplicationCtrl } = require("../../controllers/applications/applicationController");


const authmidlewarres = require("../../middlewares/auth");
const applicationRoutes = express.Router();

applicationRoutes.post("/",authmidlewarres, createApplicationCtrl);
applicationRoutes.get("/",authmidlewarres, myApplicationCtrl);
applicationRoutes.get("/:id",authmidlewarres, singleApplicationCtrl);








module.exports = applicationRoutes;