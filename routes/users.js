const express=require('express');

const router =express.Router();
const usersController = require('../controllers/users_controller');

router.get('/profile',usersController.profile);
router.use('/friends',usersController.friends);

module.exports=router;