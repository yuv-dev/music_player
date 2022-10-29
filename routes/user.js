const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user.controller');
const { Logger } = require('../middlewares')
// Create routes for user here
router.use('/', Logger.log);

router.get('/', UserController.getAllUser);

module.exports = router;