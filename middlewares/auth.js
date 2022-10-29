/**
 * MIddleware for Authentication and Authorization
 */
const Jwt = require('jsonwebtoken');
const Config = require('../configs/auth.config');


verifyToken = (req, res, next) => {

    var token = req.headers['x-access-token'];
    if (!token) {
        return res.status(400).send({
            message: "Bad Request!"
        });
    }

    //If the token is provided, we need to verify it.
    Jwt.verify(token, Config.Secret_Key, (err, decoded) => {

        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        // extract the username from the token
        req.username = decoded.username;
    });
    
    next();
}


const authJwt = {
    verifyToken,
};

module.exports = authJwt;