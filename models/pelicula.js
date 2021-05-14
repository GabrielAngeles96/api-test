'use strict';

module.exports = (sequelize,DataTypes) => {
    const Pelicula = sequelize.define('Pelicula',{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull: false
        },
        titulo : {
            type: DataTypes.STRING,
            allowNull: false
        },
        episodio_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        opening : {
            type: DataTypes.STRING,
            allowNull: false
        },
        director : {
            type: DataTypes.STRING,
            allowNull: false
        },
        productor : {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_lanzamiento : {
            type: DataTypes.DATE,
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
        personajes : {
            type: DataTypes.STRING,
            allowNull: false
        },
        planetas : {
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
        tableName: 'pelicula',
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ]
    });

    return Pelicula;
};