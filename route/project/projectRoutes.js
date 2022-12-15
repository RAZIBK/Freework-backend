const express = require("express");
const { createProjectCtrl, allProjectCtrl, singleProjectCtrl  } = require("../../controllers/projects/projectController");


const authmidlewarres = require("../../middlewares/auth");
const projectRoutes = express.Router();

projectRoutes.get("/get-project",authmidlewarres, singleProjectCtrl);
projectRoutes.post("/",authmidlewarres, createProjectCtrl);
projectRoutes.get("/", allProjectCtrl);





module.exports = projectRoutes;
