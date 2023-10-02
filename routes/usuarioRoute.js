const express = require ('express');
const router= express.Router();
const usuarioController= require('../controller/usuarioController');

router.get('/usuario', usuarioController.getAllUsuario);
router.post('/nuevoUsuario', usuarioController.createUsuario);
router.delete('deleteUsuario/:id', usuarioController.eliminarUsuario);
router.put('/updateUsuario/:id', usuarioController.updateUsuario);


// crear put y delete

module.exports=router;