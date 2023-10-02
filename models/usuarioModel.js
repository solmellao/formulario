const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Publicacion = require('./publicModel');
const Public = require('./publicModel');


class Usuario extends Model { }

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},
    {
        sequelize,
        modelName: 'Usuario'
    });


    //aca se realiza la relacion entre las tablas de usuario y publicacion

Public.belongsTo(Usuario, { //belongsTo siginifica "pertenece a" -> por ejemplo aca seria la publiacion pertece a un usuario
    foreignKey: "userId",
}) 
Usuario.hasMany(Public, { //hasMany siginifica "union de muchos a uno" -> por ejemplo aca seria el usuario pertece a la publicacion
    foreignKey: "publicId",
}) 

// User.Post = User.belongsTo(Post);

Usuario.sync().then(() => {
        console.log('La tabla de usuarios ha sido creada');
    })
    .catch((error) => {
        console.error('Error al crear la tabla de usuarios: ', error);
    });

module.exports = Usuario;