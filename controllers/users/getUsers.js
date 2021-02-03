const { User } = require('../../db');
const {Order} = require('../../db');
const jwt = require('jsonwebtoken');

const getUsers = async (req, res)=>{
    const token = req.headers.authorization.split(' ')[1];
    const payload =jwt.decode(token)
    if(payload.role === 'customer'){
        const self = await User.findOne({
            where:{
                email: payload.email
            },
            include: Order
        })
        res.status(200).json({ data: self });
    }else if(payload.role === 'admin'){
        const users = await User.findAll({
            include: Order
        });
        if(users.length != 0){
            res.status(200).json({ users: users });
        }else{
            res.status(404).json({ error: 'There are no users registered' });
        }
    }else{
        res.status(500).json({error: 'Oops! We are having some trouble retreiving the data. Please, try again later'});
    };
};

module.exports = { getUsers }