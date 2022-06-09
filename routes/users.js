const express=require('express');

const router =express.Router();
const usersController = require('../controllers/users_controller');

router.get('/profile',usersController.profile);

router.get('/sign-up',usersController.SignUp);

router.get('/sign-in',usersController.SignIn);



module.exports=router;