const express = require("express");

const router=express.Router();
const postController=require('../controllers/posts_controller');

router.get('/post1',postController.posts);

module.exports=router;