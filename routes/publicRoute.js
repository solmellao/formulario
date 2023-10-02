const express = require ('express');
const router= express.Router();
const publicController= require('../controller/publicController');

router.get('/publicacion', publicController.getAllPublic);
// router.post('/NewPost', publiController.createPost);
// router.delete('/deletePost/:id', publiController.deletePost);
// router.put('/updatePost/:id', publiController.updatePost);


// crear put y delete

module.exports=router;