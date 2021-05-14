'use strict';

module.exports = (sequelize,DataTypes) => {
    const Vehiculo = sequelize.define('Vehiculo',{
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
        modelo : {
            type: DataTypes.STRING,
            allowNull: false
        },
        clase_vehiculo : {
            type: DataTypes.STRING,
            allowNull: false
        },
        fabricante : {
            type: DataTypes.STRING,
            allowNull: false
        },
        tamanio : {
            type: DataTypes.DECIMAL(9,2),
            allowNull: false
        },
        costo_credito : {
            type: DataTypes.DECIMAL(11,2),
            allowNull: false
        },
        tripulacion : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pasajeros : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        velocidad_maxima_atmosfera : {
            type: DataTypes.DECIMAL(9,2),
            allowNull: false
        },
        capacidad_carga : {
            type: DataTypes.DECIMAL(9,2),
            allowNull: false
        },
        consumibles : {
            type: DataTypes.STRING,
            allowNull: false
        },
        peliculas : {
            type: DataTypes.STRING,
            allowNull: false
        },
        pilotos : {
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
        tableName: 'vehiculo',
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ]
    });

    return Vehiculo;
};