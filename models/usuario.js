'use strict';

module.exports = (sequelize,DataTypes) => {
    const Usuario = sequelize.define('Usuario',{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull: false
        },
        nombres : {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidos : {
            type: DataTypes.STRING,
            allowNull: false
        },
        dni : {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono : {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo : {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_nacimiento : {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at : {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updated_at : {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleted_at : {
            type: DataTypes.DATE,
            allowNull: true
        }
    },{
        timestamps: false,
        tableName: 'usuario',
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ]
    });

    return Usuario;
};