const router = require('express').Router();
const { createUser } = require('../controllers/users/createUser');
const { login } = require('../controllers/users/login');
const { getUsers } = require('../controllers/users/getUsers')
const { userCreationValidation } = require('../middlewares/userMD/userCreationValidation');
const { userCreationDataValidation } = require('../middlewares/userMD/userCreationDataValidation');
const { userLoginValidation } = require('../middlewares/userMD/userLoginValidation');
const { userTokenValidation } = require('../middlewares/userTokenValidation');
const { userTokenAdminValidation } = require('../middlewares/userTokenAdminValidation');


router.post('/register',userCreationValidation, userCreationDataValidation, createUser);
router.post('/login',userLoginValidation, login);
router.get('/', userTokenValidation, userTokenAdminValidation, getUsers);

module.exports = router;