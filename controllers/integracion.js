require('dotenv').config();
var models = require('../models');
const fetch = require('node-fetch');

exports.manageIntegracion = async(req,res)=>{
    var manager = req.params.manager;

    if(manager === 'persona'){
        return persona(req,res);
    } else if(manager === 'pelicula'){
        return pelicula(req,res);
    } else if(manager === 'especie'){
        return especie(req,res);
    } else if(manager === 'nave_espacial'){
        return nave_espacial(req,res);
    } else if(manager === 'vehiculo'){
        return vehiculo(req,res);
    } else if(manager === 'planeta'){
        return planeta(req,res);
    } else if(manager === 'migrar_persona'){
        return migrar_persona(req,res);
    } else if (manager === 'listar_persona_migrada') {
        return listar_persona_migrada(req,res);
    } else {
        res.send({status: 404, mensaje: 'Servicio no encontrado'})
    }
};

var persona = async (req, res) => {
    var id = req.body.id;

    if (id && Number.isInteger(id)) {
        await fetch('https://swapi.dev/api/people/' + id).then(async (response) => {
            var model = await response.json()
            
            if (model.detail) {
                return res.send({
                    status: 200,
                    mensaje: 'Objeto no encontrado'
                })
            } else {
                var persona = new models.Persona();
                persona.id = id;
                persona.nombre = model.name;
                persona.anio_nacimiento = model.birth_year;
                persona.color_ojos = model.eye_color;
                persona.genero = model.gender;
                persona.color_cabello = model.hair_color;
                persona.altura = model.height;
                persona.masa = model.mass;
                persona.color_piel = model.skin_color;
                persona.mundo_origen = model.homeworld;
                persona.peliculas = model.films;
                persona.especies = model.species;
                persona.naves_espaciales = model.starships;
                persona.vehiculos = model.vehicles;
                persona.url = model.url;
                persona.creado = model.created;
                persona.editado = model.edited;

                return res.send(persona)
            }
        }).catch(error => {
            return res.send(error)
        })
    } else {
        return res.send({
            status: 500,
            mensaje: 'Ingresar parámetro id correctamente'
        })
    }
}

var pelicula = async (req, res) => {
    var id = req.body.id;

    if (id && Number.isInteger(id)) {
        await fetch('https://swapi.dev/api/films/' + id).then(async (response) => {
            var model = await response.json()
            
            if (model.detail) {
                return res.send({
                    status: 200,
                    mensaje: 'Objeto no encontrado'
                })
            } else {
                var pelicula = new models.Pelicula();
                pelicula.id = id;
                pelicula.titulo = model.title;
                pelicula.episodio_id = model.episode_id;
                pelicula.opening = model.opening_crawl;
                pelicula.director = model.director;
                pelicula.productor = model.producer;
                pelicula.fecha_lanzamiento = model.release_date;
                pelicula.personajes = model.characters;
                pelicula.planetas = model.planets;
                pelicula.naves_espaciales = model.starships;
                pelicula.vehiculos = model.vehicles;
                pelicula.especies = model.species;
                pelicula.url = model.url;
                pelicula.creado = model.created;
                pelicula.editado = model.edited;

                return res.send(pelicula)
            }
        }).catch(error => {
            return res.send(error)
        })
    } else {
        return res.send({
            status: 500,
            mensaje: 'Ingresar parámetro id correctamente'
        })
    }
}

var planeta = async (req, res) => {
    var id = req.body.id;

    if (id && Number.isInteger(id)) {
        await fetch('https://swapi.dev/api/planets/' + id).then(async (response) => {
            var model = await response.json()
            
            if (model.detail) {
                return res.send({
                    status: 200,
                    mensaje: 'Objeto no encontrado'
                })
            } else {
                var planeta = new models.Planeta();
                planeta.id = id;
                planeta.nombre = model.name;
                planeta.diametro = model.diameter;
                planeta.periodo_rotacion = model.rotation_period;
                planeta.periodo_orbital = model.orbital_period;
                planeta.gravedad = model.gravity;
                planeta.poblacion = model.population;
                planeta.clima = model.climate;
                planeta.terreno = model.terrain;
                planeta.superficie_agua = model.surface_water;
                planeta.residentes = model.residents;
                planeta.peliculas = model.films;
                planeta.url = model.url;
                planeta.creado = model.created;
                planeta.editado = model.edited;

                return res.send(planeta)
            }
        }).catch(error => {
            return res.send(error)
        })
    } else {
        return res.send({
            status: 500,
            mensaje: 'Ingresar parámetro id correctamente'
        })
    }
}

var especie = async (req, res) => {
    var id = req.body.id;

    if (id && Number.isInteger(id)) {
        await fetch('https://swapi.dev/api/species/' + id).then(async (response) => {
            var model = await response.json()
            
            if (model.detail) {
                return res.send({
                    status: 200,
                    mensaje: 'Objeto no encontrado'
                })
            } else {
                var especie = new models.Especie();
                especie.id = id;
                especie.nombre = model.name;
                especie.clasificacion = model.classification;
                especie.designacion = model.designation;
                especie.altura_media = model.average_height;
                especie.promedio_vida = model.average_lifespan;
                especie.color_ojos = model.eye_colors;
                especie.color_cabello = model.hair_colors;
                especie.color_piel = model.skin_colors;
                especie.lenguaje = model.language;
                especie.mundo_procedencia = model.homeworld;
                especie.persona = model.people;
                especie.peliculas = model.films;
                especie.url = model.url;
                especie.creado = model.created;
                especie.editado = model.edited;

                return res.send(especie)
            }
        }).catch(error => {
            return res.send(error)
        })
    } else {
        return res.send({
            status: 500,
            mensaje: 'Ingresar parámetro id correctamente'
        })
    }
}

var nave_espacial = async (req, res) => {
    var id = req.body.id;

    if (id && Number.isInteger(id)) {
        await fetch('https://swapi.dev/api/starships/' + id).then(async (response) => {
            var model = await response.json()
            
            if (model.detail) {
                return res.send({
                    status: 200,
                    mensaje: 'Objeto no encontrado'
                })
            } else {
                var nave_espacial = new models.NaveEspacial();
                nave_espacial.id = id;
                nave_espacial.nombre = model.name;
                nave_espacial.modelo = model.model;
                nave_espacial.clase_nave_espacial = model.starship_class;
                nave_espacial.fabricante = model.manufacturer;
                nave_espacial.costo_credito = model.cost_in_credits;
                nave_espacial.tamanio = model.length;
                nave_espacial.tripulacion = model.crew;
                nave_espacial.pasajeros = model.passengers;
                nave_espacial.velocidad_maxima_atmosfera = model.max_atmosphering_speed;
                nave_espacial.calificacion_hiperimpulsor = model.hyperdrive_rating;
                nave_espacial.MGLT = model.MGLT;
                nave_espacial.capacidad_carga = model.cargo_capacity;
                nave_espacial.consumibles = model.consumables;
                nave_espacial.peliculas = model.films;
                nave_espacial.pilotos = model.pilots;
                nave_espacial.url = model.url;
                nave_espacial.creado = model.created;
                nave_espacial.editado = model.edited;

                return res.send(nave_espacial)
            }
        }).catch(error => {
            return res.send(error)
        })
    } else {
        return res.send({
            status: 500,
            mensaje: 'Ingresar parámetro id correctamente'
        })
    }
}

var vehiculo = async (req, res) => {
    var id = req.body.id;

    if (id && Number.isInteger(id)) {
        await fetch('https://swapi.dev/api/vehicles/' + id).then(async (response) => {
            var model = await response.json()
            
            if (model.detail) {
                return res.send({
                    status: 200,
                    mensaje: 'Objeto no encontrado'
                })
            } else {
                var vehiculo = new models.Vehiculo();
                vehiculo.id = id;
                vehiculo.nombre = model.name;
                vehiculo.modelo = model.model;
                vehiculo.clase_vehiculo = model.starship_class;
                vehiculo.fabricante = model.manufacturer;
                vehiculo.costo_credito = model.cost_in_credits;
                vehiculo.tamanio = model.length;
                vehiculo.tripulacion = model.crew;
                vehiculo.pasajeros = model.passengers;
                vehiculo.velocidad_maxima_atmosfera = model.max_atmosphering_speed;
                vehiculo.capacidad_carga = model.cargo_capacity;
                vehiculo.consumibles = model.consumables;
                vehiculo.peliculas = model.films;
                vehiculo.pilotos = model.pilots;
                vehiculo.url = model.url;
                vehiculo.creado = model.created;
                vehiculo.editado = model.edited;

                return res.send(vehiculo)
            }
        }).catch(error => {
            return res.send(error)
        })
    } else {
        return res.send({
            status: 500,
            mensaje: 'Ingresar parámetro id correctamente'
        })
    }
}

var migrar_persona = async (req, res) => {
    var id = req.body.id;
    
    if (id && Number.isInteger(id)) {
        var model = await fetch('https://swapi.dev/api/people/' + id).then(async (response) => {
            return await response.json()
        }).catch(error => {
            return res.send(error)
        })

        if (!model.detail) {
            await models.Persona.findOne({
                attributes: ['id'],
                where: {
                    nombre: model.name
                },
                raw: true
            }).then(async response => {
                if (!response) {
                    var persona = new models.Persona();
                    persona.nombre = model.name;
                    persona.anio_nacimiento = model.birth_year;
                    persona.color_ojos = model.eye_color;
                    persona.genero = model.gender;
                    persona.color_cabello = model.hair_color;
                    persona.altura = model.height;
                    persona.masa = model.mass;
                    persona.color_piel = model.skin_color;
                    persona.mundo_origen = model.homeworld;
                    persona.peliculas = JSON.stringify(model.films);
                    persona.especies = JSON.stringify(model.species);
                    persona.naves_espaciales = JSON.stringify(model.starships);
                    persona.vehiculos = JSON.stringify(model.vehicles);
                    persona.url = model.url;
                    persona.creado = model.created;
                    persona.editado = model.edited;
    
                    await models.sequelize.transaction().then(t => {
                        return models.Persona.create(persona.dataValues, 
                            {transaction: t}).then(respInsert => {
                            t.commit();
                            return res.send({
                                status: 200,
                                mensaje: 'Migración Exitosa'
                            })
                        }).catch(errorInsert => {
                            t.rollback();
                            return res.send({
                                status: 500,
                                mensaje: 'Error en la migración'
                            })
                        })
                    })
                } else {
                    return res.send({
                        status: 200,
                        mensaje: 'Objeto ya migrado'
                    })
                }
            }).catch(error => {
                console.log(error)
                return res.send({
                    status: 500,
                    mensaje: 'Error en la migración'
                })
            })
        } else {
            return res.send({
                status: 200,
                mensaje: 'Objeto a migrar no encontrado'
            })
        }
    } else {
        return res.send({
            status: 500,
            mensaje: 'Ingresar parámetro id correctamente'
        })
    }
}

var listar_persona_migrada = async (req, res) => {
    await models.Persona.findAll({
        raw: true
    }).then(async response => {
        return res.send({
            status: 200,
            mensaje: 'Éxito!',
            data: response
        })
    }).catch(error => {
        console.log(error)
        return res.send({
            status: 5500,
            mensaje: error.toString(),
            data: []
        })
    })
}