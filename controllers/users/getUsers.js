const { User } = require('../../db');

const getUsers = async (req, res)=>{
    const users = await User.findAll();

    if(users.length != 0){
        res.status(200).json({ users: users });
    }else{
        res.status(404).json({ error: 'There are no users registered' })
    }
};

module.exports = { getUsers }