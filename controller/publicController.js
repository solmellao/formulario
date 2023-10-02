const publicacionModel = require('../models/publicModel');

exports.getAllPublic = async (req, res) =>{

    try {
        const posts = await publicacionModel.findAll();
        res.status(200).json({
            ok: true,
            posts
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            message: 'Error al obtener los datos de posts: ', error,
        })
    }
}