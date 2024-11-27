const express = require("express");
const router = express.Router();

const IsAuth = require("../Middlewares/Auth");
const loginController = require("../Controllers/loginController.js");
const scamStatusController = require("../Controllers/scamStatusController");
const reportScamController = require("../Controllers/reportScamControllers");
const getAllDataController = require("../Controllers/getAlldata");

// create routes

router.post("/login",loginController)
router.get("/scam-status",IsAuth,scamStatusController)
router.post("/report-scam",IsAuth,reportScamController)
router.get("/scam-list",IsAuth,getAllDataController)

module.exports = router;