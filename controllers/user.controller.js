const User = require('../models/User');
const userService = require('../services/userService');

const registerUser = (req, res) => {
    //registerUser api logic here
    
};

const getAllUser = async (req, res) => {
    //getUsers api logic here
    try {
        const users = await userService.getAllUsers(req.body);

        return res.status(200).json({
            success: true,
            message: 'Here is the list of the users',
            data: users
        });
    }
    catch (err) {
        return res.status(200).json({
            success: false,
            message: 'Something went wrong!',
        });
    }
};

const UserController = {
    registerUser,
    getAllUser
};

module.exports = UserController;