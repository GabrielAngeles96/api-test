'use strict';

module.exports = (sequelize,DataTypes) => {
    const Persona = sequelize.define('Persona',{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull: false
        },
        nombre : {
            type: DataTypes.STRING,
            allowNull: false
        },
        anio_nacimiento : {
            type: DataTypes.STRING,
            allowNull: false
        },
        color_ojos : {
            type: DataTypes.STRING,
            allowNull: false
        },
        genero : {
            type: DataTypes.STRING,
            allowNull: false
        },
        color_cabello : {
            type: DataTypes.STRING,
            allowNull: false
        },
        altura : {
            type: DataTypes.DECIMAL(5,2),
            allowNull: false
        },
        masa : {
            type: DataTypes.DECIMAL(5,2),
            allowNull: false
        },
        color_piel : {
            type: DataTypes.STRING,
            allowNull: false
        },
        mundo_origen : {
            type: DataTypes.STRING,
            allowNull: false
        },
        peliculas : {
            type: DataTypes.STRING,
            allowNull: false
        },
        especies : {
            type: DataTypes.STRING,
            allowNull: false
        },
        naves_espaciales : {
            type: DataTypes.STRING,
            allowNull: false
        },
        vehiculos : {
            type: DataTypes.STRING,
            allowNull: false
        },
        url : {
            type: DataTypes.STRING,
            allowNull: false
        },
        creado : {
            type: DataTypes.DATE,
            allowNull: false
        },
        editado : {
            type: DataTypes.DATE,
            allowNull: true
        }
    },{
        timestamps: false,
        tableName: 'persona',
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ]
    });

    return Persona;
};