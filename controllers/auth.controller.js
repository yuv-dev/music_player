const User = require('../models/User');
const bcrypt = require('bcrypt');


const login = async (req, res) => {
    //login api logic here
    try {

        const user = await findOne(req.body.username);

        if (!user)
            return res.status(400).send({
                success: false,
                message: 'User does not exist!'
            });

        //Password check
        const isPasswordValid = compareSync(req.body.password, user.password);

        if (!isPasswordValid)
            return res.status(400).send({
                success: false,
                message: 'Passwords do not match!'
            });

        //signin successful
        const token = jwt.sign({ id: user.userId }, authConfig.secret,
            {
                expiresIn: 600
            });

        return res.status(200).send({
            success: true,
            message: 'Login Successful!',
            accesstoken: token,
            data: user
        });


    } catch (err) {
        console.log(err);
        return res.state(500).send({
            success: false,
            message: ' Some internal Error!'
        });

    }
};

const signup = async (req, res) => {

    const payload = req.body;

    const userObjToBeStoredInDb = {
        username: payload.username,
        email: payload.email,
        password: bcrypt.hashSync(payload.password, 8)
    }

    try {
        const user = await User.create(userObjToBeStoredInDb);

        return res.status(201).json({
            success: true,
            message: 'User successfully created!',
            data: user
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong!',
        });
    }

}

const AuthController = {
    login,
    signup
};

module.exports = AuthController;