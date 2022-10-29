/**
 * this file will contain the custom middleware for validating the request  body
 */

const User = require('../models/User');

validateRequest = async (req, res, next) => {

    var payload = req.body;
    // validate if username exists

    if (!payload.username) {
        return res.status(400).send({
            message: "Failed! Username is not provided"
        });
    }

    /**
     * validate if the username is already not present
     */

    var user = await User.findOne({
        username: payload.username
    });

    if (user != null) {
        return res.status(400).send({
            message: "Failed! Username already exists"
        });
    }

    /**
     * validation for
     * email
     * password
     */


    //validate if email exists in payload

    if (!payload.email) {
        return res.status(400).send({
            message: "Failed! Email is not provided"
        });
    }

    //validate if the email is already present

    var email = await User.findOne({
        email: payload.email
    });

    if (email != null) {
        return res.status(400).send({
            message: "Failed! Email already exists"
        });
    }

    //validate if the password exists

    if (!payload.password) {
        return res.status(400).send({
            message: "Failed! Password not provided"
        });
    }

    /**
     * validate if the password is a String or not and the length is 8 or more 
     */

    if (typeof payload.password !== "string" || payload.password.length < 8) {
        return res.status(400).send({
            message: "Password is less than 8 or not a String"
        });
    }

    //..................................//
    next();

}
//export the verify Signup to index.js

module.exports = {

    validateRequest: validateRequest
};