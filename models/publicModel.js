// models/Publicacion.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./usuarioModel');
class Public extends Model { }

// Define los campos del modelo de Publicacion
Public.init({
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true, // Puedes ajustar esto según tus necesidades
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
   allowNull: false,
   foreingKey: 'usuarioId'
  }
},
  {
    sequelize,
    modelName: 'Publicacion',
  });


Public.sync().then(() => {
  console.log('La tabla de Públicación ha sido creada');
})
  .catch((error) => {
    console.error('Error al crear la tabla de Publicación: ', error);
  });



module.exports = Public;
// Define la relación inversa entre Usuario y Publicaciones

