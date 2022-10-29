const express = require("express");
const router = express.Router();

const AuthController = require('../controllers/auth.controller');
const {Validate} = require('../middlewares');

// Create routes for auth here
// route.use('/signup', Validate.validateRequest);

router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);

module.exports = router;