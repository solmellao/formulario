const UsuarioModel = require('../models/usuarioModel');

exports.getAllUsuario = async (req, res) => {

    try {
        const usuario = await UsuarioModel.findAll();
        res.status(200).json({
            ok: true,
            usuario
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            message: 'Error al obtener los datos: ', error,
        })
    }
}

exports.createUsuario = async (req, res) => {
    try {
        console.log(req.body);
        const { username, password, email } = req.body;

        const nuevoUsuario = {
            username,
            password,
            email
        }
        const usuario = await UsuarioModel.create(nuevoUsuario);

        res.status(201).json({
            ok: true,
            message: 'el usuario fue creado con exito',
            usuario
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'error en el servidor'
        })
    }
}

exports.eliminarUsuario = async (req, res) => {
    try {
        const id = req.params.id; // Suponiendo que el ID del usuario a eliminar se pasa como un parámetro en la URL
        // Busca el usuario por su ID
        const usuario = await UsuarioModel.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                message: 'el usuario no fue encontrado',
            });
        }
        // Elimina el usuario
        await usuario.destroy();
        res.status(200).json({
            ok: true,
            message: 'Usuario eliminado con éxito',
        });
    } catch (error) {//captura el error del servidor
        console.error(error);
        res.status(500).json({
            message: 'Error en el servidor',
        });
    }
};

exports.updateUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await UsuarioModel.findByPk(id);
  
      if (!usuario) {
        return res.status(404).json({ message: 'el usuario no fue encontrado' });
      }
  
      // Actualiza los campos del usuario con los valores de req.body
      await usuario.updateUsuario(req.body);
  
      res.status(200).json({ message: 'Usuario actualizado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
};
  
