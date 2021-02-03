const {User} = require('../../db');

const createUser = async (req, res)=> {
    const newUser = req.body;
    if(newUser.role != 'admin' || newUser.role != 'customer'){
        res.status(400).json({error: 'role property must be admin or customer'});
    }else{
        const user = await User.create(newUser);
        res.status(200).json({message: 'User created successfully', user: user});
    }
    
}

module.exports = {createUser};