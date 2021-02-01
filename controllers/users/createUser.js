const {User} = require('../../db');

const createUser = async (req, res)=> {
    const newUser = req.body;
    const user = await User.create(newUser);
    res.status(200).json({message: 'User created successfully', user: user});
}

module.exports = {createUser};