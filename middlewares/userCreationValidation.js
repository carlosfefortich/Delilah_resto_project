const userCreationValidation = (req, res, next)=>{
    const user = req.body;
    if (!user.username){
        res.status(400).json('Username is required');
    }else if (!user.fullname){
        res.status(400).json('Full name is required');
    }else if (!user.email){
        res.status(400).json('Email is required');
    }else if (!user.phone){
        res.status(400).json('Phone is required');
    }else if (!user.address){
        res.status(400).json('Address is required');
    }else if (!user.password){
        res.status(400).json('Password is required');
    }else if (!user.role){
        res.status(400).json('Admin is required');
    }else{
        next();
    }
};

module.exports = {userCreationValidation};