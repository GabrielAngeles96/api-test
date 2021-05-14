require('dotenv').config();
var models = require('../models');
let Validator = require('validatorjs');
Validator.useLang('es');

exports.manageInsert = async(req,res)=>{
    var manager = req.params.manager;

    if(manager === 'create_user'){
        return create_user(req,res);
    } else if(manager === 'create_product'){
        return create_product(req,res);
    } else if(manager === 'add_to_cart'){
        return add_to_cart(req,res);
    } else {
        res.send({status: 404, mensaje: 'Servicio no encontrado'})
    }
};

var create_user = async (req, res) => {
    var body = req.body;

    var rules = {
        nombres: 'required|string|min:2|max:50',
        apellidos: 'required|string|min:2|max:50',
        dni: 'required|string|min:8',
        telefono: 'required|string|min:7|max:10',
        correo: 'required|email',
        fecha_nacimiento: 'required|string|max:10|date'
    };

    var data = {
        nombres: body.nombres,
        apellidos: body.apellidos,
        dni: body.dni,
        telefono: body.telefono,
        correo: body.correo,
        fecha_nacimiento: body.fecha_nacimiento
    };

    var validation = new Validator(data, rules);
    var vError = validation.errors.errors;
    var Op = models.sequelize;

    if (validation.fails()) {
        return res.send({
            status: 500,
            errors: vError
        })
    } else {
        await models.Usuario.findOne({
            where: {
                dni : data.dni
            }
        }).then(async respDni => {
            if (respDni) {
                return res.send({
                    status: 200,
                    errors: 'Ya existe un usuario registrado con este DNI.'
                })
            } else {
                await models.Usuario.findOne({
                    where: {
                        correo : data.correo
                    }
                }).then(async respCorreo => {
                    if (respCorreo) {
                        return res.send({
                            status: 200,
                            errors: 'Ya existe un usuario registrado con este correo.'
                        })
                    } else {
                        await models.sequelize.transaction().then(t => {
                            return models.Usuario.create(data, 
                                {transaction: t}).then(response => {
                                t.commit();
                                return res.send({
                                    status: 200,
                                    mensaje: 'Registro Exitoso'
                                })
                            }).catch(error  => {
                                t.rollback();
                                return res.send({
                                    status: 500,
                                    mensaje: 'Ocurrió un error en el registro.'
                                })
                            })
                        })
                    }
                }).catch(err => {
                    console.log(err)
                    return res.send({
                        status: 500,
                        mensaje: 'Ocurrió un error en el registro.'
                    })
                })
            }
        }).catch(err => {
            console.log(err)
            return res.send({
                status: 500,
                mensaje: 'Ocurrió un error en el registro.'
            })
        })
    }
}

var create_product = async (req, res) => {
    var body = req.body;

    var rules = {
        descripcion: 'required|string|min:2|max:100',
        precio: 'required',
        stock: 'required|integer'
    };

    var data = {
        descripcion: body.descripcion,
        precio: body.precio,
        stock: body.stock
    };

    var validation = new Validator(data, rules);
    var vError = validation.errors.errors;

    if (validation.fails()) {
        return res.send({
            status: 500,
            errors: vError
        })
    } else {
        await models.Producto.findOne({
            where: {
                descripcion : data.descripcion
            }
        }).then(async respDesc => {
            if (respDesc) {
                return res.send({
                    status: 200,
                    errors: 'Ya existe este producto.'
                })
            } else {
                await models.sequelize.transaction().then(t => {
                    return models.Producto.create(data, 
                        {transaction: t}).then(response => {
                        t.commit();
                        return res.send({
                            status: 200,
                            mensaje: 'Registro Exitoso'
                        })
                    }).catch(error  => {
                        t.rollback();
                        return res.send({
                            status: 500,
                            mensaje: 'Ocurrió un error en el registro.'
                        })
                    })
                })
            }
        }).catch(err => {
            console.log(err)
            return res.send({
                status: 500,
                mensaje: 'Ocurrió un error en el registro.'
            })
        })
    }
}

var add_to_cart = async (req, res) => {
    var body = req.body;

    var rules = {
        usuario_id: 'required|integer',
        producto_id: 'required|integer',
        cantidad: 'required|integer'
    };

    var data = {
        usuario_id: body.usuario_id,
        producto_id: body.producto_id,
        cantidad: body.cantidad
    };

    var validation = new Validator(data, rules);
    var vError = validation.errors.errors;

    if (validation.fails()) {
        return res.send({
            status: 500,
            errors: vError
        })
    } else {
        await models.Usuario.findOne({
            attributes: ['id'],
            where: {
                id : data.usuario_id
            }
        }).then(async respUser => {
            if (!respUser) {
                return res.send({
                    status: 200,
                    errors: 'No existe este usuario.'
                })
            } else {
                await models.Producto.findOne({
                    where: {
                        id : data.producto_id
                    }
                }).then(async respProd => {
                    if (!respProd) {
                        return res.send({
                            status: 200,
                            errors: 'No existe este usuario.'
                        })
                    } else {
                        if (respProd.stock >= data.cantidad) {
                            await models.sequelize.transaction().then(async function (t) {
                                await models.Carrito.create(
                                    data, 
                                    {transaction: t}
                                ).then(async response => {
                                        t.commit();
                                        await models.sequelize.transaction().then(async function (t2) {
                                            await respProd.update({
                                                stock: respProd.stock - data.cantidad,
                                                updated_at: new Date()
                                            },{transaction: t2}).then(respUpdate => {
                                                t2.commit();
                                                return res.send({
                                                    status: 200,
                                                    mensaje: 'Registro Exitoso'
                                                })
                                            }).catch(err => {
                                                t2.rollback();
                                                return res.send({
                                                    status: 500,
                                                    mensaje: 'Ocurrió un error en el registro.'
                                                })
                                            })
                                        })
                                }).catch(error  => {
                                    t.rollback();
                                    return res.send({
                                        status: 500,
                                        mensaje: 'Ocurrió un error en el registro.'
                                    })
                                })
                            })
                        } else {
                            return res.send({
                                status: 200,
                                errors: 'Stock insuficiente.'
                            })  
                        }
                    }
                }).catch(err => {
                    return res.send({
                        status: 500,
                        mensaje: 'Ocurrió un error en el registro.'
                    })
                })
            }
        }).catch(err => {
            console.log(err)
            return res.send({
                status: 500,
                mensaje: 'Ocurrió un error en el registro.'
            })
        })
    }
}