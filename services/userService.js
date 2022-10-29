// User service logic here

const User = require('../models/User');

const getAllUsers = async (data) => {

    try {
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
    }

}

const userService = {
    getAllUsers
}

module.exports = userService;

