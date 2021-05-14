'use strict';

module.exports = (sequelize,DataTypes) => {
    const Carrito = sequelize.define('Carrito',{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull: false
        },
        usuario_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        producto_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cantidad : {
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
        tableName: 'carrito',
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ]
    });

    Carrito.associate = function(models) {
        Carrito.belongsTo(models.Usuario, {as: 'usuario', foreignKey: 'usuario_id'});
        Carrito.belongsTo(models.Producto, {as: 'producto', foreignKey: 'producto_id'});
    };

    return Carrito;
};