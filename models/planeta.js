'use strict';

module.exports = (sequelize,DataTypes) => {
    const Planeta = sequelize.define('Planeta',{
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
        diametro : {
            type: DataTypes.DECIMAL(11,2),
            allowNull: false
        },
        periodo_rotacion : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        periodo_orbital : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gravedad : {
            type: DataTypes.DECIMAL(3,2),
            allowNull: false
        },
        poblacion : {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        clima : {
            type: DataTypes.STRING,
            allowNull: false
        },
        terreno : {
            type: DataTypes.STRING,
            allowNull: false
        },
        superficie_agua : {
            type: DataTypes.DECIMAL(3,2),
            allowNull: false
        },
        residentes : {
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
        tableName: 'planeta',
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ]
    });

    return Planeta;
};