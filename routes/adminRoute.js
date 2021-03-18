const express = require('express');
const router = express.Router();
// const {viewLogin, addLogin} = require("../controllers/admin")
const {viewDashboard} = require("../controllers/dashboard")

router.get('/dashboard', viewDashboard)

module.exports = router;