const express=require('express');

const router =express.Router();
const usersController = require('../controllers/users_controller');
const passport=require('passport');

router.get('/profile',passport.checkAuthentication,usersController.profile);

router.get('/sign-up',usersController.SignUp);

router.get('/sign-in',usersController.SignIn);

router.post('/create',usersController.create);

//use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
),usersController.createSession);

router.get('/sign-out',usersController.destroySession);

module.exports=router;