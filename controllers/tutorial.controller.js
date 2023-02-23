const { response } = require('express');
const Tutorial = require('../models/tutorial.model');

// Recupere todos los tutoriales de la base de datos.
const getTutorials = async (req, res = response) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    Tutorial.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Se produjo un error al recuperar los tutoriales."
            });
        });
}

// Encuentre un solo tutorial con una identificación
const getTutorialById = async (req, res = response) => {
    const id = req.params.id;
    Tutorial.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Tutorial no encontrado con id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error al recuperar Tutorial con id=" + id });
        });
}

// Crear y guardar un nuevo tutorial
const createTutorial = async (req, res = response) => {
    // Validar solicitud
    if (!req.body.title) {
        res.status(400).send({ message: "El contenido no puede estar vacío!" });
        return;
    }
    // Crear un Tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });
    // Guardar tutorial en la base de datos
    tutorial
        .save(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió algún error al crear el Tutorial."
            });
        });
}

// Actualizar un Tutorial por la identificación en la solicitud
const updateTutorial = async (req, res = response) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Los datos a actualizar no pueden estar vacíos!"
        });
    }
    const id = req.params.id;
    Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `No se puede actualizar Tutorial con id= ${id}. Tal vez Tutorial no fue encontrado!`
                });
            } else res.send({ message: "El tutorial se actualizó con éxito." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar Tutorial con id= " + id
            });
        });
}

// Eliminar un tutorial con la identificación especificada en la solicitud
const deleteTutorial = async (req, res = response) => {
    const id = req.params.id;
    Tutorial.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `No se puede eliminar Tutorial con id= ${id}. Tal vez Tutorial no fue encontrado!`
                });
            } else {
                res.send({
                    message: "El tutorial se eliminó con éxito!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar Tutorial con id= " + id
            });
        });
}

// Eliminar todos los tutoriales de la base de datos.
const deleteAllTutorials = async (req, res = response) => {
    Tutorial.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Los tutoriales se eliminaron con éxito!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Se produjo un error al eliminar todos los tutoriales."
            });
        });
}

// Encuentra todos los Tutoriales publicados
const findAllPublished = async (req, res = response) => {
    Tutorial.find({ published: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Se produjo un error al recuperar los tutoriales."
            });
        });
}

module.exports = {
    getTutorials,
    getTutorialById,
    createTutorial,
    updateTutorial,
    deleteTutorial,
    deleteAllTutorials,
    findAllPublished
}