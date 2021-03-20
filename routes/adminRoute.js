const express = require('express');
const router = express.Router();
// const {viewLogin, addLogin} = require("../controllers/admin")
const {viewDashboard} = require("../controllers/dashboard")
const {viewLembaga, addLembaga, editLembaga, deleteLembaga} = require("../controllers/lembaga")

router.get('/dashboard', viewDashboard)
router.get('/lembaga', viewLembaga)

module.exports = router;