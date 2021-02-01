const { User } = require('../../db');
const jwt = require('jsonwebtoken');

const login = async (req, res)=>{
    const user = await User.findOne({ where: { email: req.body.email } });
    if(user){
        if(req.body.password === user.password){

            const payload = {
                id: user.id,
                username: user.username,
                fullname: user.fullname,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role
            };
            const token = jwt.sign(payload, process.env.SECRET_KEY);
            res.status(200).json({ token: token });
        }else{
            res.status(403).json({error: 'Invalid username or password'});
        }
    }else{
        res.status(403).json({error: 'Invalid username or password'});
    }
}

module.exports = { login };