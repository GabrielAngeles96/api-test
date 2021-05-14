'use strict';

module.exports = (sequelize,DataTypes) => {
    const Producto = sequelize.define('Producto',{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull: false
        },
        descripcion : {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio : {
            type: DataTypes.DECIMAL(9,2),
            allowNull: false
        },
        stock : {
            type: DataTypes.INTEGER,
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
        tableName: 'producto',
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ]
    });

    return Producto;
};