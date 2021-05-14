'use strict';

module.exports = (sequelize,DataTypes) => {
    const Especie = sequelize.define('Especie',{
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
        clasificacion : {
            type: DataTypes.STRING,
            allowNull: false
        },
        designacion : {
            type: DataTypes.STRING,
            allowNull: false
        },
        altura_media : {
            type: DataTypes.DECIMAL(3,2),
            allowNull: false
        },
        promedio_vida : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        color_ojos : {
            type: DataTypes.STRING,
            allowNull: false
        },
        color_cabello : {
            type: DataTypes.STRING,
            allowNull: false
        },
        color_piel : {
            type: DataTypes.STRING,
            allowNull: false
        },
        lenguaje : {
            type: DataTypes.STRING,
            allowNull: false
        },
        mundo_procedencia : {
            type: DataTypes.STRING,
            allowNull: false
        },
        persona : {
            type: DataTypes.STRING,
            allowNull: false
        },
        peliculas : {
            type: DataTypes.STRING,
            allowNull: false
        },
        url : {
            type: DataTypes.STRING,
            allowNull: false
        },
        creado : {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        editado : {
            type: DataTypes.DATE,
            allowNull: true
        }
    },{
        timestamps: false,
        tableName: 'especie',
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ]
    });

    return Especie;
};