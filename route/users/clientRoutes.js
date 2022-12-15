const express = require("express");
const {
  registerClientCtrl,
  // loginFreelancerCtrl,
} = require("../../controllers/User/clientController");

const freelancerRoutes = express.Router();

freelancerRoutes.post("/register", registerClientCtrl);
// freelancerRoutes.post("/login", loginFreelancerCtrl);

module.exports = freelancerRoutes;
