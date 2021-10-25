const {getPost} = require('../controller/post.controller.js');

const router = require('express').Router();



router.get('/api/posts',getPost)



module.exports = router