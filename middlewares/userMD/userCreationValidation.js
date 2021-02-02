const userCreationValidation = (req, res, next)=>{
    const user = req.body;
    if (!user.username){
        res.status(400).json({error: 'Username is required'});
    }else if (!user.fullname){
        res.status(400).json({error: 'Full name is required'});
    }else if (!user.email){
        res.status(400).json({error: 'Email is required'});
    }else if (!user.phone){
        res.status(400).json({error: 'Phone is required'});
    }else if (!user.address){
        res.status(400).json({error: 'Address is required'});
    }else if (!user.password){
        res.status(400).json({error: 'Password is required'});
    }else if (!user.role){
        res.status(400).json({error: 'Admin is required'});
    }else{
        next();
    }
};

module.exports = {userCreationValidation};