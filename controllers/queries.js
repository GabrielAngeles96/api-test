require('dotenv').config();
var models = require('../models');
let Validator = require('validatorjs');
Validator.useLang('es');

exports.manageQueries = async(req,res)=>{
    var manager = req.params.manager;

    if (manager === 'get_users'){
        return get_users(req,res);
    } else if (manager === 'get_products'){
        return get_products(req,res);
    } else if (manager === 'get_cart_by_user'){
        return get_cart_by_user(req,res);
    } else {
        res.send({status: 404, mensaje: 'Servicio no encontrado'})
    }
};

var get_users = async (req, res) => {
    await models.Usuario.findAll({
        raw: true
    }).then(response => {
        return res.send({
            status: 200,
            mensaje: 'Éxito!',
            data: response
        })
    }).catch(error => {
        return res.send({
            status: 500,
            mensaje: 'Error!',
            data: error.toString()
        })
    })
}

var get_products = async (req, res) => {
    await models.Producto.findAll({
        raw: true
    }).then(response => {
        return res.send({
            status: 200,
            mensaje: 'Éxito!',
            data: response
        })
    }).catch(error => {
        return res.send({
            status: 500,
            mensaje: 'Error!',
            data: error.toString()
        })
    })
}

var get_cart_by_user = async (req, res) => {
    if (req.query.id) {
        await models.Usuario.findOne({
            where: {
                id: req.query.id
            }
        }).then(async user => {
            if (user) {
                await models.Carrito.findAll({
                    attributes: ['id','cantidad'],
                    where: {
                        usuario_id: req.query.id
                    },
                    include: [
                        {
                            model: models.Usuario,
                            required: true,
                            as: 'usuario',
                            attributes: [models.sequelize.literal("CONCAT(usuario.nombres, ' ', usuario.apellidos) as usuario")]
                        },
                        {
                            model: models.Producto,
                            required: true,
                            as: 'producto',
                            attributes: [models.sequelize.literal('producto.descripcion as producto')]
                        }
                    ],
                    raw: true
                }).then(response => {
                    return res.send({
                        status: 200,
                        mensaje: 'Éxito!',
                        data: response
                    })
                }).catch(error => {
                    return res.send({
                        status: 500,
                        mensaje: 'Error!',
                        data: error.toString()
                    })
                })
            } else {
                return res.send({
                    status: 200,
                    mensaje: 'Advertencia!',
                    data: 'Usuario no existente'
                })
            }
        })
    } else {
        return res.send({
            status: 500,
            mensaje: 'Error!',
            data: 'Ingresar el id de usuario correctamente.'
        })
    }
}