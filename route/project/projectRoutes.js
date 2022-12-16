const express = require("express");
const { createProjectCtrl, allProjectCtrl, singleProjectCtrl  } = require("../../controllers/projects/projectController");


const authmidlewarres = require("../../middlewares/auth");
const ProjectRoutes = express.Router();

ProjectRoutes.get("/get-project",authmidlewarres, singleProjectCtrl);
ProjectRoutes.post("/",authmidlewarres, createProjectCtrl);
ProjectRoutes.get("/", allProjectCtrl);





module.exports = ProjectRoutes;
